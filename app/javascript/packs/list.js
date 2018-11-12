const createIngredientsDropdowns = () => {
  const select = document.getElementById("select-number-of-ingredients");
  const hiddenElements = document.querySelectorAll(".hidden");
  select.addEventListener("change", () => {
    Array.from(hiddenElements).forEach((choice) => {
      choice.classList.add("hidden");
    });
    Array.from(hiddenElements).slice(0, (select.value - 1)).forEach((choice) => {
      choice.classList.remove("hidden");
    });
  });
}

const createDoses = () => {
  const select = document.getElementById("select-number-of-ingredients");
  const hiddenElements = document.querySelectorAll(".hidden-dose");
  select.addEventListener("change", () => {
    Array.from(hiddenElements).forEach((choice) => {
      choice.classList.add("hidden-dose");
    });
    Array.from(hiddenElements).slice(0, (select.value - 1)).forEach((choice) => {
      choice.classList.remove("hidden-dose");
    });
  });
}

export { createIngredientsDropdowns, createDoses };