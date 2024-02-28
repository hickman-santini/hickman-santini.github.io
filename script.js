let links = document.querySelectorAll(".pagelink")
let pagenum = links.length;
let content = document.querySelector(".dynamicbox");

content.style.width = pagenum * 100 + "%";

links.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    // console.log(elem)
    content.style.transform = "translateX(" + (-(elem.id - 1) * 100 / pagenum) + "%";
    links.forEach((link) => {
      link.classList.remove("current")
    });
    elem.classList.add("current");
    if (elem.id == 1) {
      window.location.hash = "";
    }
    else {
      window.location.hash = "#" + elem.id;
    }
  })
})

let urlpage = window.location.hash;
console.log(urlpage.replace("#", ""))
if (urlpage.replace("#", "")) {
  content.classList.add("static");
  document.getElementById(urlpage.replace("#", "")).click();
  content.offsetHeight;
  content.classList.remove("static")
}



