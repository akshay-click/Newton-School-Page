createButton();
function createButton() {
  const topBtn = document.createElement("button");
  document.querySelector(".programs").append(topBtn);
  topBtn.innerHTML = `<img src="assets/logo.svg" alt="logo" />Certification in Full...<img src="assets/down-arrow.svg" alt="arrow-down"/>`;
  createCoursesList(topBtn);
}
function createCoursesList(topBtn) {
  const courses = document.createElement("div");
  topBtn.insertAdjacentElement("afterend", courses);
  courses.classList.add("course-container", "hide");
  const coursesList = [
    { h4: "Your Courses", p: "Find your recently opened here" },
    {
      h4: "Certification in Full Stack Development - January",
      h4: "2023",
      p: "Enrolled",
    },
    { h4: "DSA-1 Refresher Course", p: "Open Course Started" },
    {
      h4: "Newton School's Introduction to Java Programming",
      p: "Open Course Started",
    },
    { h4: "Practice Hub", p: "Improve your tech skills and excel in coding" },
  ];
  coursesList.forEach((course) => {
    let div = document.createElement("div");
    div.classList.add("course-item");
    courses.appendChild(div);
    for (tagName in course) {
      let tag = document.createElement(tagName);
      if (tagName === "h4") {
        tag.classList.add("c-i-h");
      }
      tag.innerText = course[tagName];
      div.appendChild(tag);
    }
  });
  courses.firstChild.classList.remove("course-item");
  courses.lastChild.classList.add("practice-hub");
  document.body.addEventListener("click", () => {
    courses.classList.add("hide");
  });
  courses.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  topBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    courses.classList.toggle("hide");
  });
}
