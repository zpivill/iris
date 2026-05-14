const buttons  = document.querySelectorAll('.cat-btn');
const sections = document.querySelectorAll('.menu-section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update active button
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show / hide sections
    sections.forEach(sec => {
      if (filter === 'all' || sec.dataset.category === filter) {
        sec.classList.remove('hidden');
      } else {
        sec.classList.add('hidden');
      }
    });
  });
});

window.onload = function() {
  document.getElementById("popup").style.display = "flex";
};

document.getElementById("closeBtn").onclick = function() {
  document.getElementById("popup").style.display = "none";
};
/* ===== Language switcher ===== */
(function () {
  const LANGS = ["th", "en", "zh"];
  const STORAGE_KEY = "iris-lang";

  function getSavedLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function applyLanguage(lang) {
    if (!LANGS.includes(lang)) lang = "th";
    document.documentElement.lang = lang;

    // Toggle every element with data-en or data-zh
    document.querySelectorAll("[data-en], [data-zh]").forEach(function (el) {
      if (!("origText" in el.dataset)) {
        el.dataset.origText = el.textContent;
      }
      if (lang === "th") {
        el.textContent = el.dataset.origText;
      } else if (lang === "en" && el.dataset.en) {
        el.textContent = el.dataset.en;
      } else if (lang === "zh" && el.dataset.zh) {
        el.textContent = el.dataset.zh;
      } else {
        el.textContent = el.dataset.origText;
      }
    });

    // Show only the active popup language block
    document.querySelectorAll(".popup-lang").forEach(function (el) {
      el.classList.toggle("active", el.dataset.lang === lang);
    });

    // Mark active flag button
    document.querySelectorAll(".lang-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    saveLang(lang);
  }

  // Wire up flag buttons
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.dataset.lang);
    });
  });

  // Apply saved (or default) language on load
  applyLanguage(getSavedLang() || "th");
})();
