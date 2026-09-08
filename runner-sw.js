const loadGame = () => {
  let script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/bopmoocow23/ut-upload/runner.js";
  script.async = true;
  document.head.appendChild(script);
};

// wait till SW is ready to handle fetch
const loadSW = async () => {
  try {
    await navigator.serviceWorker.register("sw.js");
    await navigator.serviceWorker.ready;

    loadGame();
  } catch (e) {
    console.error(e);

    loadGame();
  }
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", loadSW);
}
