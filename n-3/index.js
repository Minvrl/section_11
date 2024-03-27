document.getElementById("fontColor").addEventListener("input", function() {
    var color = this.value;
    document.getElementById("masthead-t").style.color = color;
});

document.getElementById("fontSize").addEventListener("input", function() {
    var size = this.value + "px";
    document.getElementById("masthead-t").style.fontSize = size;
});