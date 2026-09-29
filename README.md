# 🌸 Zeba Fathima — Interactive Portfolio

A cute, kawaii-style interactive portfolio: a pink isometric room you can explore.
Tap the objects to open each section in a pink tablet popup — just like opening apps!

## ✨ How to open it

- **Easiest:** double-click `index.html` — it opens in your browser. No install needed.
- **Or (recommended for dev):** use VS Code's *Live Server* extension and click *Go Live*.

Only 3 files — everything runs locally, no build step:
- `index.html` — page structure + the hand-drawn SVG room art
- `styles.css` — all styling (pink theme, tablet, buttons, custom pink cursor)
- `script.js` — all content + interactivity (sections, counter, confetti, form)

Fonts load from Google Fonts (Fredoka + Quicksand), so you need internet for those.

## 🖱️ How it works

| Object in the room | Opens |
|---|---|
| 👧 Girl (waves!) | 🌸 About Me — story, TL;DR, What I Love |
| 💻 Laptop + keyboard | 💻 Projects — Redora, Foodiq, CipherChat, Cake-and-Chaos |
| 📚 Book stack | 🌟 Skills — orbit + explained skill boxes |
| 🏅 Medal board | 🏅 Certifications — CAD, CSA, PwC |
| 🖼️ Photo frame | 🎓 Education — BTech, 12th, 10th |
| 📱 Phone on flower | 💌 Let's Connect — chat button, socials, contact form |
| 🛋️ Sofa | just cozy decor 🙂 |

- Counter `0/6 → 6/6 🎉` tracks explored sections + confetti celebration.
- Bottom buttons: **Work With Me 🧳** (connect panel) and **Skip to Resume 🧾** (resume view).
- Keyboard: `R` = resume · `←`/`→` = flip tablet pages · `Esc` = close.
- The contact form opens the visitor's mail app addressed to zebafathima0406@gmail.com.

## 🛠️ Customize it

- **Your photo:** replace the drawn character/frame, or add an `<img>` in the About tablet (`renderAbout()` in `script.js`).
- **Links:** LinkedIn, GitHub, resume Drive link live in `CONNECT` and the resume header in `index.html`.
- **Add a project:** copy one block in the `PROJECTS` array in `script.js` (name, category, palette, tech, description, highlights).
- **Add a skill:** add `["Name", "One or two lines about it."]` under the right group in `SKILLS`.
- **Colors:** all in `:root` at the top of `styles.css` (`--pink-text`, `--pink`, …).

## 🌷 Credits

Designed & built by **Zeba Fathima** (MERN × AI, 2026).
Room artwork is original hand-drawn SVG. Inspired by a Figma-Sites-style room portfolio.
