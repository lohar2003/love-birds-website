var myVar;

function myFunction() {
myVar = setTimeout(showPage, 5000);
}

function showPage() {
document.getElementById("loading").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}



// var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// var rootElement = document.documentElement;

// function scrollToTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);