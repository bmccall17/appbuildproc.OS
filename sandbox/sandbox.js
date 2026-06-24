/* Ink + Parallax Sandbox for appbuildproc.OS */

const IMAGES = [
  { id: "gblot1", label: "Splatter A", src: "../stylization/gen-blots-1.svg" },
  { id: "gblot2", label: "Splatter B", src: "../stylization/gen-blots-2.svg" },
  { id: "gblot3", label: "Splatter C", src: "../stylization/gen-blots-3.svg" },
  { id: "gblot4", label: "Splatter D", src: "../stylization/gen-blots-4.svg" },
  { id: "gstk1", label: "Strokes A", src: "../stylization/gen-strokes-1.svg" },
  { id: "gstk2", label: "Strokes B", src: "../stylization/gen-strokes-2.svg" },
  { id: "gstk3", label: "Strokes C", src: "../stylization/gen-strokes-3.svg" },
  { id: "blots", label: "Blots (photo)", src: "../stylization/inkmessyblots2.png" },
  { id: "strokes", label: "Dry brush", src: "../stylization/inkstrokes.jpg" },
  { id: "lines", label: "Swirls / lines", src: "../stylization/inklines.png" },
  { id: "frames", label: "Grunge frames", src: "../stylization/inkframes.png" }
];
const imageById = new Map(IMAGES.map((i) => [i.id, i]));

const BLENDS = [
  "normal", "multiply", "screen", "overlay", "darken", "lighten",
  "color-dodge", "color-burn", "hard-light", "soft-light",
  "difference", "exclusion", "hue", "saturation", "color", "luminosity",
  "plus-lighter", "dissolve"
];

const PMODES = [
  { id: "none", label: "Static", hint: "No scroll movement." },
  { id: "vy", label: "Drift vertical", hint: "Moves up/down with scroll. Lower speed = deeper layer." },
  { id: "vx", label: "Drift horizontal", hint: "Slides sideways with scroll, like The Boat's lateral push." },
  { id: "zoom", label: "Zoom (dolly)", hint: "Scales up as you scroll for a camera push-in." },
  { id: "rotate", label: "Rotate", hint: "Spins with scroll. Speed is degrees across the full scroll." },
  { id: "fade", label: "Fade in / out", hint: "Peaks opacity at mid-scroll, fades at the ends." },
  { id: "boat", label: "Cinematic (The Boat)", hint: "Pinned stage. Depth drives lateral drift, push-in, and fade together for a layered camera move." }
];

const STAGE_BGS = [
  { id: "paper", label: "Paper (light)" },
  { id: "dark", label: "Dark" },
  { id: "grey", label: "Mid grey" },
  { id: "checker", label: "Checker" }
];

const DISSOLVE_MASK =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='d'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.42' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 9 -3.5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23d)'/%3E%3C/svg%3E\")";

const DEFAULTS = {
  imageId: "gblot1", blend: "multiply", opacity: 0.45, scale: 1, rotate: 0,
  x: 0, y: 0, hue: 0, contrast: 100, brightness: 100, rough: false,
  pmode: "boat", speed: 600, depth: 0.5, visible: true
};

let layerSeq = 0;
function makeLayer(overrides = {}) {
  layerSeq += 1;
  return { id: `L${layerSeq}`, name: `Layer ${layerSeq}`, ...DEFAULTS, ...overrides };
}

let layers = [
  makeLayer({ name: "Backdrop blot", imageId: "gblot1", opacity: 0.32, scale: 2.4, x: -240, y: -40, rotate: -150, pmode: "boat", speed: 320, depth: 0.12 }),
  makeLayer({ name: "Mid strokes", imageId: "gstk1", opacity: 0.4, scale: 1.4, x: 320, y: -160, rotate: 8, pmode: "boat", speed: 620, depth: 0.45 }),
  makeLayer({ name: "Swirl", imageId: "lines", blend: "multiply", opacity: 0.3, scale: 1.5, x: -40, y: 120, rotate: 0, pmode: "vy", speed: 260, depth: 0.5 }),
  makeLayer({ name: "Foreground splatter", imageId: "gblot4", opacity: 0.5, scale: 1.05, x: -360, y: 250, rotate: 40, pmode: "boat", speed: 980, depth: 0.85 })
];
let selectedId = layers[0].id;
let progress = 0;

const PROPS = ["opacity", "hue", "contrast", "brightness", "scale", "rotate", "x", "y", "speed", "depth"];

const el = {
  track: document.getElementById("track"),
  stage: document.getElementById("stage"),
  scene: document.getElementById("scene"),
  hud: document.getElementById("hud"),
  layerList: document.getElementById("layerList"),
  thumbRow: document.getElementById("thumbRow"),
  blend: document.getElementById("blend"),
  pmode: document.getElementById("pmode"),
  pmodeHint: document.getElementById("pmodeHint"),
  stageBg: document.getElementById("stageBg"),
  trackLen: document.getElementById("trackLen"),
  applyAll: document.getElementById("applyAll"),
  rough: document.getElementById("rough"),
  cssOut: document.getElementById("cssOut"),
  progressBar: document.getElementById("progressBar"),
  progressVal: document.getElementById("progressVal"),
  scrollHint: document.getElementById("scrollHint")
};

function selected() {
  return layers.find((l) => l.id === selectedId) || layers[0];
}

function targets() {
  return el.applyAll.checked ? layers : [selected()];
}

/* ---------- Build selects & thumbs ---------- */
function buildStaticUi() {
  el.blend.innerHTML = BLENDS.map((b) => `<option value="${b}">${b}</option>`).join("");
  el.pmode.innerHTML = PMODES.map((m) => `<option value="${m.id}">${m.label}</option>`).join("");
  el.stageBg.innerHTML = STAGE_BGS.map((b) => `<option value="${b.id}">${b.label}</option>`).join("");
  el.thumbRow.innerHTML = IMAGES.map(
    (img) => `<button type="button" class="thumb" data-image="${img.id}" title="${img.label}" style="background-image:url('${img.src}')"></button>`
  ).join("");
  el.thumbRow.querySelectorAll("[data-image]").forEach((b) => {
    b.addEventListener("click", () => {
      targets().forEach((l) => { l.imageId = b.dataset.image; });
      renderLayers();
      renderStage();
      syncControls();
      writeCss();
    });
  });
}

/* ---------- Layers list ---------- */
function renderLayers() {
  el.layerList.innerHTML = layers
    .map((l) => {
      const img = imageById.get(l.imageId);
      return `
        <li class="layer-item ${l.id === selectedId ? "is-active" : ""}" data-layer="${l.id}">
          <span class="layer-thumb" style="background-image:url('${img.src}')"></span>
          <span class="layer-name">${escapeHtml(l.name)}</span>
          <button type="button" class="layer-mini" data-toggle="${l.id}" title="Show/hide">${l.visible ? "on" : "off"}</button>
          <button type="button" class="layer-mini" data-remove="${l.id}" title="Delete layer">del</button>
        </li>`;
    })
    .join("");
  el.layerList.querySelectorAll("[data-layer]").forEach((li) => {
    li.addEventListener("click", (e) => {
      if (e.target.closest("[data-toggle]") || e.target.closest("[data-remove]")) return;
      selectedId = li.dataset.layer;
      renderLayers();
      syncControls();
      writeCss();
    });
  });
  el.layerList.querySelectorAll("[data-toggle]").forEach((b) => {
    b.addEventListener("click", () => {
      const l = layers.find((x) => x.id === b.dataset.toggle);
      l.visible = !l.visible;
      renderLayers();
      renderStage();
    });
  });
  el.layerList.querySelectorAll("[data-remove]").forEach((b) => {
    b.addEventListener("click", () => {
      if (layers.length <= 1) return;
      layers = layers.filter((x) => x.id !== b.dataset.remove);
      if (selectedId === b.dataset.remove) selectedId = layers[0].id;
      renderLayers();
      renderStage();
      syncControls();
      writeCss();
    });
  });
}

/* ---------- Stage rendering ---------- */
function renderStage() {
  el.scene.innerHTML = layers
    .map((l) => `<div class="layer" data-stage="${l.id}"></div>`)
    .join("");
  layers.forEach((l) => {
    const node = el.scene.querySelector(`[data-stage="${l.id}"]`);
    const img = imageById.get(l.imageId);
    node.style.backgroundImage = `url('${img.src}')`;
  });
  applyStyles();
}

function baseFilter(l) {
  let f = `hue-rotate(${l.hue}deg) contrast(${l.contrast}%) brightness(${l.brightness}%)`;
  if (l.rough) f += " url(#inkRough)";
  return f;
}

function transformFor(l, t) {
  let tx = l.x;
  let ty = l.y;
  let sc = l.scale;
  let rot = l.rotate;
  const s = l.speed;
  switch (l.pmode) {
    case "vy": ty += (t - 0.5) * s; break;
    case "vx": tx += (t - 0.5) * s; break;
    case "zoom": sc *= 1 + (t * s) / 400; break;
    case "rotate": rot += t * s; break;
    case "boat": {
      const d = l.depth;
      tx += (t - 0.5) * s * (0.35 + d);
      ty += (t - 0.5) * s * 0.22 * (1 - d);
      sc *= 1 + t * 0.6 * d;
      break;
    }
    default: break;
  }
  return `translate(-50%, -50%) translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) rotate(${rot.toFixed(1)}deg) scale(${sc.toFixed(3)})`;
}

function opacityFor(l, t) {
  if (l.pmode === "fade") return l.opacity * Math.max(0, 1 - Math.abs(t - 0.5) * 2);
  if (l.pmode === "boat") {
    const d = l.depth;
    return l.opacity * Math.max(0.12, 1 - Math.abs(t - 0.5) * 1.25 * (1 - d));
  }
  return l.opacity;
}

function applyStyles() {
  layers.forEach((l) => {
    const node = el.scene.querySelector(`[data-stage="${l.id}"]`);
    if (!node) return;
    node.classList.toggle("is-hidden", !l.visible);
    if (l.blend === "dissolve") {
      node.classList.add("dissolve");
      node.style.setProperty("--dissolve-mask", DISSOLVE_MASK);
      node.style.mixBlendMode = "normal";
    } else {
      node.classList.remove("dissolve");
      node.style.mixBlendMode = l.blend;
    }
    node.style.filter = baseFilter(l);
    node.style.transform = transformFor(l, progress);
    node.style.opacity = opacityFor(l, progress).toFixed(3);
  });
}

/* ---------- Controls sync ---------- */
function syncControls() {
  const l = selected();
  el.blend.value = l.blend;
  el.pmode.value = l.pmode;
  el.rough.checked = l.rough;
  PROPS.forEach((p) => {
    const input = el.hud.querySelector(`input[data-prop="${p}"]`);
    if (input) {
      input.value = l[p];
      updateOutput(input);
    }
  });
  el.pmodeHint.textContent = (PMODES.find((m) => m.id === l.pmode) || {}).hint || "";
  el.thumbRow.querySelectorAll("[data-image]").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.image === l.imageId);
  });
}

const OUTPUT_FMT = {
  opacity: (v) => Number(v).toFixed(2),
  scale: (v) => Number(v).toFixed(2) + "x",
  rotate: (v) => Math.round(v) + " deg",
  hue: (v) => Math.round(v) + " deg",
  contrast: (v) => Math.round(v) + "%",
  brightness: (v) => Math.round(v) + "%",
  x: (v) => Math.round(v) + "px",
  y: (v) => Math.round(v) + "px",
  speed: (v) => Math.round(v),
  depth: (v) => Number(v).toFixed(2)
};

function updateOutput(input) {
  const dial = input.closest(".dial");
  if (!dial) return;
  const out = dial.querySelector("output");
  if (out) out.textContent = (OUTPUT_FMT[input.dataset.prop] || ((v) => v))(input.value);
}

function bindControls() {
  el.hud.querySelectorAll("input[data-prop], select[data-prop]").forEach((input) => {
    const prop = input.dataset.prop;
    const handler = () => {
      const isNum = input.type === "range";
      const val = input.type === "checkbox" ? input.checked : isNum ? Number(input.value) : input.value;
      targets().forEach((l) => { l[prop] = val; });
      if (input.type === "range") updateOutput(input);
      if (prop === "pmode") el.pmodeHint.textContent = (PMODES.find((m) => m.id === val) || {}).hint || "";
      applyStyles();
      writeCss();
      if (el.applyAll.checked) syncControls();
    };
    input.addEventListener("input", handler);
    input.addEventListener("change", handler);
  });

  el.stageBg.addEventListener("change", () => {
    el.stage.dataset.bg = el.stageBg.value;
  });
  el.trackLen.addEventListener("input", () => {
    el.track.style.height = `${el.trackLen.value}vh`;
    updateOutput(el.trackLen);
    onScroll();
  });

  document.getElementById("addLayer").addEventListener("click", () => {
    const l = makeLayer({ name: `Layer ${layerSeq + 1}` });
    layers.push(l);
    selectedId = l.id;
    renderLayers();
    renderStage();
    syncControls();
    writeCss();
  });
  document.getElementById("resetLayer").addEventListener("click", () => {
    const l = selected();
    Object.assign(l, DEFAULTS);
    renderLayers();
    renderStage();
    syncControls();
    writeCss();
  });
  document.getElementById("resetAll").addEventListener("click", () => {
    layers.forEach((l) => Object.assign(l, DEFAULTS));
    renderStage();
    syncControls();
    writeCss();
  });

  document.getElementById("copyCss").addEventListener("click", () => copyCss(false));
  document.getElementById("copyAll").addEventListener("click", () => copyCss(true));

  document.getElementById("hideHud").addEventListener("click", toggleHud);
  document.getElementById("showHud").addEventListener("click", toggleHud);
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "h" && !/input|textarea|select/i.test(e.target.tagName)) toggleHud();
    if (/input|textarea|select/i.test(e.target.tagName)) return;
    const l = selected();
    const step = e.shiftKey ? 20 : 4;
    if (e.key === "ArrowLeft") { l.x -= step; nudge(); }
    if (e.key === "ArrowRight") { l.x += step; nudge(); }
    if (e.key === "ArrowUp") { l.y -= step; nudge(); }
    if (e.key === "ArrowDown") { l.y += step; nudge(); }
  });
}

function nudge() {
  syncControls();
  applyStyles();
  writeCss();
}

function toggleHud() {
  const hidden = el.hud.classList.toggle("is-hidden");
  document.getElementById("showHud").hidden = !hidden;
}

/* ---------- Scroll / parallax ---------- */
let ticking = false;
function computeProgress() {
  const total = el.track.offsetHeight - window.innerHeight;
  const scrolled = Math.min(Math.max(-el.track.getBoundingClientRect().top, 0), Math.max(total, 1));
  progress = total > 0 ? scrolled / total : 0;
}
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    computeProgress();
    applyStyles();
    el.progressBar.style.width = `${(progress * 100).toFixed(1)}%`;
    el.progressVal.textContent = `t ${progress.toFixed(2)}`;
    if (el.scrollHint) el.scrollHint.style.opacity = progress > 0.02 ? "0" : "0.55";
    ticking = false;
  });
}

/* ---------- CSS export ---------- */
function layerCss(l, index) {
  const img = imageById.get(l.imageId);
  const path = img.src.replace("../", "");
  const lines = [
    `.ink-layer-${index} {`,
    `  background-image: url("${path}");`,
    `  background-repeat: no-repeat;`,
    `  background-size: contain;`,
    l.blend === "dissolve"
      ? `  mix-blend-mode: normal; /* dissolve = noise mask, see sandbox */`
      : `  mix-blend-mode: ${l.blend};`,
    `  opacity: ${l.opacity};`,
    `  transform: translate(-50%, -50%) translate(${l.x}px, ${l.y}px) rotate(${l.rotate}deg) scale(${l.scale});`,
    `  filter: hue-rotate(${l.hue}deg) contrast(${l.contrast}%) brightness(${l.brightness}%)${l.rough ? " url(#inkRough)" : ""};`
  ];
  if (l.pmode !== "none") {
    lines.push(`  /* parallax: mode=${l.pmode} speed=${l.speed}${l.pmode === "boat" ? ` depth=${l.depth}` : ""} (drive t 0..1 on scroll) */`);
    if (l.pmode === "vy") lines.push(`  translate: 0 calc((var(--p, 0) - 0.5) * ${l.speed}px);`);
    if (l.pmode === "vx") lines.push(`  translate: calc((var(--p, 0) - 0.5) * ${l.speed}px) 0;`);
  }
  lines.push(`}`);
  return lines.join("\n");
}

function writeCss() {
  const i = layers.indexOf(selected()) + 1;
  el.cssOut.value = layerCss(selected(), i);
}

function copyCss(all) {
  const text = all
    ? layers.map((l, i) => layerCss(l, i + 1)).join("\n\n")
    : layerCss(selected(), layers.indexOf(selected()) + 1);
  el.cssOut.value = text;
  if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
  el.cssOut.select();
}

function escapeHtml(v) {
  return String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
}

/* ---------- Init ---------- */
function init() {
  buildStaticUi();
  bindControls();
  renderLayers();
  renderStage();
  syncControls();
  el.stageBg.value = "paper";
  el.trackLen.value = 400;
  updateOutput(el.trackLen);
  writeCss();
  computeProgress();
  applyStyles();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

init();
