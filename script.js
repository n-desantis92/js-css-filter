//seleziono il tag img   
var img = document.getElementById("myimage");

img.style.filter = 'grayscale(0%) saturate(88%) sepia(0%) invert(0%) contrast(90%) brightness(100%) blur(0px) hue-rotate(0deg)';





// function
function fileSelected(event) {

  //seleziono il file all'evento onchange 
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  //aggiungo il title all'img dal name del file   
  img.title = selectedFile.name;

  //al caricamento del file aggiungo dal file il percorso all'img
  reader.onload = function(event) {
    img.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);

//   rendo invisibile l'uploader
  var uploader = document.getElementById("uploader").style.display = "none";
  
}

function setFilter(filter) {
    var grayscale = document.getElementById("grayscale").value;
    var saturate = document.getElementById("saturate").value;
    var sepia = document.getElementById("sepia").value;
    var invert = document.getElementById("invert").value;
    var contrast = document.getElementById("contrast").value;
    var brightness = document.getElementById("brightness").value;
    var blur = document.getElementById("blur").value;
    var huerotate = document.getElementById("hue-rotate").value;

    return img.style.filter =
        `grayscale(${grayscale}%)
        saturate(${saturate}%)
        sepia(${sepia}%)
        invert(${invert}%) 
        contrast(${contrast}%)
        brightness(${brightness}%)
        blur(${blur}px)
        hue-rotate(${huerotate}deg)`;
}

