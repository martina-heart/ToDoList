const buttons = document.querySelectorAll("li");
const section = document.querySelectorAll(".every");

buttons.forEach((item) => {
  item.addEventListener("click", () => {
    buttons.forEach((item) => {
      item.className = "";
    });
    item.className = "active";
    let values = item.textContent;
    section.forEach((show) => {
      show.style.display = "none";
      if (
        show.getAttribute("data-id") === values ||
        values === "all countries"
      ) {
        show.style.display = "block";
      }
    });
  });
});
