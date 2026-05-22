// ── Custom cursor ────────────────────────────────────────────────────
const cur=document.getElementById('cursor'), ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px'});
(function animRing(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)})();

// ── Scroll progress ──────────────────────────────────────────────────
const prog=document.getElementById('progress'),nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
  const pct=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100;
  prog.style.width=pct+'%';
  nav.classList.toggle('scrolled',window.scrollY>60);
});

// ── Reveal on scroll ─────────────────────────────────────────────────
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('up')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// ── Typing animation ─────────────────────────────────────────────────
const phrases=['AI Marketing Specialist','LLM Systems Builder','Fintech Risk Expert','Prompt Engineer','AI-Powered Marketer'];
let pi=0,ci=0,del=false;const typed=document.getElementById('typed-text');
function type(){
  const p=phrases[pi];
  if(!del){typed.textContent=p.slice(0,++ci);if(ci===p.length){del=true;setTimeout(type,1800);return}}
  else{typed.textContent=p.slice(0,--ci);if(ci===0){del=false;pi=(pi+1)%phrases.length}}
  setTimeout(type,del?50:90);
}
setTimeout(type,600);

// ── Counter animation ────────────────────────────────────────────────
const counterObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    const el=e.target,target=+el.dataset.target,dur=1500;
    let start=null;
    function step(ts){if(!start)start=ts;const p=Math.min((ts-start)/dur,1);el.textContent=Math.floor(p*target)+(p<1?'':'+');if(p<1)requestAnimationFrame(step)}
    requestAnimationFrame(step);
    counterObs.unobserve(el);
  });
},{threshold:.5});
document.querySelectorAll('.counter').forEach(el=>counterObs.observe(el));

// ── 3D card tilt ─────────────────────────────────────────────────────
document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;
    const rx=(y/r.height-.5)*10,ry=(x/r.width-.5)*-10;
    card.style.transform=`translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave',()=>{card.style.transform='';});
});

// ── GitHub repos ─────────────────────────────────────────────────────
const GITHUB='Hakimcorleone';
const LANG_COLORS={JavaScript:'#F7DF1E',TypeScript:'#2B7489',Python:'#3572A5',HTML:'#E34C26',CSS:'#563D7C',Shell:'#89E051','Jupyter Notebook':'#DA5B0B',Vue:'#41B883',Go:'#00ADD8'};
let allRepos=[];

function timeAgo(d){
  const diff=Date.now()-new Date(d),days=Math.floor(diff/86400000);
  if(days<1)return'today';if(days<7)return days+'d ago';
  if(days<30)return Math.floor(days/7)+'w ago';
  if(days<365)return Math.floor(days/30)+'mo ago';
  return Math.floor(days/365)+'y ago';
}

function renderRepos(repos){
  const grid=document.getElementById('repos-grid');
  grid.innerHTML='';
  if(!repos.length){grid.innerHTML='<div class="gh-error" style="grid-column:1/-1;color:var(--muted);font-size:12px;text-align:center;padding:40px">// no repositories match this filter</div>';return;}
  repos.forEach(r=>{
    const c=LANG_COLORS[r.language]||'#6B7A99';
    const card=document.createElement('a');
    card.className='repo-card';
    card.href=r.html_url;
    card.target='_blank';
    card.innerHTML=`
      <div class="repo-name">
        <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 000 2h.75a.75.75 0 110 1.5H4.5A2.5 2.5 0 012 13.5z"/></svg>
        ${r.name}
      </div>
      <div class="repo-desc">${r.description||'// no description'}</div>
      <div class="repo-meta">
        ${r.language?`<span class="repo-lang-dot" style="background:${c}"></span><span class="repo-lang-name">${r.language}</span>`:''}
        <span class="repo-stars" style="margin-left:${r.language?'auto':'0'}">★ ${r.stargazers_count}</span>
        <span style="color:var(--dim);font-size:10px">${timeAgo(r.updated_at)}</span>
      </div>`;
    grid.appendChild(card);
  });
}

function buildFilters(repos){
  const langs=[...new Set(repos.map(r=>r.language).filter(Boolean))];
  const bar=document.getElementById('lang-filters');
  bar.innerHTML='';
  const all=document.createElement('button');all.className='lang-btn active';all.textContent='All';
  all.onclick=()=>{document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));all.classList.add('active');renderRepos(allRepos);};
  bar.appendChild(all);
  langs.forEach(lang=>{
    const btn=document.createElement('button');btn.className='lang-btn';btn.textContent=lang;
    btn.onclick=()=>{document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderRepos(allRepos.filter(r=>r.language===lang));};
    bar.appendChild(btn);
  });
}

const FALLBACK_REPOS=[
  {
    name:'portfolio',
    description:'Personal AI marketing portfolio website.',
    html_url:`https://github.com/${GITHUB}`,
    language:'HTML',
    stargazers_count:0,
    updated_at:new Date().toISOString()
  },
  {
    name:'ai-marketing-systems',
    description:'LLM workflow, content automation, and analytics experiments.',
    html_url:`https://github.com/${GITHUB}`,
    language:'JavaScript',
    stargazers_count:0,
    updated_at:new Date().toISOString()
  },
  {
    name:'governance-risk-dashboard',
    description:'Risk, integrity, and governance dashboard concepts.',
    html_url:`https://github.com/${GITHUB}`,
    language:'Python',
    stargazers_count:0,
    updated_at:new Date().toISOString()
  }
];

function showGitHubFallback(message){
  allRepos=FALLBACK_REPOS;
  buildFilters(allRepos);
  renderRepos(allRepos);
  const grid=document.getElementById('repos-grid');
  const note=document.createElement('div');
  note.className='gh-error';
  note.style.gridColumn='1/-1';
  note.style.padding='8px 0 0';
  note.style.textAlign='center';
  note.style.color='var(--dim)';
  note.style.fontSize='11px';
  note.innerHTML=`// live GitHub repos unavailable right now: ${message}. <a href="https://github.com/${GITHUB}" target="_blank" style="color:var(--blue)">open GitHub ↗</a>`;
  grid.appendChild(note);
}

async function loadGitHub(){
  const controller=new AbortController();
  const timeoutId=setTimeout(()=>controller.abort(),6000);

  try{
    const res=await fetch(`https://api.github.com/users/${GITHUB}/repos?sort=updated&per_page=16&type=public`,{
      signal:controller.signal,
      headers:{Accept:'application/vnd.github+json'}
    });
    clearTimeout(timeoutId);

    if(!res.ok)throw new Error('HTTP '+res.status);
    allRepos=await res.json();

    if(!Array.isArray(allRepos)||!allRepos.length){
      showGitHubFallback('no public repositories returned');
      return;
    }

    buildFilters(allRepos);
    renderRepos(allRepos);
  }catch(err){
    clearTimeout(timeoutId);
    showGitHubFallback(err.name==='AbortError'?'request timed out':err.message);
  }
}
loadGitHub();
