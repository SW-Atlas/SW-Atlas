function drawViewer(root) {
  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const model = models[root.dataset.model];
  const site = model[root.dataset.site];
  const receptor = model.trace;
  const closeUp=root.hasAttribute('data-close-up');
  const topology=closeUp?ligandDiagrams[pocketById[root.dataset.site].code]:null;
  const byName=new Map(site.atomNames.map((name,i)=>[name,site.ligand[i]]));
  const ligandBonds=(topology?.bonds || []).map(([a,b])=>[byName.get(topology.atoms[a][0]),byName.get(topology.atoms[b][0])]).filter(([a,b])=>a && b);
  let angleX=-.3, angleY=.35, focus=closeUp, pointer, selected=0;
  const average = points => [0,1,2].map(i=>points.reduce((sum,p)=>sum+p[i],0)/points.length);
  const center = average(receptor.map(p=>p.slice(2)));
  const pocketCenter = average(site.ligand);
  const size = Math.max(...receptor.map(p=>Math.hypot(...p.slice(2).map((v,i)=>v-center[i]))));
  const paint = () => {
    const w=canvas.clientWidth,h=canvas.clientHeight, dpr=devicePixelRatio || 1;
    if (!w || !h) return;
    canvas.width=w*dpr; canvas.height=h*dpr;
    ctx.scale(dpr,dpr);
    const origin=focus?pocketCenter:center;
    const zoom=Math.min(w,h)*.43/(focus?13:size);
    const project = point => {
      const [x,y,z]=point.map((v,i)=>v-origin[i]);
      const x1=x*Math.cos(angleY)+z*Math.sin(angleY);
      const z1=-x*Math.sin(angleY)+z*Math.cos(angleY);
      return [w*.5+x1*zoom,h*.49+(y*Math.cos(angleX)-z1*Math.sin(angleX))*zoom,
        y*Math.sin(angleX)+z1*Math.cos(angleX)];
    };
    const runs=[];
    let run=null;
    for (let i=0;i<receptor.length;i++) {
      const p=receptor[i];
      if (!run) { run=[p]; continue; }
      const q=run[run.length-1];
      if (q[0]!==p[0] || p[1]-q[1]!==1 || Math.hypot(...p.slice(2).map((v,j)=>v-q[j+2]))>4.6) {
        runs.push(run); run=[p];
      } else run.push(p);
    }
    if (run) runs.push(run);
    const paths=runs.filter(r=>r.length>=2).map(seq=>{
      const pts=seq.map(p=>{const [x,y,z]=project(p.slice(2));return{x,y,z};});
      const z=pts.reduce((s,p)=>s+p.z,0)/pts.length;
      const path=new Path2D();
      path.moveTo(pts[0].x,pts[0].y);
      for (let i=0;i<pts.length-1;i++) {
        const p0=pts[Math.max(0,i-1)],p1=pts[i],p2=pts[i+1],p3=pts[Math.min(pts.length-1,i+2)];
        path.bezierCurveTo(p1.x+(p2.x-p0.x)/6,p1.y+(p2.y-p0.y)/6,
          p2.x-(p3.x-p1.x)/6,p2.y-(p3.y-p1.y)/6,p2.x,p2.y);
      }
      return {path,z,chain:seq[0][0]};
    });
    paths.sort((a,b)=>a.z-b.z);
    const colors=['#7fd0b0','#6fb6d8','#a9c6e8','#9edb80','#c3a8e2'];
    for (const rd of paths) {
      const col=colors[(rd.chain.charCodeAt(0)-65)%colors.length];
      const alpha=Math.max(.30,Math.min(.85,.55+rd.z/120));
      ctx.strokeStyle=col;
      ctx.globalAlpha=alpha*.45;
      ctx.lineWidth=focus?7:8.5;
      ctx.lineCap='round'; ctx.lineJoin='round';
      ctx.stroke(rd.path);
      ctx.globalAlpha=alpha;
      ctx.lineWidth=focus?2:2.6;
      ctx.stroke(rd.path);
    }
    ctx.globalAlpha=1;
    if (closeUp) {
      ctx.strokeStyle='#ffe0a4';
      ctx.lineWidth=1.9;
      for (const [a,b] of ligandBonds) {
        const [x1,y1]=project(a),[x2,y2]=project(b);
        ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
      }
    }
    for(const [points,color,radius] of [[site.near,'#74dec6',focus?3:1.7],[site.ligand,'#ffd185',focus?3.5:2.5]]){
      ctx.fillStyle=color;
      for(const p of points){ const [x,y]=project(p);ctx.beginPath();ctx.arc(x,y,radius,0,2*Math.PI);ctx.fill(); }
    }
    if (closeUp && site.contactPairs[selected]) {
      const [a,b]=site.contactPairs[selected].map(project);
      ctx.strokeStyle='#fff';
      ctx.lineWidth=1.6;
      ctx.setLineDash([4,3]);
      ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.stroke();
      ctx.setLineDash([]);
      for (const [x,y] of [a,b]) {ctx.beginPath();ctx.arc(x,y,5,0,2*Math.PI);ctx.stroke();}
    }
  };
  canvas.addEventListener('pointerdown',e=>{pointer=[e.clientX,e.clientY];canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{
    if(!pointer) return;
    angleY+=(e.clientX-pointer[0])*.012;angleX+=(e.clientY-pointer[1])*.012;
    pointer=[e.clientX,e.clientY];paint();
  });
  for(const type of ['pointerup','pointercancel','lostpointercapture']) canvas.addEventListener(type,()=>{pointer=null;});
  canvas.addEventListener('keydown',e=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) return;
    e.preventDefault();
    angleY+=e.key==='ArrowLeft'?-.13:e.key==='ArrowRight'?.13:0;
    angleX+=e.key==='ArrowUp'?-.13:e.key==='ArrowDown'?.13:0;
    paint();
  });
  const toggle = root.querySelector('[data-view="focus"]');
  root.addEventListener('contact-change',e=>{selected=e.detail;paint();});
  const setFocus = value => {
    focus = value;
    toggle.setAttribute('aria-pressed',String(value));
    paint();
  };
  toggle.onclick=()=>setFocus(!focus);
  root.querySelector('[data-view="reset"]').onclick=()=>{angleX=-.3;angleY=.35;setFocus(closeUp);};
  const observer = new ResizeObserver(paint);
  observer.observe(canvas);
  paint();
  return ()=>observer.disconnect();
}
