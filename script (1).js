// STEP 1: Item data.
// Each item says: which layer it belongs to, what image to show,
// and a swatch color to use as the button's icon (no separate icon files needed).
const itemData = [
  { id: "lips1",    layer: "lips-layer",    category: "lips",    color: "#c81d3a", image: "images/layers/lips1.svg" },
  { id: "lips2",    layer: "lips-layer",    category: "lips",    color: "#e0669a", image: "images/layers/lips2.svg" },
  { id: "eyes1",    layer: "eyes-layer",    category: "eyes",    color: "#8a4fd1", image: "images/layers/eyes1.svg" },
  { id: "clothes1", layer: "clothes-layer", category: "clothes", color: "#2f6fb0", image: "images/layers/clothes1.svg" },
];

// STEP 2: Build one button per item and drop it in #item-menu
function buildMenu() {
  const menu = document.getElementById("item-menu");

  itemData.forEach(item => {
    const btn = document.createElement("button");
    btn.style.backgroundColor = item.color;
    btn.title = item.category;

    btn.addEventListener("click", () => {
      applyItem(item);
    });

    menu.appendChild(btn);
  });
}

// STEP 3: Apply the clicked item to its layer on the character
function applyItem(item) {
  const layerEl = document.getElementById(item.layer);
  layerEl.src = item.image;
  layerEl.style.display = "block";
}

buildMenu();
