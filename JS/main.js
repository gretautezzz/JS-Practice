var main = document.querySelector("main");
var img= document.querySelector("img");

main.addEventListener("click", function(e){
    var klikas = e.target;
    var klikosrc = klikas.getAttribute("src");
    console.log(klikosrc);

    img.setAttribute("src", klikosrc);

    img
})