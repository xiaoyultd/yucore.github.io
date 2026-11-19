function showKeywordGroup(group = "pumps") {
  document.querySelectorAll(".keyword-group").forEach((panel) => {
    panel.hidden = panel.dataset.group !== group;
  });
}

const activeTab = document.querySelector(".tab.active");
showKeywordGroup(activeTab ? activeTab.dataset.tab : "pumps");

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    showKeywordGroup(tab.dataset.tab);
  });
});
