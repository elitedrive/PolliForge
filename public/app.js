/**
 * PolliForge — Client-Side Application Logic
 * Powered by Pollinations.ai (Flux + DeepSeek/OpenAI) with BYOP OAuth PKCE
 */

// 4 Ultra-Crisp Initial Sample Icons (0ms latency, zero broken images, pure vector SVG)
const defaultIcons = [
  // Icon 1: Golden Flame & Anvil (Amber/Violet)
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <defs>
        <radialGradient id="bg1" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#1e1838"/>
          <stop offset="100%" stop-color="#0a0b12"/>
        </radialGradient>
        <linearGradient id="flame" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#d97706"/>
          <stop offset="50%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#fef08a"/>
        </linearGradient>
        <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="14" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <rect width="512" height="512" rx="115" fill="url(#bg1)"/>
      <rect width="504" height="504" x="4" y="4" rx="112" fill="none" stroke="rgba(245,158,11,0.3)" stroke-width="4"/>
      <g filter="url(#glow1)" transform="translate(106, 75)">
        <path d="M150 20 C110 90, 80 140, 80 200 C80 280, 140 320, 150 320 C160 320, 220 280, 220 200 C220 150, 185 90, 150 20 Z" fill="url(#flame)"/>
        <path d="M150 110 C135 150, 120 180, 120 220 C120 260, 140 280, 150 280 C160 280, 180 260, 180 220 C180 185, 165 150, 150 110 Z" fill="#ffffff" opacity="0.9"/>
        <rect x="50" y="270" width="200" height="36" rx="10" fill="#f59e0b" opacity="0.95"/>
        <path d="M70 306 L90 350 L210 350 L230 306 Z" fill="#b45309"/>
      </g>
    </svg>
  `)}`,
  // Icon 2: Minimalist Geometric Tech Hammer & Sparks (Purple/Amber)
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <defs>
        <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#18132b"/>
          <stop offset="100%" stop-color="#08070e"/>
        </linearGradient>
        <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="#ec4899"/>
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="115" fill="url(#bg2)"/>
      <rect width="504" height="504" x="4" y="4" rx="112" fill="none" stroke="rgba(139,92,246,0.3)" stroke-width="4"/>
      <g transform="translate(136, 115)">
        <circle cx="120" cy="136" r="100" fill="url(#purpleGlow)" opacity="0.2"/>
        <path d="M60 60 L140 140 L120 160 L40 80 Z" fill="#a78bfa"/>
        <rect x="120" y="30" width="80" height="50" rx="8" transform="rotate(45 160 55)" fill="#fbbf24"/>
        <circle cx="200" cy="40" r="10" fill="#f59e0b"/>
        <circle cx="225" cy="85" r="7" fill="#ec4899"/>
        <circle cx="180" cy="115" r="9" fill="#8b5cf6"/>
      </g>
    </svg>
  `)}`,
  // Icon 3: Modern Tech Monogram P (Isometric Glass)
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <defs>
        <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0e1726"/>
          <stop offset="100%" stop-color="#060911"/>
        </linearGradient>
        <linearGradient id="cyanP" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#6366f1"/>
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="115" fill="url(#bg3)"/>
      <rect width="504" height="504" x="4" y="4" rx="112" fill="none" stroke="rgba(56,189,248,0.3)" stroke-width="4"/>
      <g transform="translate(150, 110)">
        <path d="M40 40 L130 40 C170 40, 190 65, 190 105 C190 145, 170 170, 130 170 L90 170 L90 260 L40 260 Z M90 90 L90 120 L125 120 C140 120, 145 110, 145 105 C145 100, 140 90, 125 90 Z" fill="url(#cyanP)"/>
      </g>
    </svg>
  `)}`,
  // Icon 4: Cyberpunk Neon Electric Forge (Fuchsia & Cyan)
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <defs>
        <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#140a1c"/>
          <stop offset="100%" stop-color="#050308"/>
        </linearGradient>
        <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="100%" stop-color="#d946ef"/>
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="115" fill="url(#bg4)"/>
      <rect width="504" height="504" x="4" y="4" rx="112" fill="none" stroke="rgba(244,63,94,0.3)" stroke-width="4"/>
      <g transform="translate(136, 126)">
        <polygon points="120,20 210,180 30,180" fill="none" stroke="url(#neonPink)" stroke-width="16" stroke-linejoin="round"/>
        <circle cx="120" cy="120" r="32" fill="#06b6d4"/>
        <path d="M120 60 L120 180" stroke="#ffffff" stroke-width="4" opacity="0.6"/>
      </g>
    </svg>
  `)}`
];

// State
const state = {
  appName: "PolliForge",
  appDesc: "Fast AI icon forge and brand generator for developers",
  selectedStyle: "ios-glass",
  selectedPalette: "amber-violet",
  selectedModel: "flux",
  customAddon: "",
  activeIconIndex: 0,
  isGenerating: false,
  apiKey: localStorage.getItem("polliforge_api_key") || "",
  accessToken: localStorage.getItem("polliforge_access_token") || "",
  appKey: "", // Discovered from /api/config or fallback
  generatedImages: [...defaultIcons]
};

// Style Presets with High-Performance Prompt Engineering
const stylePrompts = {
  "ios-glass": "modern iOS 3D glassmorphic squircle app icon, translucent frosted glass layers, soft ambient inner glow, volumetric lighting, tactile depth, centered glyph, clean dark gradient background, 8k resolution, app store featured design",
  "flat-vector": "minimalist vector app icon, flat design, modern geometric tech glyph, crisp bold silhouette, centered composition, clean solid background, Swiss graphic design style, SVG aesthetic",
  "cyberpunk-neon": "cyberpunk neon app icon, dark tech aesthetic, glowing illuminated circuits, vibrant magenta and cyan lasers, synthwave futuristic insignia, high contrast, centered",
  "retro-pixel": "16-bit retro pixel art app icon, crisp pixelated edges, vibrant arcade color palette, isometric video game emblem, centered, nostalgic clean background",
  "geometric-monogram": "luxury geometric tech monogram logo icon, interlocking architectural letters, modern corporate identity, precision symmetry, golden ratio composition, centered",
  "playful-clay": "playful 3D clay app icon, cute stylized mascot or object, soft tactile claymorphism texture, smooth rounded curves, cheerful lighting, centered"
};

const palettePrompts = {
  "amber-violet": "vibrant warm amber and deep violet color scheme, subtle golden highlights",
  "cyan-blue": "electric cyan, teal, and cobalt blue gradient color scheme",
  "emerald-dark": "emerald green and obsidian dark slate tech colors",
  "crimson-gold": "royal crimson ruby and burnished metallic gold colors",
  "pure-monochrome": "ultra clean monochrome black, metallic platinum and silver colors"
};

// Returns exact callback URL registered in OAuth
function getRedirectUri() {
  return `${window.location.origin}/callback`;
}

// Initialize Application
document.addEventListener("DOMContentLoaded", async () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Load server config (e.g. public Pollinations App Key pk_...)
  await loadServerConfig();

  // Handle OAuth PKCE Redirect Callback
  await handleOAuthCallback();

  // Check Pollen balance if user has token or key
  await refreshPollenBalance();

  // Setup DOM Event Listeners
  setupEventListeners();

  // Initial render of cards and mockups with pristine SVG assets
  renderInitialCards();
  updateMockups();
});

// Render initial pristine cards
function renderInitialCards() {
  const cards = document.querySelectorAll(".icon-result-card");
  cards.forEach((card, idx) => {
    const img = card.querySelector("img");
    if (img && state.generatedImages[idx]) {
      img.src = state.generatedImages[idx];
    }
  });
}

// Load Server Configuration
async function loadServerConfig() {
  try {
    const res = await fetch("/api/config");
    if (res.ok) {
      const data = await res.json();
      if (data.appKey) {
        state.appKey = data.appKey;
      }
    }
  } catch (err) {
    console.warn("Could not load /api/config, continuing in standalone mode", err);
  }
}

// Setup UI Event Listeners
function setupEventListeners() {
  // App Name & Desc live updates
  const inputName = document.getElementById("input-app-name");
  const inputDesc = document.getElementById("input-app-desc");

  inputName.addEventListener("input", (e) => {
    state.appName = e.target.value.trim() || "App";
    updateMockups();
  });

  inputDesc.addEventListener("input", (e) => {
    state.appDesc = e.target.value.trim();
    updateMockups();
  });

  // Style Card Selection
  const styleCards = document.querySelectorAll(".style-card");
  styleCards.forEach((card) => {
    card.addEventListener("click", () => {
      styleCards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      state.selectedStyle = card.getAttribute("data-style") || "ios-glass";
    });
  });

  // Color Palette Selection
  const paletteBtns = document.querySelectorAll(".palette-btn");
  paletteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      paletteBtns.forEach((b) => b.classList.remove("active", "ring-2", "ring-amber-400"));
      btn.classList.add("active", "ring-2", "ring-amber-400");
      state.selectedPalette = btn.getAttribute("data-palette") || "amber-violet";
    });
  });

  // Advanced Toggle
  const btnAdvanced = document.getElementById("btn-toggle-advanced");
  const panelAdvanced = document.getElementById("advanced-settings-panel");
  const arrowAdvanced = document.getElementById("icon-advanced-arrow");

  btnAdvanced.addEventListener("click", () => {
    panelAdvanced.classList.toggle("hidden");
    arrowAdvanced.classList.toggle("rotate-180");
  });

  // Model selection
  const selectModel = document.getElementById("select-model");
  selectModel.addEventListener("change", (e) => {
    state.selectedModel = e.target.value;
  });

  // Custom Addon
  const inputCustom = document.getElementById("input-custom-addon");
  inputCustom.addEventListener("input", (e) => {
    state.customAddon = e.target.value.trim();
  });

  // Main Forge Button
  document.getElementById("btn-forge").addEventListener("click", generateIcons);

  // Icon Result Cards selection
  const resultCards = document.querySelectorAll(".icon-result-card");
  resultCards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      resultCards.forEach((c) => c.classList.remove("active", "border-amber-400/80", "border-2"));
      card.classList.add("active", "border-amber-400/80", "border-2");
      state.activeIconIndex = idx;
      updateMockups();
    });
  });

  // Mockup Tabs
  const tabPhone = document.getElementById("tab-phone");
  const tabBrowser = document.getElementById("tab-browser");
  const tabStore = document.getElementById("tab-store");
  const viewPhone = document.getElementById("preview-phone-view");
  const viewBrowser = document.getElementById("preview-browser-view");
  const viewStore = document.getElementById("preview-store-view");

  const switchTab = (activeTab, activeView) => {
    [tabPhone, tabBrowser, tabStore].forEach((t) => {
      t.classList.remove("active", "bg-amber-500/20", "text-amber-300");
      t.classList.add("text-slate-400");
    });
    [viewPhone, viewBrowser, viewStore].forEach((v) => v.classList.add("hidden"));

    activeTab.classList.add("active", "bg-amber-500/20", "text-amber-300");
    activeTab.classList.remove("text-slate-400");
    activeView.classList.remove("hidden");
  };

  tabPhone.addEventListener("click", () => switchTab(tabPhone, viewPhone));
  tabBrowser.addEventListener("click", () => switchTab(tabBrowser, viewBrowser));
  tabStore.addEventListener("click", () => switchTab(tabStore, viewStore));

  // Downloads & Export
  document.getElementById("btn-download-png").addEventListener("click", () => downloadActiveIcon(512));
  document.getElementById("btn-download-hd").addEventListener("click", () => downloadActiveIcon(1024));
  document.getElementById("btn-export-zip").addEventListener("click", exportDevBundleZip);

  // BYOP Wallet Connection
  document.getElementById("btn-connect-wallet").addEventListener("click", startBYOPLogin);
  document.getElementById("btn-disconnect-wallet").addEventListener("click", disconnectWallet);

  // API Settings Modal
  const modal = document.getElementById("modal-api-settings");
  const inputCustomKey = document.getElementById("input-custom-key");
  document.getElementById("btn-open-api-modal").addEventListener("click", () => {
    inputCustomKey.value = state.apiKey;
    modal.classList.remove("hidden");
  });
  document.getElementById("btn-close-modal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  document.getElementById("btn-save-key").addEventListener("click", () => {
    state.apiKey = inputCustomKey.value.trim();
    if (state.apiKey) {
      localStorage.setItem("polliforge_api_key", state.apiKey);
    } else {
      localStorage.removeItem("polliforge_api_key");
    }
    modal.classList.add("hidden");
    refreshPollenBalance();
  });
  document.getElementById("btn-clear-key").addEventListener("click", () => {
    inputCustomKey.value = "";
    state.apiKey = "";
    localStorage.removeItem("polliforge_api_key");
    modal.classList.add("hidden");
    refreshPollenBalance();
  });
}

// Update Mockups with Active Icon & Texts
function updateMockups() {
  const activeUrl = state.generatedImages[state.activeIconIndex] || state.generatedImages[0];

  document.getElementById("active-preview-icon").src = activeUrl;
  document.getElementById("browser-tab-favicon").src = activeUrl;
  document.getElementById("store-preview-icon").src = activeUrl;

  document.getElementById("preview-app-name").textContent = state.appName;
  document.getElementById("browser-tab-title").textContent = `${state.appName} — App`;
  document.getElementById("store-app-name").textContent = state.appName;
  document.getElementById("store-app-desc").textContent = state.appDesc || "Modern Mobile App";
}

// Primary Icon Generation Pipeline
async function generateIcons() {
  if (state.isGenerating) return;

  const btnForge = document.getElementById("btn-forge");
  const btnText = document.getElementById("btn-forge-text");
  const statusPill = document.getElementById("generation-status-pill");

  state.isGenerating = true;
  btnForge.disabled = true;
  btnForge.classList.add("opacity-75", "cursor-not-allowed");
  btnText.textContent = "Forging 4 Icons...";
  statusPill.textContent = "Synthesizing with Flux...";
  statusPill.classList.add("text-amber-400", "animate-pulse");

  // Construct High-Detail Prompt
  const stylePrompt = stylePrompts[state.selectedStyle] || stylePrompts["ios-glass"];
  const palettePrompt = palettePrompts[state.selectedPalette] || palettePrompts["amber-violet"];
  const customExtra = state.customAddon ? `, ${state.customAddon}` : "";

  const basePrompt = `app icon for "${state.appName}", ${state.appDesc}, ${stylePrompt}, ${palettePrompt}${customExtra}, isolated centered on clean dark background, high contrast, crisp edges, app store quality, vector aesthetics, no text, no letters, no watermark`;

  // 4 Distinct Random Seeds for Variation
  const seeds = Array.from({ length: 4 }, () => Math.floor(Math.random() * 9999999) + 1);

  // Active Key: Access token from BYOP or manual key
  const activeKey = state.apiKey || state.accessToken;

  // Set card loading skeletons
  const cards = document.querySelectorAll(".icon-result-card");
  cards.forEach((card) => {
    const img = card.querySelector("img");
    if (img) {
      img.classList.add("opacity-20");
    }
    card.classList.add("skeleton-loading");
  });

  // Fetch all 4 variations via authenticated /api/image endpoint
  try {
    const fetchPromises = seeds.map(async (seed, i) => {
      const card = cards[i];
      const cardImg = card?.querySelector("img");

      // Stagger slightly (150ms) to ensure smooth parallel queuing
      if (i > 0) {
        await new Promise((res) => setTimeout(res, i * 150));
      }

      let apiUrl = `/api/image?prompt=${encodeURIComponent(basePrompt)}&seed=${seed}&model=${state.selectedModel}&width=512&height=512`;
      if (activeKey) {
        apiUrl += `&token=${encodeURIComponent(activeKey)}`;
      }

      try {
        const res = await fetch(apiUrl, {
          headers: activeKey ? { Authorization: `Bearer ${activeKey}` } : {},
        });

        if (!res.ok) {
          throw new Error(`Generation failed with status ${res.status}`);
        }

        const blob = await res.blob();
        const objectUrl = URL.createObjectURL(blob);
        state.generatedImages[i] = objectUrl;

        if (cardImg) {
          cardImg.src = objectUrl;
          cardImg.classList.remove("opacity-20");
        }
        card?.classList.remove("skeleton-loading");
        return true;
      } catch (err) {
        console.warn(`Variation ${i + 1} fallback:`, err);
        // Fallback gracefully to default SVG icon - NEVER assign broken URL to img.src!
        const fallbackSvg = defaultIcons[i % defaultIcons.length];
        state.generatedImages[i] = fallbackSvg;
        if (cardImg) {
          cardImg.src = fallbackSvg;
          cardImg.classList.remove("opacity-20");
        }
        card?.classList.remove("skeleton-loading");
        return false;
      }
    });

    await Promise.all(fetchPromises);
  } finally {
    state.isGenerating = false;
    btnForge.disabled = false;
    btnForge.classList.remove("opacity-75", "cursor-not-allowed");
    btnText.textContent = "Forge 4 App Icons";
    statusPill.textContent = "Completed";
    statusPill.classList.remove("text-amber-400", "animate-pulse");

    updateMockups();
    refreshPollenBalance();
  }
}

// Download Active Selected Icon
async function downloadActiveIcon(resolution = 512) {
  const activeUrl = state.generatedImages[state.activeIconIndex];
  if (!activeUrl) return;

  const safeName = state.appName.toLowerCase().replace(/[^a-z0-9]/g, "-") || "icon";

  // If it's a data URI (SVG)
  if (activeUrl.startsWith("data:image/svg+xml")) {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = resolution;
      canvas.height = resolution;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(img, 0, 0, resolution, resolution);
        canvas.toBlob((blob) => {
          if (!blob) return;
          const blobUrl = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = blobUrl;
          a.download = `${safeName}-icon-${resolution}x${resolution}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
        });
      }
    };
    img.src = activeUrl;
    return;
  }

  // Remote URL -> Proxy for clean binary download
  const targetUrl = activeUrl.replace("width=512&height=512", `width=${resolution}&height=${resolution}`);
  try {
    const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(targetUrl)}`;
    const response = await fetch(proxyUrl);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `${safeName}-icon-${resolution}x${resolution}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);
  } catch (err) {
    window.open(targetUrl, "_blank");
  }
}

// Export Full Developer Bundle (.ZIP)
async function exportDevBundleZip() {
  if (typeof JSZip === "undefined") {
    alert("JSZip library is still loading. Please try again in a moment.");
    return;
  }

  const btnZip = document.getElementById("btn-export-zip");
  const btnZipText = document.getElementById("btn-zip-text");
  const originalText = btnZipText.textContent;

  try {
    btnZip.disabled = true;
    btnZipText.textContent = "Packaging Bundle...";

    const activeUrl = state.generatedImages[state.activeIconIndex];
    let sourceImg;

    if (activeUrl.startsWith("data:image/svg+xml")) {
      const img = new Image();
      await new Promise((res) => {
        img.onload = res;
        img.src = activeUrl;
      });
      sourceImg = img;
    } else {
      const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(activeUrl.replace("width=512&height=512", "width=1024&height=1024"))}`;
      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error("Could not fetch source icon image");
      const sourceBlob = await response.blob();
      sourceImg = await createImageBitmap(sourceBlob);
    }

    const zip = new JSZip();
    const safeName = state.appName.toLowerCase().replace(/[^a-z0-9]/g, "-") || "app";

    const renderCanvasBlob = (size) => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(sourceImg, 0, 0, size, size);
      }
      return new Promise((res) => canvas.toBlob(res, "image/png"));
    };

    const [blob512, blob192, blobApple, blobFavicon] = await Promise.all([
      renderCanvasBlob(512),
      renderCanvasBlob(192),
      renderCanvasBlob(180),
      renderCanvasBlob(32)
    ]);

    zip.file("icon-512x512.png", blob512);
    zip.file("icon-192x192.png", blob192);
    zip.file("apple-touch-icon.png", blobApple);
    zip.file("favicon.png", blobFavicon);

    const manifest = {
      name: state.appName,
      short_name: state.appName,
      description: state.appDesc,
      start_url: "/",
      display: "standalone",
      background_color: "#090b11",
      theme_color: "#f59e0b",
      icons: [
        { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" }
      ]
    };
    zip.file("site.webmanifest", JSON.stringify(manifest, null, 2));

    const snippet = `<!-- PolliForge Icon Bundle for ${state.appName} -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#f59e0b">
`;
    zip.file("HTML-HEAD-SNIPPET.html", snippet);

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const blobUrl = URL.createObjectURL(zipBlob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `${safeName}-icon-bundle.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(blobUrl);

  } catch (err) {
    console.error("Bundle error:", err);
    alert("Could not build ZIP bundle. You can still download individual PNG icons directly.");
  } finally {
    btnZip.disabled = false;
    btnZipText.textContent = originalText;
  }
}

// ------------------------------------------------------------
// BYOP (Bring Your Own Pollen) OAuth 2.0 PKCE Implementation
// ------------------------------------------------------------

function base64UrlEncode(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return crypto.subtle.digest("SHA-256", data);
}

function generateRandomString(length = 64) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  let result = "";
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);
  for (let i = 0; i < length; i++) {
    result += chars[randomValues[i] % chars.length];
  }
  return result;
}

// Start OAuth PKCE Flow
async function startBYOPLogin() {
  const verifier = generateRandomString(64);
  const challengeBuffer = await sha256(verifier);
  const challenge = base64UrlEncode(challengeBuffer);

  // Store verifier for callback
  localStorage.setItem("polliforge_pkce_verifier", verifier);

  const redirectUri = getRedirectUri();
  const clientId = state.appKey || "pk_polliforge";
  const stateVal = generateRandomString(16);

  const authUrl = new URL("https://enter.pollinations.ai/authorize");
  authUrl.searchParams.set("response_type", "code");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", "profile usage");
  authUrl.searchParams.set("code_challenge", challenge);
  authUrl.searchParams.set("code_challenge_method", "S256");
  authUrl.searchParams.set("state", stateVal);

  window.location.href = authUrl.toString();
}

// Handle OAuth PKCE Callback
async function handleOAuthCallback() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  if (!code) return;

  const verifier = localStorage.getItem("polliforge_pkce_verifier");
  const redirectUri = getRedirectUri();

  try {
    const tokenRes = await fetch("/api/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
        client_id: state.appKey || "pk_polliforge",
        code_verifier: verifier || ""
      })
    });

    if (tokenRes.ok) {
      const data = await tokenRes.json();
      const token = data.access_token || data.key || data.apiKey;
      if (token) {
        state.accessToken = token;
        localStorage.setItem("polliforge_access_token", token);
      }
    }
  } catch (err) {
    console.error("Token exchange failed:", err);
  } finally {
    localStorage.removeItem("polliforge_pkce_verifier");
    window.history.replaceState({}, document.title, "/");
  }
}

// Disconnect Wallet
function disconnectWallet() {
  state.accessToken = "";
  localStorage.removeItem("polliforge_access_token");
  const pill = document.getElementById("wallet-connected-pill");
  const btnConnect = document.getElementById("btn-connect-wallet");
  pill.classList.add("hidden");
  pill.classList.remove("flex");
  btnConnect.classList.remove("hidden");
}

// Refresh Pollen Balance
async function refreshPollenBalance() {
  const activeKey = state.apiKey || state.accessToken;
  const pill = document.getElementById("wallet-connected-pill");
  const btnConnect = document.getElementById("btn-connect-wallet");
  const balanceText = document.getElementById("wallet-balance-text");

  if (!activeKey) {
    pill.classList.add("hidden");
    pill.classList.remove("flex");
    btnConnect.classList.remove("hidden");
    return;
  }

  btnConnect.classList.add("hidden");
  pill.classList.remove("hidden");
  pill.classList.add("flex");

  try {
    const res = await fetch("https://gen.pollinations.ai/account/balance", {
      headers: {
        Authorization: `Bearer ${activeKey}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      const totalPollen = data.balance ?? data.pollen ?? data.total ?? "Active";
      balanceText.textContent = typeof totalPollen === "number" ? `${totalPollen.toFixed(1)} Pollen` : `${totalPollen}`;
    } else {
      balanceText.textContent = "Connected";
    }
  } catch {
    balanceText.textContent = "Connected";
  }
}
