var img = document.getElementById("zoomable");
var zoominBtn = document.getElementById("zoomInBtn");
var zoomOutBtn = document.getElementById("zoomOutBtn");
var scale = 1;
var zoomStep = 0.2;
var minScale = 1;
var maxScale = 3;
function updateZoom() {
    img.style.transform = 'scale(${scale})';
}
zoominBtn.addEventListener("click", function () {
    if (scale < maxScale) {
        scale += zoomStep;
        updateZoom();
    }
});
zoomOutBtn.addEventListener("click", function () {
    if (scale > minScale) {
        scale -= zoomStep;
        updateZoom();
    }
});
