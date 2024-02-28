let links = document.querySelectorAll(".pagelink")
let pagenum = links.length;
let content = document.querySelector(".dynamicbox");

content.style.width = pagenum * 100 + "%";

links.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    // console.log(elem)\
    e.preventDefault();
    content.style.transform = "translateX(" + (-(elem.id - 1) * 100 / pagenum) + "%";
    links.forEach((link) => {
      link.classList.remove("current")
    });
    elem.classList.add("current");
  })
})