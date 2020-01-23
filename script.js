let iFrame = document.getElementById("previewEmail");
let spans = iFrame.contentWindow.document.getElementsByTagName("span");
let counter = 0;
for (let i = 0; i < spans.length; i++){
   if (spans[i].style.whiteSpace == "pre-wrap") {
       spans[i].style.whiteSpace = "";
       counter++;
   }
}
console.log("Replaced " + counter + " pre-wraps.");
