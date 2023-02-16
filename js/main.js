let lis = document.querySelectorAll(".filter li");
let courses = document.querySelectorAll(".courses>div");

lis.forEach(function (li) {
  li.addEventListener("click", function () {
    lis.forEach(function (li) {
      li.classList.remove("active");
    });
    li.classList.add("active");
    // >>>>>>>>>>>>>>>>>>>>>
    console.log(li.dataset.course);
    courses.forEach(function (course) {
      course.style.display = "none";
    });
    let cour = document.querySelectorAll(`.${li.dataset.course}`);
    cour.forEach(function (cour) {
      cour.style.display = "block";
    });
  });
});
