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
  motto: "💗 One thing that keeps me moving forward: I want to build technology that is useful, impactful, and meaningful — and keep learning along the way.",
  stats: [["9.3", "CGPA"], ["4+", "Full-stack apps"], ["5", "Certifications"], ["∞", "Curiosity"]],
  now: ["🔨 Building RAG chatbots with Gemini API + MERN", "📖 Deep-diving React Server Components & Node perf", "🏆 Prepping for Smart India Hackathon 2026"],
  facts: ["☕ I debug best with chai + lo-fi", "🌸 My UI obsession: rounded corners & pastel palettes", "🎮 I once built a birthday game instead of buying a gift", "🌙 Night owl — best commits after 11pm"]
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
    ["RAG", "Grounding AI answers in real data for smarter responses."],
    ["AI Chatbots", "Friendly assistants with memory — from donor matching to instant support."]
  ],
  "🛠️ Tools": [
    ["VS Code", "My daily editor, tuned with AI-assisted workflows."],
    ["Git", "Clean commits and confident version control."],
    ["GitHub", "Where all my code lives and collaborates."],
    ["Vercel", "One-click deploys for frontend projects."],
    ["Postman", "Testing every API before the frontend trusts it."],
    ["Docker", "Containerized apps, like CipherChat, that run anywhere."]
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
  { t: "⚙️ Certified Application Developer (CAD)", m: "ServiceNow · Application Developer · 2025",
    d: "Industry-recognized validation of end-to-end application development on the ServiceNow platform — from data model to delightful UI.",
    i: "Hands-on: scoped apps, tables & ACLs, Flow Designer automation, server/client scripting, integrations via REST, studio & update sets. Built a demo catalog app with approval flows." },
  { t: "🛡️ Certified System Administrator (CSA)", m: "ServiceNow · System Administrator · 2024",
    d: "Core platform administration — keeping instances healthy, secure and well-organized for real teams and real users.",
    i: "Hands-on: users, groups & roles, CMDB basics, service catalog, knowledge, reports & dashboards, PDI labs with 40+ guided tasks." },
  { t: "💼 PwC Technical Trainee — SAP & Enterprise Tech", m: "Price Waterhouse Coopers (PwC) · Micro-certification 1/5",
    d: "Consulting-style training on how large enterprises run on SAP — business processes, ERP thinking and client communication.",
    i: "Covered: SAP S/4HANA overview, MM/SD flows, master data, documentation & stakeholder updates. Final case-study presentation." },
  { t: "☕ PwC Technical Trainee — Java & Modern Data Systems", m: "Price Waterhouse Coopers (PwC) · Micro-certification 2/5 + 3/5",
    d: " intensive engineering track: rock-solid Java OOP plus how modern data stacks store, query and stream information at scale.",
    i: "Java: OOP, collections, exception handling, JDBC mini-project. Data: SQL mastery, NoSQL vs SQL trade-offs, ETL basics, data modelling for MERN apps." },
  { t: "🤖 PwC Technical Trainee — Generative AI & Professional Skills", m: "Price Waterhouse Coopers (PwC) · Micro-certification 4/5 + 5/5",
    d: "Applied Generative AI for real work plus the soft skills that make engineers great consultants — communication, teamwork and storytelling.",
    i: "GenAI: prompt engineering, RAG concepts, Gemini API bots, responsible-AI practices. Soft skills: agile teamwork, client emails, resume & interview labs." }
];
const EDU = [
  { t: "B.Tech, Computer Science & Engineering", m: "CMR Technical Campus (CMRTC) · JNTU Hyderabad · 2023 — 2027 · Full-time",
    s: "93% · 9.3 CGPA", hl: ["Relevant coursework: DSA, DBMS, OS, CN, OOP (Java/C++), Web Technologies, ML basics", "MERN + AI builder: shipped Redora, Foodiq, CipherChat & Cake-and-Chaos with auth, realtime & Gemini API", "Hackathons & teams: Smart India Hackathon participant, inter-college build nights, peer code reviews", "Leadership & learning: ServiceNow CAD + CSA certified, PwC-trained, active workshop & seminar attendee"] },
  { t: "12th / Intermediate (MPC)", m: "Loyola Academy Junior College · TSBIE · 2021 — 2023 · Full-time",
    s: "98.3%", hl: ["Graduated with distinction — Maths, Physics, Chemistry top performer", "Built first HTML/CSS pages & fell in love with the web", "Active in science fairs, coding clubs and presentation contests"] },
  { t: "10th Standard", m: "ST. Pious X School · ICSE · 2021 · Full-time",
    s: "92%", hl: ["Strong foundation in mathematics, logical reasoning & computer science", "Early Python experiments, school tech fest volunteer", "House captain — teamwork, discipline and public speaking"] },
  { t: "📚 Always Learning", m: "Self-driven · 2023 — Present",
    s: "Every week", hl: ["Currently: advanced React patterns, Node performance, RAG with Gemini + vector DBs", "Practicing: DSA in Java/C++, system-design basics, Docker deploys", "Reading: docs, blogs & building in public on GitHub"] }
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
/* Paste your Web3Forms access key here to receive messages directly (free, 2 min setup).
   1. Go to https://web3forms.com → enter zebafathima0406@gmail.com → Get Access Key
   2. Paste it below. Until then the form falls back to opening the visitor's mail app. */
const CONTACT_CONFIG = { web3formsKey: "9241a0d4-5dba-46db-b3b0-3974655eb202" };
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
  return `<div class="t-sec"><div class="profile-card"><h3>${PROFILE.name} 🌸</h3>
    <div class="profile-title">${PROFILE.title}</div>
    <div class="profile-tags">${PROFILE.tags.map(t => `<span class="chip">${t}</span>`).join("")}</div>
    <p class="profile-sum">${PROFILE.summary}</p>
    <div class="stat-row">${PROFILE.stats.map(([n, l]) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`).join("")}</div></div>
    <div class="tldr vibe"><h4>✨ Currently vibing on</h4>
    <ul>${PROFILE.now.map(x => `<li>${x}</li>`).join("")}</ul></div>
    <div class="tldr facts"><h4>🎀 Fun bits you won't find on my resume</h4>
    <ul>${PROFILE.facts.map(x => `<li>${x}</li>`).join("")}</ul></div>
    <h4 class="sub-h">📖 My Story — from curious kid to MERN × AI builder</h4><div class="story">${PROFILE.story.map(p => `<p>${p}</p>`).join("")}<p class="motto">${PROFILE.motto}</p></div>
    <h4 class="sub-h">💖 What I Love building</h4><div class="grid3">${LOVE.map(l =>
      `<div class="card-w love-card" style="border-top:6px solid ${l.c}"><div class="emoji">${l.e}</div><h4>${l.t}</h4><p>${l.d}</p></div>`).join("")}</div>
    <div class="tldr"><h4>🧭 If we work together…</h4><p style="margin:.3rem 0;line-height:1.7">You'll get clean code, honest timelines, playful UI polish, and someone who actually <strong>reads the docs</strong>. I love hackathon energy — fast prototypes, kind reviews, zero ego. Let's ship something we're proud of! 💪</p></div></div>`;
}
const PROJ_EMOJI = { Redora: "🩸", Foodiq: "🍜", CipherChat: "🔐", "Cake-and-Chaos": "🎂" };
function renderProjects() {
  const p = PROJECTS[projIdx];
  return `<div class="t-sec">
    <div class="mini-computer"><div class="mini-bezel">
      <div class="mini-bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span>zeba.dev — ${p.name} ${PROJ_EMOJI[p.name] || "✨"}</span></div>
      <div class="mini-screen"><span class="proj-cat" style="color:#ffd7ea">${p.cat}</span><h4>${PROJ_EMOJI[p.name] || ""} ${p.name}</h4><p>${p.desc}</p>${chips(p.tech)}
      <ul class="mini-hl">${p.hl.map(h => `<li>✨ ${h}</li>`).join("")}</ul></div></div>
      <div class="ptabs">${PROJECTS.map((x, i) => `<button class="ptab${i === projIdx ? " active" : ""}" data-proj="${i}">${PROJ_EMOJI[x.name] || ""} ${x.name}</button>`).join("")}</div></div>
    <div class="proj-grid">${PROJECTS.map((x, idx) => `<div class="proj-card${idx === projIdx ? " featured" : ""}"><div class="proj-strip" style="background:linear-gradient(90deg,${x.pal.join(",")})"></div>
      <div class="proj-body"><div class="proj-top"><span class="proj-cat">${x.cat}</span>${idx === projIdx ? `<span class="proj-now">👀 viewing</span>` : ""}</div><h4>${PROJ_EMOJI[x.name] || ""} ${x.name}</h4><p class="proj-desc">${x.desc}</p>
      ${chips(x.tech)}<ul class="proj-hl">${x.hl.map(h => `<li>${h}</li>`).join("")}</ul>
      <button class="ptab view-btn" data-proj="${idx}">Preview ${x.name} ↑</button></div></div>`).join("")}</div></div>`;
}
function renderSkills() {
  const keys = Object.keys(SKILLS), k = renderSkills.k || keys[0];
  return `<div class="t-sec"><p class="profile-sum" style="text-align:center">My skills orbit around everything I build — hover the planets, tap a category. 💫</p>
    <div class="orbit-box" style="max-width:380px;margin:0 auto 14px"><div class="orbit" id="orbit"><div class="sun">ZF<br>✦</div></div><div class="orbit-tip" id="orbitTip">Hover a planet!</div></div>
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
      <p class="profile-sum">Open to internships, hackathons & collaborations — I reply fast! 😊</p>
      <p><span class="avail"><span class="dot"></span>${CONNECT.status}</span></p>
      <p><a class="foot-btn go" style="max-width:280px;margin:0 auto" href="mailto:${CONNECT.email}?subject=Let's%20Chat!">💌 Let's Chat!</a></p></div>
    <div class="soc-row">${soc.map(([t, u, c]) => `<a class="soc-btn ${c}" target="_blank" rel="noopener" href="${u}">${t} ↗</a>`).join("")}</div>
    <div class="card-w"><h4 class="sub-h" style="margin-top:0">📝 Fill out the form</h4>
      <form class="cform" id="cform">
        <label>Your Name<input required name="n" placeholder="Your Name" autocomplete="name"></label>
        <label>Email Address<input required type="email" name="e" placeholder="you@email.com" autocomplete="email"></label>
        <label>Subject<input name="s" placeholder="What's on your mind?"></label>
        <label>Message<textarea required name="m" rows="4" placeholder="Tell me about your project or idea..."></textarea></label>
        <button class="foot-btn go" type="submit">Send Message ✉️</button>
      </form><div id="formOk"></div></div>
  </div>`;
}
function wireForm() {
  const f = document.getElementById("cform"); if (!f) return;
  f.onsubmit = async e => {
    e.preventDefault();
    const d = new FormData(f);
    const name = (d.get("n") || "").toString().trim();
    const email = (d.get("e") || "").toString().trim();
    const subject = (d.get("s") || `Hi Zeba — from ${name}`).toString();
    const message = (d.get("m") || "").toString().trim();
    const okBox = document.getElementById("formOk");
    const btn = f.querySelector('button[type="submit"]');
    const prettySubject = `💌 Portfolio — ${subject}`;
    const prettyBody = `Hi Zeba,\n\n${message}\n\n—\n${name}\n${email}`;
    const mailtoFallback = () => {
      window.location.href = `mailto:${CONNECT.email}?subject=${encodeURIComponent(prettySubject)}&body=${encodeURIComponent(prettyBody)}`;
    };
    if (!name || !email || !message) {
      okBox.innerHTML = `<p class="form-ok" style="background:#fff7da;border-color:#f0d76e;color:#9a7b1e">⚠️ Please fill name, email and message.</p>`;
      return;
    }
    if (!CONTACT_CONFIG.web3formsKey) {
      mailtoFallback();
      okBox.innerHTML = `<p class="form-ok">✨ Opening your mail app — can't wait to read it!</p>`;
      return;
    }
    btn.disabled = true;
    okBox.innerHTML = `<p class="form-ok">⏳ Sending…</p>`;
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: CONTACT_CONFIG.web3formsKey,
          name, email, replyto: email,
          subject: prettySubject,
          message,
          from_name: `${name} via Portfolio`
        })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "send failed");
      f.reset();
      okBox.innerHTML = `<p class="form-ok">💌 Sent! Thank you ${name.replace(/</g, "&lt;")} — I'll reply fast!</p>`;
    } catch (err) {
      mailtoFallback();
      okBox.innerHTML = `<p class="form-ok" style="background:#fff7da;border-color:#f0d76e;color:#9a7b1e">⚠️ Direct send failed — opened your mail app instead.</p>`;
    } finally {
      btn.disabled = false;
    }
  };
}
const RENDER = { about: renderAbout, projects: renderProjects, skills: renderSkills, certs: renderCerts, education: renderEducation, connect: renderConnect };

function paintBars() {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll("#tabletBody .fill").forEach(f => f.style.width = f.dataset.v + "%");
  }));
}
const PLANETS = [["⚛️", "React.js", "💻 Development"], ["🟢", "Node.js", "💻 Development"], ["🍃", "MongoDB", "💻 Development"], ["🤖", "Generative AI", "🤖 AI"], ["🐳", "Docker", "🛠️ Tools"], ["🧠", "Problem Solving", "🤝 Soft Skills"], ["⚡", "JavaScript", "💻 Development"]];
function buildOrbit() {
  const o = document.getElementById("orbit"); if (!o) return;
  const tip = document.getElementById("orbitTip");
  PLANETS.forEach(([e, n, g], i) => {
    const d = document.createElement("div"); d.className = "planet"; d.textContent = e; d.dataset.i = i;
    const a = (i / PLANETS.length) * Math.PI * 2;
    d.style.transform = `translate(${Math.cos(a) * 95}px,${Math.sin(a) * 95}px)`;
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
      el.style.transform = `translate(${Math.cos(b) * 95}px,${Math.sin(b) * 95}px)`;
    });
  }, 50);
}

/* ============ TABLET FLOW ============ */
function openSection(key, keepVisited) {
  current = key;
  titleEl.textContent = TITLES[key];
  body.innerHTML = RENDER[key]();
  body.scrollTop = 0;
  requestAnimationFrame(() => { body.scrollTop = 0; body.scrollTo(0, 0); });
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
const CENT = { about: [51, 79], projects: [32, 56], skills: [51, 29], certs: [28, 37], education: [49, 10], connect: [77, 45] };
const stage = document.getElementById("roomStage");
const tip = document.getElementById("roomTip");
function hideTip() { tip.classList.remove("show"); }
document.querySelectorAll(".svghot").forEach(s => {
  const k = s.dataset.k;
  s.addEventListener("click", () => { hideHint(); hideTip(); if (k === "projects") projIdx = 0; openSection(k); });
  s.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); hideHint(); if (k === "projects") projIdx = 0; openSection(k); } });
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
/* ---- side rails: live clock + word rotator + mini terminal ---- */
(function () {
  const t = document.getElementById("railTime");
  if (t) {
    const tick = () => { try { t.textContent = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }).format(new Date()); } catch (e) { t.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); } };
    tick(); setInterval(tick, 20000);
  }
  const rot = document.getElementById("railRot");
  const words = ["RAG chatbots", "MERN apps", "hackathons", "Gemini API", "realtime chat"];
  if (rot) {
    let w = 0, c = words[0].length, mode = "del", wait = 0;
    setInterval(() => {
      if (wait > 0) { wait--; return; }
      if (mode === "del") { c--; if (c <= 0) { c = 0; mode = "type"; w = (w + 1) % words.length; } }
      else { c++; if (c >= words[w].length) { c = words[w].length; mode = "del"; wait = 8; } }
      rot.textContent = words[w].slice(0, c) || "…";
    }, 110);
  }
  const form = document.getElementById("termForm"), inp = document.getElementById("termIn"), out = document.getElementById("termOut");
  if (!form) return;
  const say = html => { const d = document.createElement("div"); d.innerHTML = html; out.appendChild(d); out.scrollTop = out.scrollHeight; };
  const GO = { about: "about", projects: "projects", skills: "skills", certs: "certs", education: "education", connect: "connect" };
  const JOKES = [
    "why do programmers prefer dark mode? less attraction to bugs 🐛✨",
    "why did the developer go broke? they used up all their cache 💸",
    "how do you comfort a JavaScript bug? you console it 🤗",
    "why do Java devs wear glasses? because they don't C# 👓",
    "what's a programmer's favourite hangout? the Foo Bar 🍹",
    "why was the CSS sad? it had too many unresolved issues 😅"
  ];
  let jokeIdx = Math.floor(Math.random() * JOKES.length);
  form.addEventListener("submit", e => {
    e.preventDefault();
    const raw = (inp.value || "").trim().toLowerCase(); inp.value = "";
    if (!raw) return;
    say("<span style='color:#a78bfa'>❯</span> " + raw.replace(/</g, "&lt;"));
    if (raw === "help") say("try: <b>about</b> · <b>projects</b> · <b>skills</b> · <b>certs</b> · <b>study</b> · <b>connect</b> · <b>resume</b> · <b>joke</b>");
    else if (GO[raw] || raw === "study") say("opening <b>" + raw + "</b>…"), setTimeout(() => openSection(GO[raw] || "education"), 450);
    else if (raw === "resume") say("opening <b>resume</b>…"), setTimeout(openResume, 450);
    else if (raw === "clear") out.innerHTML = "";
    else if (["hi", "hello", "hey"].includes(raw)) say("hey hey! I reply fast 💌 — type <b>connect</b>");
    else if (raw === "joke") { say(JOKES[jokeIdx % JOKES.length]); jokeIdx++; }
    else if (raw === "sudo") say("nice try 😌 — no root access for guests");
    else say("hmm, try <b>help</b> ✨");
  });
})();
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
  if (!hint) return;
  const k = nextUnvisited(); if (!k || current) return;
  const c = CENT[k];
  hint.style.left = c[0] + "%";
  hint.style.top = c[1] + "%";
  hint.classList.toggle("below", c[1] < 20);
  hint.classList.add("show");
}
function hideHint() { if (hint) hint.classList.remove("show"); }
function scheduleHint() { clearTimeout(hintTimer); hintTimer = setTimeout(refreshHint, 3000); }
scheduleHint();
window.addEventListener("resize", () => { if (hint && hint.classList.contains("show")) refreshHint(); });

/* ============ RESUME VIEW ============ */
function openResume() {
  document.getElementById("resumeBody").innerHTML = `
    <h4>🎓 Education</h4><ul>${EDU.map(e => `<li><strong>${e.t}</strong> — ${e.m} — ${e.s}</li>`).join("")}</ul>
    <h4>💻 Projects</h4><ul>${PROJECTS.map(p => `<li><strong>${p.name}</strong> (${p.cat}) — ${p.desc}</li>`).join("")}</ul>
    <h4>🌟 Skills</h4><ul>${Object.entries(SKILLS).map(([k, v]) => `<li><strong>${k}:</strong> ${v.map(x => x[0]).join(", ")}</li>`).join("")}</ul>
    <h4>🏅 Certifications (5)</h4><ul>${CERTS.map(c => `<li><strong>${c.t}</strong> — ${c.m}</li>`).join("")}</ul>`;
  document.getElementById("resumeView").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeResume() { document.getElementById("resumeView").classList.remove("open"); document.body.style.overflow = ""; }
document.getElementById("btnResumeBack").onclick = closeResume;

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
