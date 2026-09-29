/* ============ DATA (Zeba Fathima) ============ */
const PROFILE = {
  name: "Zeba Fathima",
  title: "I design, develop, and build with AI",
  tags: ["Full-Stack Engineering", "MERN Stack", "CSE · 9.3 CGPA"],
  summary: "At the intersection of code, creativity and intelligent systems. I craft full-stack products that solve real problems — from AI blood-donor networks to encrypted chat — driven by curiosity and a love for meaningful technology.",
  tldrRole: "MERN · React · Node.js · Python · Gemini API",
  tldr: [
    "Shipped full-stack apps with real-time features, auth and AI integration",
    "B.Tech CSE (2027) with 93% — ServiceNow CAD + CSA certified",
    "PwC-trained in SAP, Java, data systems, soft skills & Generative AI"
  ],
  story: [
    "Hi there! 👋 I'm Zeba, a Computer Science student and full-stack developer who loves turning ideas into meaningful digital experiences. I enjoy building modern web applications, exploring AI, and bringing creative ideas to life through technology.",
    "I'm pursuing my B.Tech in Computer Science and Engineering, where I've developed a strong interest in full-stack development, problem-solving, and AI-powered applications. Through projects, hackathons, internships, and continuous learning, I've had the opportunity to work with technologies like the MERN stack, Java, C++, and Generative AI.",
    "I believe great technology isn't just about writing code — it's about solving real problems. From building an AI-powered emergency blood donor network to developing secure communication platforms and smart ordering systems, I enjoy creating products that have a purpose and make everyday experiences simpler and smarter.",
    "I'm constantly curious about how technology can be used in new ways. Whether I'm learning a new framework, debugging a difficult problem, experimenting with AI, or building something from scratch, I see every challenge as an opportunity to grow."
  ],
  motto: "💗 One thing that keeps me moving forward: I want to build technology that is useful, impactful, and meaningful — and keep learning along the way."
};
const LOVE = [
  { e: "🧩", t: "Full-Stack Development", d: "Complete MERN apps — intuitive frontends to scalable backends.", c: "#FFB6C1" },
  { e: "🎨", t: "Frontend Development", d: "Responsive, interactive UIs with React, JS, HTML, CSS, Tailwind.", c: "#87CEEB" },
  { e: "🤖", t: "AI & Generative AI", d: "RAG, chatbots and intelligent apps that solve real problems.", c: "#DDA0DD" },
  { e: "🧠", t: "Problem Solving", d: "Breaking complex challenges into simple, efficient solutions.", c: "#FFD700" },
  { e: "🚀", t: "Real-World Products", d: "Ideas → functional apps with purpose and great UX.", c: "#FFB6C1" },
  { e: "🌱", t: "Continuous Learning", d: "New tech, experiments, and constant improvement.", c: "#87CEEB" }
];
const PROJECTS = [
  { name: "Redora", cat: "AI for Social Good", pal: ["#c0392b", "#e74c3c", "#ff7ab8", "#7b2d26"],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "Geolocation", "REST APIs", "Gemini API"],
    desc: "Full-stack blood donation platform connecting donors, recipients, hospitals, and blood banks in real time.",
    hl: ["AI-based donor matching with live journey tracking + geolocation", "OTP email verification and donation certificates", "Donors accept/decline requests; patients follow a shared timeline"] },
  { name: "Foodiq", cat: "AI + Full-Stack", pal: ["#e67e22", "#f4d35e", "#7cc7c4", "#2d6a4f"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Python", "Socket.io", "scikit-learn", "Tailwind CSS", "JWT Auth"],
    desc: "AI-driven smart canteen ordering and queue optimization system with real-time order updates.",
    hl: ["ML-powered personalized food recommendations", "Accurate wait-time predictions to cut queue chaos", "Live order tracking through a friendly customer app"] },
  { name: "CipherChat", cat: "Security + Realtime", pal: ["#2c3e50", "#3498db", "#7cc7c4", "#a78bfa"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT", "E2EE", "WebCrypto", "Docker"],
    desc: "Production-ready, end-to-end encrypted real-time chat on the MERN stack — the server never sees plaintext.",
    hl: ["ECDH key exchange + AES-256-GCM encryption", "1-to-1 & group chats, file sharing, video/audio calls", "Typing indicators and read receipts"] },
  { name: "Cake-and-Chaos", cat: "Creative Frontend", pal: ["#FFB6C1", "#FF95A8", "#87CEEB", "#FFD700"],
    tech: ["React", "Vite", "JavaScript", "CSS3", "canvas-confetti", "lucide-react"],
    desc: "Fun, interactive birthday surprise site — a personalized adventure for the birthday star.",
    hl: ["Name-gate entry, mission unlock, letter, cake-cutting, wish cards, mini-games", "4 switchable themes, starfield, typewriter + sound effects", "Zero backend — pure frontend magic with confetti finale"] }
];
const SKILLS = {
  "💻 Development": [
    ["MERN Stack", "My home turf — complete apps from database to UI, like Redora and CipherChat, built end to end."],
    ["React.js", "Component-driven, interactive frontends — from chat screens to birthday adventures."],
    ["JavaScript", "The language behind all my interactivity, animations and app logic."],
    ["HTML/CSS", "Clean, semantic markup with playful, polished styling."],
    ["Tailwind CSS", "Fast, responsive layouts with utility-first styling."],
    ["Node.js", "Scalable backends and real-time servers for my full-stack apps."],
    ["Express.js", "REST APIs, auth flows and middleware that power my products."],
    ["MongoDB", "Flexible document data for users, orders, chats and requests."],
    ["REST APIs", "Well-structured endpoints connecting every frontend to its backend."],
    ["DSA", "Efficient problem-solving built on strong data-structure fundamentals."],
    ["Java", "OOP foundations from coursework and PwC training."],
    ["C++", "Performance-minded coding and competition practice."]
  ],
  "🤖 AI": [
    ["AI-Powered Apps", "Real features, not demos — donor matching, recommendations, chatbots."],
    ["AI API Integration", "Plugging Gemini and other AI APIs into working products."],
    ["Generative AI", "Prompting, AI agents and creative GenAI workflows (PwC-trained)."],
    ["RAG", "Grounding AI answers in real data for smarter responses."]
  ],
  "🛠️ Tools": [
    ["VS Code", "My daily editor, tuned with AI-assisted workflows."],
    ["Git", "Clean commits and confident version control."],
    ["GitHub", "Where all my code lives and collaborates."],
    ["Vercel", "One-click deploys for frontend projects."],
    ["Postman", "Testing every API before the frontend trusts it."],
    ["Docker", "Containerized apps, like CipherChat, that run anywhere."]
  ],
  "🎨 UI/UX": [
    ["Responsive Design", "Layouts that behave on phones, tablets and desktops."],
    ["Canva", "Quick, charming graphics and pitch visuals."],
    ["Figma", "Designing interfaces before building them."],
    ["UI/UX Design", "Interfaces that feel effortless and spark joy."]
  ],
  "🤝 Soft Skills": [
    ["Problem Solving", "Breaking big challenges into small, solvable pieces."],
    ["Creativity", "Playful ideas backed by solid engineering."],
    ["Team Collaboration", "Hackathons and team builds taught me to ship together."],
    ["Communication", "Explaining tech simply — in docs, pitches and teams."],
    ["Leadership", "Owning outcomes and lifting the people around me."]
  ]
};
const CERTS = [
  { t: "⚙️ Certified Application Developer (CAD)", m: "ServiceNow · Application Developer",
    d: "Validates expertise in application development on the ServiceNow platform.",
    i: "Hands-on: app customization, workflow automation, scripting, platform integrations." },
  { t: "🛡️ Certified System Administrator (CSA)", m: "ServiceNow · System Administrator",
    d: "Validates expertise in administering and managing the ServiceNow platform.",
    i: "Hands-on: users & access, configuration, data, workflows, service catalog." },
  { t: "💼 Technical Trainee", m: "Price Waterhouse Coopers (PwC) · 5 micro-certifications",
    d: "Industry-focused advisory program across SAP, Java, data systems & AI.",
    i: "SAP · Java Programming · Modern Data Systems · Soft Skills · Generative AI." }
];
const EDU = [
  { t: "B.Tech, Computer Science & Engineering", m: "CMR Technical Campus (CMRTC) · JNTU Hyderabad · 2023 — 2027 · Full-time",
    s: "93% · 9.3 CGPA", hl: ["Strong focus on full-stack development, DSA and AI-powered applications", "Projects, hackathons and continuous learning across the MERN ecosystem"] },
  { t: "12th / Intermediate", m: "Loyola Academy Junior College · TSBIE · 2021 — 2023 · Full-time",
    s: "98.3%", hl: ["Graduated with distinction in the science stream"] },
  { t: "10th Standard", m: "ST. Pious X School · ICSE · 2021 · Full-time",
    s: "92%", hl: ["Strong foundation in mathematics and computer science"] }
];
const CONNECT = {
  headline: "Let's Create Something Amazing Together! ✨",
  sub: "Open to internships, hackathons, collaborations & cute product ideas",
  status: "Available for Internships & Collaborations",
  email: "zebafathima0406@gmail.com",
  links: [["GitHub", "https://github.com/zohhh04"], ["LinkedIn", "https://www.linkedin.com/in/zeba-fathima-a1822a338/"], ["Resume", "https://drive.google.com/file/d/1kiFrVD3xX687oJXBmtKtMLNH0XfOyf6f/view?usp=sharing"]],
  interests: ["Full-stack MERN builds", "AI-powered features & chatbots", "Hackathons & team projects", "UI polish & responsive design"],
  msg: "Tell me about your idea, team or role — or just say hi! I reply fast. 💌"
};
const SECTIONS = ["about", "projects", "skills", "certs", "education", "connect"];
const TITLES = { about: "🌸 About Me", projects: "💻 Projects", skills: "🌟 Skills", certs: "🏅 Certifications", education: "🎓 Education & Learning", connect: "💌 Let's Connect" };

/* ============ TABLET RENDERERS ============ */
const body = document.getElementById("tabletBody");
const titleEl = document.getElementById("tabletTitle");
const backdrop = document.getElementById("tabletBackdrop");
const counter = document.getElementById("counter");
const visited = new Set();
let current = null, projIdx = 0;

const chips = (arr, blue) => `<div class="chips">${arr.map(c => `<span class="chip${blue ? " blue" : ""}">${c}</span>`).join("")}</div>`;

function renderAbout() {
  return `<div class="t-sec"><div class="profile-card"><h3>${PROFILE.name}</h3>
    <div class="profile-title">${PROFILE.title}</div>
    <div class="profile-tags">${PROFILE.tags.map(t => `<span class="chip">${t}</span>`).join("")}</div>
    <p class="profile-sum">${PROFILE.summary}</p></div>
    <div class="tldr"><h4>⚡ TL;DR</h4><div><strong>${PROFILE.tldrRole}</strong></div>
    <ul>${PROFILE.tldr.map(x => `<li>${x}</li>`).join("")}</ul></div>
    <h4 class="sub-h">📖 My Story</h4><div class="story">${PROFILE.story.map(p => `<p>${p}</p>`).join("")}<p class="motto">${PROFILE.motto}</p></div>
    <h4 class="sub-h">💖 What I Love</h4><div class="grid3">${LOVE.map(l =>
      `<div class="card-w love-card" style="border-top:6px solid ${l.c}"><div class="emoji">${l.e}</div><h4>${l.t}</h4><p>${l.d}</p></div>`).join("")}</div></div>`;
}
function renderProjects() {
  const p = PROJECTS[projIdx];
  return `<div class="t-sec">
    <div class="mini-computer"><div class="mini-bezel">
      <div class="mini-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span>zeba.dev — ${p.name}</span></div>
      <div class="mini-screen"><h4>${p.name}</h4><p>${p.desc}</p>${chips(p.tech)}</div></div>
      <div class="ptabs">${PROJECTS.map((x, i) => `<button class="ptab${i === projIdx ? " active" : ""}" data-proj="${i}">${x.name}</button>`).join("")}</div></div>
    ${PROJECTS.map(x => `<div class="proj-card"><div class="proj-strip" style="background:linear-gradient(90deg,${x.pal.join(",")})"></div>
      <div class="proj-body"><span class="proj-cat">${x.cat}</span><h4>${x.name}</h4><p class="proj-desc">${x.desc}</p>
      ${chips(x.tech)}<ul class="proj-hl">${x.hl.map(h => `<li>${h}</li>`).join("")}</ul></div></div>`).join("")}</div>`;
}
function renderSkills() {
  const keys = Object.keys(SKILLS), k = renderSkills.k || keys[0];
  return `<div class="t-sec"><p class="profile-sum" style="text-align:center">My skills orbit around everything I build — hover the planets, tap a category. 💫</p>
    <div class="orbit-box" style="max-width:330px;margin:0 auto 14px"><div class="orbit" id="orbit"><div class="sun">ZF<br>✦</div></div><div class="orbit-tip" id="orbitTip">Hover a planet!</div></div>
    <div class="stabs" style="justify-content:center">${keys.map(x => `<button class="stab${x === k ? " active" : ""}" data-sk="${x}">${x}</button>`).join("")}</div>
    <div class="skgrid">${SKILLS[k].map(([n, d]) => `<div class="skbox"><strong>${n}</strong><p>${d}</p></div>`).join("")}</div></div>`;
}
function renderCerts() {
  return `<div class="t-sec">${CERTS.map(c => `<div class="ev-card"><h4>${c.t}</h4><div class="ev-meta"><span>${c.m}</span></div><p>${c.d}</p><p class="ev-impact">✨ ${c.i}</p></div>`).join("")}</div>`;
}
function renderEducation() {
  return `<div class="t-sec">${EDU.map(e => `<div class="ev-card"><h4>${e.t}</h4><div class="ev-meta"><span>${e.m}</span><span>📊 ${e.s}</span></div><ul class="proj-hl">${e.hl.map(h => `<li>${h}</li>`).join("")}</ul></div>`).join("")}</div>`;
}
function renderConnect() {
  const soc = [["GitHub", CONNECT.links[0][1], "gh"], ["LinkedIn", CONNECT.links[1][1], "li"], ["Resume", CONNECT.links[2][1], "rs"]];
  return `<div class="t-sec conn-stack">
    <div class="profile-card"><h3>Ready to Create Something Amazing?</h3>
      <p class="profile-sum">Tell me about your project, budget, timeline — or just say hi! I'm friendly and flexible. 😊</p>
      <p class="profile-sum">Let's bring your ideas to life with thoughtful design and clean code! ✨</p>
      <p><span class="avail"><span class="dot"></span>${CONNECT.status}</span></p>
      <p><a class="foot-btn go" style="max-width:280px;margin:0 auto" href="mailto:${CONNECT.email}?subject=Let's%20Chat!">💌 Let's Chat!</a></p></div>
    <div class="soc-row">${soc.map(([t, u, c]) => `<a class="soc-btn ${c}" target="_blank" rel="noopener" href="${u}">${t} ↗</a>`).join("")}</div>
    <div class="card-w"><h4 class="sub-h" style="margin-top:0">📝 …or fill out this form</h4>
      <form class="cform" id="cform">
        <label>Your Name<input required name="n" placeholder="Your Name" autocomplete="name"></label>
        <label>Email Address<input required type="email" name="e" placeholder="you@email.com" autocomplete="email"></label>
        <label>Subject<input name="s" placeholder="What's on your mind?"></label>
        <label>Message<textarea required name="m" rows="4" placeholder="Tell me about your project or idea..."></textarea></label>
        <button class="foot-btn go" type="submit">Send Message ✉️</button>
      </form><div id="formOk"></div></div>
    <div class="card-w"><h4 class="sub-h" style="margin-top:0">🌷 I love working on</h4><ul class="proj-hl">${CONNECT.interests.map(i => `<li>${i}</li>`).join("")}</ul>
      <p style="line-height:1.65">${CONNECT.msg}</p><p><strong>📧 ${CONNECT.email}</strong></p></div>
  </div>`;
}
function wireForm() {
  const f = document.getElementById("cform"); if (!f) return;
  f.onsubmit = e => {
    e.preventDefault();
    const d = new FormData(f);
    const subject = encodeURIComponent(d.get("s") || `Hi Zeba — from ${d.get("n")}`);
    const b = encodeURIComponent(`Name: ${d.get("n")}\nEmail: ${d.get("e")}\n\n${d.get("m")}`);
    window.location.href = `mailto:${CONNECT.email}?subject=${subject}&body=${b}`;
    document.getElementById("formOk").innerHTML = `<p class="form-ok">✨ Opening your mail app — can't wait to read it!</p>`;
  };
}
const RENDER = { about: renderAbout, projects: renderProjects, skills: renderSkills, certs: renderCerts, education: renderEducation, connect: renderConnect };

function paintBars() {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll("#tabletBody .fill").forEach(f => f.style.width = f.dataset.v + "%");
  }));
}
const PLANETS = [["⚛️", "React.js", "💻 Development"], ["🟢", "Node.js", "💻 Development"], ["🍃", "MongoDB", "💻 Development"], ["🤖", "Generative AI", "🤖 AI"], ["🐳", "Docker", "🛠️ Tools"], ["🎨", "Figma", "🎨 UI/UX"], ["🧠", "Problem Solving", "🤝 Soft Skills"], ["⚡", "JavaScript", "💻 Development"]];
function buildOrbit() {
  const o = document.getElementById("orbit"); if (!o) return;
  const tip = document.getElementById("orbitTip");
  PLANETS.forEach(([e, n, g], i) => {
    const d = document.createElement("div"); d.className = "planet"; d.textContent = e; d.dataset.i = i;
    const a = (i / PLANETS.length) * Math.PI * 2;
    d.style.transform = `translate(${Math.cos(a) * 80}px,${Math.sin(a) * 80}px)`;
    d.onmouseenter = () => tip.textContent = `${e} ${n} — ${g}`;
    d.onclick = () => { renderSkills.k = g; openSection("skills", true); tip.textContent = `${e} ${n} — ${g}`; };
    o.appendChild(d);
  });
  let ang = 0;
  const spin = setInterval(() => {
    if (!document.body.contains(o)) { clearInterval(spin); return; }
    ang += 0.008;
    o.querySelectorAll(".planet").forEach((el, i) => {
      const b = (i / PLANETS.length) * Math.PI * 2 + ang;
      el.style.transform = `translate(${Math.cos(b) * 80}px,${Math.sin(b) * 80}px)`;
    });
  }, 50);
}

/* ============ TABLET FLOW ============ */
function openSection(key, keepVisited) {
  current = key;
  titleEl.textContent = TITLES[key];
  body.innerHTML = RENDER[key]();
  body.scrollTop = 0;
  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("btnGoConnect").style.display = key === "connect" ? "none" : "";
  if (current === "skills") { buildOrbit(); }
  wireForm();
  if (!keepVisited && !visited.has(key)) {
    visited.add(key);
    counter.textContent = `${visited.size}/6`;
    refreshHint();
    if (visited.size === 6) { counter.textContent = "6/6 🎉"; setTimeout(celebrate, 400); }
  }
  body.focus({ preventScroll: true });
}
function closeTablet() { backdrop.classList.remove("open"); document.body.style.overflow = ""; current = null; scheduleHint(); }
function step(dir) {
  if (!current) return;
  const i = SECTIONS.indexOf(current);
  openSection(SECTIONS[(i + dir + SECTIONS.length) % SECTIONS.length]);
}
/* ---- object-shaped SVG hotspots + cursor-following label ---- */
const CENT = { about: [48, 66], projects: [25, 60], skills: [51, 29], certs: [28, 38], education: [49, 10], connect: [77, 49] };
const stage = document.getElementById("roomStage");
const tip = document.getElementById("roomTip");
function hideTip() { tip.classList.remove("show"); }
document.querySelectorAll(".svghot").forEach(s => {
  const k = s.dataset.k;
  s.addEventListener("click", () => { hideHint(); hideTip(); openSection(k); });
  s.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); hideHint(); openSection(k); } });
  s.addEventListener("mouseenter", () => { tip.textContent = TITLES[k]; tip.classList.add("show"); });
  s.addEventListener("mousemove", e => {
    const r = stage.getBoundingClientRect();
    tip.style.left = (e.clientX - r.left) + "px";
    tip.style.top = (e.clientY - r.top) + "px";
  });
  s.addEventListener("mouseleave", hideTip);
  s.addEventListener("focus", () => { tip.textContent = TITLES[k]; const c = CENT[k]; tip.style.left = c[0] + "%"; tip.style.top = c[1] + "%"; tip.classList.add("show"); });
  s.addEventListener("blur", hideTip);
});
document.getElementById("btnClose").onclick = closeTablet;
document.getElementById("btnNext").onclick = () => step(1);
document.getElementById("btnPrev").onclick = () => step(-1);
document.getElementById("btnGoConnect").onclick = () => openSection("connect", true);
document.getElementById("btnGoResume").onclick = () => { closeTablet(); openResume(); };
document.getElementById("btnRoomConnect").onclick = () => openSection("connect");
document.getElementById("btnRoomResume").onclick = openResume;
backdrop.addEventListener("click", e => { if (e.target === backdrop) closeTablet(); });
body.addEventListener("click", e => {
  const p = e.target.closest("[data-proj]"); if (p) { projIdx = +p.dataset.proj; openSection("projects", true); return; }
  const s = e.target.closest("[data-sk]"); if (s) { renderSkills.k = s.dataset.sk; openSection("skills", true); }
});
document.addEventListener("keydown", e => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
  if (document.getElementById("resumeView").classList.contains("open")) {
    if (e.key === "Escape") closeResume();
    return;
  }
  if (!current) {
    if (e.key === "r" || e.key === "R") openResume();
    return;
  }
  if (e.key === "Escape") closeTablet();
  else if (e.key === "ArrowRight") step(1);
  else if (e.key === "ArrowLeft") step(-1);
  else if (e.key === "Home") openSection(SECTIONS[0], true);
  else if (e.key === "End") openSection(SECTIONS[5], true);
});

/* ---- cursor hint on next unvisited (like hers) ---- */
const hint = document.getElementById("cursorHint");
let hintTimer = null;
function nextUnvisited() { return SECTIONS.find(k => !visited.has(k)); }
function refreshHint() {
  hideHint();
  const k = nextUnvisited(); if (!k || current) return;
  const c = CENT[k];
  hint.style.left = c[0] + "%";
  hint.style.top = c[1] + "%";
  hint.classList.toggle("below", c[1] < 20);
  hint.classList.add("show");
}
function hideHint() { hint.classList.remove("show"); }
function scheduleHint() { clearTimeout(hintTimer); hintTimer = setTimeout(refreshHint, 3000); }
scheduleHint();
window.addEventListener("resize", () => { if (hint.classList.contains("show")) refreshHint(); });

/* ============ RESUME VIEW ============ */
function openResume() {
  document.getElementById("resumeBody").innerHTML = `
    <h4>🎓 Education</h4><ul>${EDU.map(e => `<li><strong>${e.t}</strong> — ${e.m} — ${e.s}</li>`).join("")}</ul>
    <h4>💻 Projects</h4><ul>${PROJECTS.map(p => `<li><strong>${p.name}</strong> (${p.cat}) — ${p.desc}</li>`).join("")}</ul>
    <h4>🌟 Skills</h4><ul>${Object.entries(SKILLS).map(([k, v]) => `<li><strong>${k}:</strong> ${v.map(x => x[0]).join(", ")}</li>`).join("")}</ul>
    <h4>🏅 Certifications</h4><ul>${CERTS.map(c => `<li><strong>${c.t}</strong> — ${c.m}</li>`).join("")}</ul>`;
  document.getElementById("resumeView").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeResume() { document.getElementById("resumeView").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("btnResumeBack").onclick = closeResume;
document.getElementById("btnPrint").onclick = () => window.print();

/* ============ CONFETTI (6/6 celebration) ============ */
function celebrate() {
  const cv = document.getElementById("confettiCv"), ctx = cv.getContext("2d");
  cv.width = innerWidth; cv.height = innerHeight;
  const colors = ["#FFB6C1", "#FF95A8", "#87CEEB", "#FFD700", "#DDA0DD", "#fff"];
  const ps = Array.from({ length: 160 }, () => ({ x: innerWidth / 2 + (Math.random() - .5) * 300, y: innerHeight * .35, vx: (Math.random() - .5) * 12, vy: Math.random() * -11 - 3, s: Math.random() * 8 + 4, c: colors[Math.floor(Math.random() * colors.length)], r: Math.random() * Math.PI, vr: (Math.random() - .5) * .3 }));
  let f = 0;
  (function tick() {
    ctx.clearRect(0, 0, cv.width, cv.height); f++;
    ps.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .35; p.r += p.vr; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); ctx.restore(); });
    if (f < 160) requestAnimationFrame(tick); else ctx.clearRect(0, 0, cv.width, cv.height);
  })();
}
