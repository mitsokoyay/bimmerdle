const img = document.getElementById("zoomable") as HTMLImageElement;
const zoominBtn = document.getElementById("zoomInBtn") as HTMLButtonElement;
const zoomOutBtn = document.getElementById("zoomOutBtn") as HTMLButtonElement;


let scale = 1;
const zoomStep = 0.2;
const minScale = 1;
const maxScale = 3;


function updateZoom(){
  img.style.transform = 'scale(${scale})';
  
}

zoominBtn.addEventListener("click", () =>{
  if(scale < maxScale){
    scale+= zoomStep;
    updateZoom();
  }
});

zoomOutBtn.addEventListener("click", () => {
  if(scale > minScale){
    scale -= zoomStep;
    updateZoom();
  }
});
