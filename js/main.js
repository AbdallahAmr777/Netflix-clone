var acc = document.getElementsByClassName("accordion");

for (let index = 0; index < acc.length; index++) {
  acc[index].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight) {
        panel.style.maxHeight=null
    } else {
        panel.style.maxHeight = panel.scrollHeight +"px";
    }
  });
}
