function showKeywordGroup(group = "pumps") {
  document.querySelectorAll(".keyword-group").forEach((panel) => {
    panel.hidden = panel.dataset.group !== group;
  });
}

function scrollTargetIntoView() {
  const hash = location.hash;
  if (!hash || hash === "#") return;
  const scroller = document.querySelector(".page-scroll");
  if (!scroller) return;
  let target = null;
  try {
    target = document.querySelector(hash);
  } catch (error) {
    return;
  }
  if (!target || !scroller.contains(target)) return;
  target.scrollIntoView({ block: "start" });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || link.target === "_blank") return;
  const url = new URL(link.href, location.href);
  if (url.pathname !== location.pathname || !url.hash) return;
  const scroller = document.querySelector(".page-scroll");
  if (!scroller) return;
  let target = null;
  try {
    target = document.querySelector(url.hash);
  } catch (error) {
    return;
  }
  if (!target || !scroller.contains(target)) return;
  event.preventDefault();
  if (location.hash !== url.hash) {
    history.pushState(null, "", url.hash);
  }
  target.scrollIntoView({ block: "start" });
});

window.addEventListener("hashchange", scrollTargetIntoView);
scrollTargetIntoView();

const activeTab = document.querySelector(".tab.active");
showKeywordGroup(activeTab ? activeTab.dataset.tab : "pumps");

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    showKeywordGroup(tab.dataset.tab);
  });
});
