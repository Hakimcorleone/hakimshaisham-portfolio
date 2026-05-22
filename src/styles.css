/* ── TOKENS ─────────────────────────────────────────────────────────── */
:root{
  --bg:#070B12;--surface:#0D1420;--surface2:#111928;
  --border:#1C2740;--border2:#243050;
  --teal:#00C8A0;--teal-dim:rgba(0,200,160,.12);
  --blue:#4F8EF7;--amber:#F5A623;--rose:#FF6B6B;
  --text:#E2E8F4;--muted:#6B7A99;--dim:#2A3450;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--text);font-family:'Geist Mono',monospace;overflow-x:hidden}

/* ── CURSOR ─────────────────────────────────────────────────────────── */
#cursor{position:fixed;width:12px;height:12px;background:var(--teal);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);transition:width .2s,height .2s,background .2s;mix-blend-mode:difference}
#cursor-ring{position:fixed;width:36px;height:36px;border:1px solid rgba(0,200,160,.4);border-radius:50%;pointer-events:none;z-index:9998;transform:translate(-50%,-50%);transition:all .12s ease-out}
body:has(a:hover) #cursor,body:has(button:hover) #cursor{width:20px;height:20px;background:#fff}
body:has(a:hover) #cursor-ring,body:has(button:hover) #cursor-ring{width:52px;height:52px;border-color:rgba(255,255,255,.3)}

/* ── SCROLL PROGRESS ────────────────────────────────────────────────── */
#progress{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--teal),var(--blue));z-index:200;width:0%;transition:width .1s}

/* ── NOISE ──────────────────────────────────────────────────────────── */
body::before{content:'';position:fixed;inset:0;opacity:.02;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");pointer-events:none;z-index:0}

/* ── NAV ────────────────────────────────────────────────────────────── */
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:20px 48px;display:flex;align-items:center;justify-content:space-between;transition:all .4s}
nav.scrolled{background:rgba(7,11,18,.88);border-bottom:1px solid var(--border);backdrop-filter:blur(24px)}
.nav-logo{font-family:'Instrument Serif',serif;font-size:22px;color:var(--teal);letter-spacing:-.02em;cursor:pointer}
.nav-links{display:flex;gap:36px;align-items:center}
.nav-links a{color:var(--muted);text-decoration:none;font-size:11px;letter-spacing:.12em;text-transform:uppercase;transition:color .2s;position:relative;padding-bottom:2px}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:var(--teal);transition:width .3s}
.nav-links a:hover{color:var(--teal)}
.nav-links a:hover::after{width:100%}
.nav-cta{padding:9px 20px;background:var(--teal-dim);border:1px solid rgba(0,200,160,.3);border-radius:6px;color:var(--teal)!important;transition:all .25s!important}
.nav-cta:hover{background:var(--teal)!important;color:#070B12!important}
.nav-cta::after{display:none!important}

/* ── HERO ───────────────────────────────────────────────────────────── */
#hero{min-height:100vh;display:flex;align-items:center;padding:120px 48px 80px;position:relative;overflow:hidden}
.grid-bg{position:absolute;inset:0;background-image:linear-gradient(var(--dim) 1px,transparent 1px),linear-gradient(90deg,var(--dim) 1px,transparent 1px);background-size:64px 64px;opacity:.25;mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)}
.glow-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(80px)}
.orb1{width:500px;height:500px;background:radial-gradient(circle,rgba(0,200,160,.18),transparent 70%);top:-100px;right:-50px;animation:float 8s ease-in-out infinite}
.orb2{width:300px;height:300px;background:radial-gradient(circle,rgba(79,142,247,.12),transparent 70%);bottom:100px;left:-80px;animation:float 10s ease-in-out infinite reverse}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-30px)}}
.hero-inner{position:relative;z-index:1;max-width:900px}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--teal-dim);border:1px solid rgba(0,200,160,.22);border-radius:99px;padding:7px 18px;margin-bottom:36px;cursor:default}
.badge-dot{width:6px;height:6px;border-radius:50%;background:var(--teal);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(0,200,160,.4)}50%{opacity:.5;box-shadow:0 0 0 6px transparent}}
.badge-text{font-size:11px;color:var(--teal);letter-spacing:.1em;text-transform:uppercase}
.hero-name{font-family:'Instrument Serif',serif;font-size:clamp(52px,8vw,96px);line-height:1.0;letter-spacing:-.03em;color:#F4F8FF;margin-bottom:4px}
.hero-name em{font-style:italic;color:var(--teal)}
.hero-title{font-size:clamp(14px,2vw,18px);color:var(--muted);margin-bottom:20px;letter-spacing:.04em}
.hero-title span{color:var(--text)}
.typing-cursor{display:inline-block;width:2px;height:1em;background:var(--teal);vertical-align:middle;margin-left:2px;animation:blink .8s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.hero-desc{font-size:13.5px;color:var(--muted);line-height:1.9;max-width:540px;margin-bottom:44px}
.hero-desc strong{color:var(--text)}
.hero-btns{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:72px}
.btn{padding:14px 30px;border-radius:8px;font-family:'Geist Mono',monospace;font-size:12px;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;text-decoration:none;transition:all .25s;display:inline-flex;align-items:center;gap:8px;position:relative;overflow:hidden}
.btn::before{content:'';position:absolute;inset:0;background:rgba(255,255,255,.06);transform:translateX(-100%);transition:transform .4s}
.btn:hover::before{transform:translateX(0)}
.btn-primary{background:var(--teal);color:#070B12;font-weight:600}
.btn-primary:hover{background:#00E0B3;transform:translateY(-2px);box-shadow:0 12px 32px rgba(0,200,160,.35)}
.btn-ghost{background:transparent;color:var(--text);border:1px solid var(--border2)}
.btn-ghost:hover{border-color:var(--teal);color:var(--teal);transform:translateY(-2px)}
.hero-stats{display:flex;gap:0;border:1px solid var(--border);border-radius:12px;overflow:hidden;width:fit-content}
.stat{padding:20px 36px;position:relative;cursor:default;transition:background .3s}
.stat:not(:last-child){border-right:1px solid var(--border)}
.stat:hover{background:var(--surface)}
.stat-num{font-family:'Instrument Serif',serif;font-size:38px;color:var(--teal);display:block;line-height:1}
.stat-label{font-size:10px;color:var(--muted);letter-spacing:.1em;margin-top:6px;text-transform:uppercase}

/* ── SECTIONS ───────────────────────────────────────────────────────── */
.section{padding:110px 48px;max-width:1140px;margin:0 auto}
.eyebrow{font-size:10px;color:var(--teal);letter-spacing:.2em;text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px}
.eyebrow::before{content:'//';color:var(--dim)}
h2{font-family:'Instrument Serif',serif;font-size:clamp(34px,4.5vw,54px);letter-spacing:-.025em;color:#F4F8FF;margin-bottom:56px;line-height:1.1}

/* ── ABOUT ──────────────────────────────────────────────────────────── */
.about-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:56px;align-items:start}
.about-p{color:var(--muted);line-height:1.95;font-size:13px;margin-bottom:18px}
.about-p strong{color:var(--text)}
.skill-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:28px}
.skill-tag{padding:7px 15px;background:var(--surface);border:1px solid var(--border);border-radius:6px;font-size:11px;color:var(--muted);letter-spacing:.05em;cursor:default;transition:all .25s}
.skill-tag:hover{border-color:var(--teal);color:var(--teal);background:var(--teal-dim);transform:translateY(-2px)}
.skill-tag.accent{border-color:rgba(0,200,160,.25);color:var(--teal);background:var(--teal-dim)}
.about-card{background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden}
.about-card-head{padding:18px 24px;background:var(--surface2);border-bottom:1px solid var(--border);font-size:11px;color:var(--muted);display:flex;align-items:center;gap:8px}
.dots{display:flex;gap:5px}
.dot{width:10px;height:10px;border-radius:50%}
.about-card-body{padding:24px}
.stack-group{margin-bottom:20px}
.stack-group:last-child{margin-bottom:0}
.stack-group-label{font-size:9px;color:var(--dim);letter-spacing:.18em;text-transform:uppercase;margin-bottom:10px}
.stack-chips{display:flex;flex-wrap:wrap;gap:6px}
.chip{padding:5px 12px;background:var(--bg);border:1px solid var(--border);border-radius:4px;font-size:11px;color:var(--muted);transition:all .2s;cursor:default}
.chip:hover{border-color:var(--blue);color:var(--blue)}

/* ── PROJECTS ───────────────────────────────────────────────────────── */
.projects-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:900px){.projects-grid{grid-template-columns:1fr}}
.proj-card{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:30px;display:flex;flex-direction:column;transition:all .3s;position:relative;overflow:hidden;cursor:default;transform-style:preserve-3d}
.proj-card::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,transparent 60%,rgba(255,255,255,.03));pointer-events:none}
.proj-accent{position:absolute;top:0;left:0;right:0;height:2px;transform:scaleX(0);transform-origin:left;transition:transform .4s}
.proj-card:hover .proj-accent{transform:scaleX(1)}
.proj-card:hover{transform:translateY(-6px) rotateX(1deg);box-shadow:0 24px 60px rgba(0,0,0,.5)}
.proj-num{font-size:10px;color:var(--muted);letter-spacing:.15em;margin-bottom:18px}
.proj-icon{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:16px}
.proj-card h3{font-family:'Instrument Serif',serif;font-size:21px;color:#F4F8FF;margin-bottom:6px;letter-spacing:-.01em}
.proj-sub{font-size:11px;color:var(--muted);margin-bottom:14px}
.proj-desc{font-size:12px;color:var(--muted);line-height:1.85;flex:1}
.proj-result{margin-top:18px;padding:11px 15px;border-radius:8px;font-size:12px;border-left:3px solid var(--teal)}
.proj-tools{display:flex;flex-wrap:wrap;gap:5px;margin-top:16px}
.proj-tool{padding:4px 10px;background:var(--surface2);border:1px solid var(--border);border-radius:4px;font-size:10px;color:var(--dim);letter-spacing:.05em;transition:all .2s}
.proj-card:hover .proj-tool{border-color:var(--border2);color:var(--muted)}

/* ── GITHUB ─────────────────────────────────────────────────────────── */
#github-section{background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.gh-wrap{max-width:1140px;margin:0 auto;padding:100px 48px}
.gh-top{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:48px;flex-wrap:wrap;gap:24px}
.gh-live{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--teal);padding:7px 16px;background:var(--teal-dim);border:1px solid rgba(0,200,160,.2);border-radius:99px}
.gh-dot{width:6px;height:6px;border-radius:50%;background:var(--teal);animation:pulse 2s infinite}
.lang-filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:28px}
.lang-btn{padding:6px 14px;background:var(--surface2);border:1px solid var(--border);border-radius:99px;font-size:11px;color:var(--muted);cursor:pointer;transition:all .2s;font-family:'Geist Mono',monospace}
.lang-btn:hover,.lang-btn.active{background:var(--teal-dim);border-color:rgba(0,200,160,.4);color:var(--teal)}
.repos-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(310px,1fr));gap:16px}
.repo-card{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:22px 24px;transition:all .25s;text-decoration:none;display:flex;flex-direction:column;gap:10px;position:relative;overflow:hidden}
.repo-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--blue),transparent);opacity:0;transition:opacity .3s}
.repo-card:hover{border-color:rgba(79,142,247,.4);transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.4)}
.repo-card:hover::before{opacity:1}
.repo-name{font-size:14px;color:var(--blue);font-weight:500;display:flex;align-items:center;gap:6px}
.repo-name svg{opacity:.5;flex-shrink:0}
.repo-desc{font-size:12px;color:var(--muted);line-height:1.7;flex:1}
.repo-meta{display:flex;align-items:center;gap:14px;font-size:11px;color:var(--dim)}
.repo-lang-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.repo-lang-name{color:var(--muted)}
.repo-stars{margin-left:auto;display:flex;align-items:center;gap:4px}
.repo-card.hidden{display:none}
.gh-loading,.gh-error{text-align:center;padding:60px;color:var(--muted);font-size:13px;grid-column:1/-1}
.gh-loading::before{content:'>';color:var(--teal);margin-right:8px;animation:blink .8s infinite}

/* ── EXPERIENCE TIMELINE ─────────────────────────────────────────────── */
.timeline{display:flex;flex-direction:column;gap:0}
.tl-item{display:grid;grid-template-columns:160px 1fr;gap:0;position:relative}
.tl-year{padding:28px 32px 28px 0;text-align:right;font-size:11px;color:var(--muted);letter-spacing:.1em;position:relative}
.tl-year::after{content:'';position:absolute;right:-1px;top:36px;width:8px;height:8px;border-radius:50%;background:var(--surface);border:2px solid var(--border);z-index:1;transition:border-color .3s}
.tl-item:hover .tl-year::after{border-color:var(--teal)}
.tl-line{position:absolute;left:159px;top:0;bottom:0;width:1px;background:var(--border)}
.tl-content{padding:28px 0 28px 32px;border-left:1px solid var(--border)}
.tl-item:hover .tl-content{border-left-color:var(--teal)}
.tl-role{font-size:15px;color:var(--text);font-weight:500;margin-bottom:3px}
.tl-company{font-size:12px;color:var(--teal);margin-bottom:12px}
.tl-bullets{list-style:none;display:flex;flex-direction:column;gap:6px}
.tl-bullets li{font-size:12px;color:var(--muted);line-height:1.75;padding-left:16px;position:relative}
.tl-bullets li::before{content:'▸';position:absolute;left:0;color:var(--dim)}
.tl-item:hover .tl-bullets li::before{color:var(--teal)}

/* ── CONTACT ────────────────────────────────────────────────────────── */
#contact-section{text-align:center;padding:120px 48px}
#contact-section h2{margin-bottom:16px}
.contact-sub{color:var(--muted);font-size:13px;margin-bottom:56px;line-height:1.8;max-width:460px;margin-left:auto;margin-right:auto}
.contact-grid{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
.contact-card{display:flex;align-items:center;gap:12px;padding:16px 26px;background:var(--surface);border:1px solid var(--border);border-radius:12px;color:var(--muted);text-decoration:none;font-size:12px;transition:all .3s;position:relative;overflow:hidden}
.contact-card::before{content:'';position:absolute;inset:0;background:var(--teal-dim);opacity:0;transition:opacity .3s}
.contact-card:hover{border-color:var(--teal);color:var(--teal);transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,200,160,.15)}
.contact-card:hover::before{opacity:1}
.contact-card svg{width:16px;height:16px;position:relative;z-index:1}
.contact-card span{position:relative;z-index:1}

/* ── FOOTER ─────────────────────────────────────────────────────────── */
footer{text-align:center;padding:32px 48px;border-top:1px solid var(--border);font-size:11px;color:var(--dim)}
footer a{color:var(--muted);text-decoration:none;transition:color .2s}
footer a:hover{color:var(--teal)}

/* ── REVEAL ─────────────────────────────────────────────────────────── */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .75s ease,transform .75s ease}
.reveal.up{opacity:1;transform:none}
.reveal-d1{transition-delay:.1s}
.reveal-d2{transition-delay:.2s}
.reveal-d3{transition-delay:.3s}

/* ── RESPONSIVE ─────────────────────────────────────────────────────── */
@media(max-width:768px){
  nav{padding:16px 20px}
  .nav-links{display:none}
  #hero,.section,.gh-wrap,#contact-section{padding-left:20px;padding-right:20px}
  .about-grid{grid-template-columns:1fr}
  .hero-stats{flex-direction:column;width:100%}
  .stat:not(:last-child){border-right:none;border-bottom:1px solid var(--border)}
  .tl-item{grid-template-columns:90px 1fr}
  .projects-grid{grid-template-columns:1fr}
}
