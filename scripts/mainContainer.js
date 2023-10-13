const arrowSvgItem = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>`;
const arrow = `<div class="arrow">${arrowSvgItem}</div>`;
(() => {
  createTaskContainer();
  createPerformanceContainer();
  createSessionsContainer();
  activateLecturesBtn();
  makeStreaks();
})();

function createTaskContainer() {
  const main = document.querySelector(".main-container");
  main.id = "all";

  const h3 = "Your ongoing tasks";
  const p = "Solve the tasks to become a rockstar developer";
  const title = createContainerTitle(h3, p);
  title.classList.add("m-title");

  const bar = document.createElement("div");
  const barTabs = {
    All: "#all",
    Lectures: "#lectures",
    Performance: "#performance",
    Sessions: "#sessions",
  };
  for (tab in barTabs) {
    let aTag = document.createElement("a");
    aTag.classList.add("bar-item");
    aTag.classList.add(`${barTabs[tab].slice(1)}Btn`);
    aTag.setAttribute("href", barTabs[tab]);
    aTag.innerText = tab;
    bar.appendChild(aTag);
  }

  const tasks = document.createElement("div");
  tasks.classList.add("tasks");
  const tasksLeftList = [
    {
      type: "General",
      name: "HTML Learnig Project: Spotify Landing Page",
      deadline: "Deadline is16 Aug, 2:00 AM",
    },
    {
      type: "Contest",
      name: "Contest 13-08-23",
      deadline: "Starts at 13 Aug, 10:00 AM, Duration: 2h",
    },
    {
      type: "Contest",
      name: "Contest 13-08-23",
      deadline: "Starts at 13 Aug, 6:00 PM, Duration: 2h",
    },
  ];
  const taskRight = `${arrow}<p>2/3 solved <i class="fa-solid fa-check"></i></p>`;
  tasksLeftList.forEach((task) => {
    let div = document.createElement("div");
    let left = document.createElement("div");
    left.classList.add("task-item-left");
    for (item in task) {
      let p = document.createElement("p");
      p.classList.add(`task-${item}`);
      p.innerText = task[item];
      left.append(p);
    }
    let first = left.firstChild;
    if (first.innerText == "Contest") {
      first.classList.add("task-contest");
    } else if (first.innerText == "General") {
      first.classList.add("task-general");
    }
    let right = document.createElement("div");
    right.classList.add("task-item-right");
    right.innerHTML = taskRight;
    div.append(left, right);
    div.classList.add("task-item");
    tasks.appendChild(div);
  });

  const lecturesContainer = createLecturesContainer();
  lecturesContainer.classList.add("hide");

  main.append(title, bar, tasks, lecturesContainer);
}

function createPerformanceContainer() {
  const performance = document.querySelector(".performance");
  performance.id = "performance";
  const h3 = "Your peformance";
  const p =
    "Your progress will directly affect your placement score, make sure you keep it above 70%";
  const title = createContainerTitle(h3, p);
  title.classList.add("p-title");

  const pItems = [
    {
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" d="M4.25391 3.00098C3.01127 3.00098 2.00391 4.00834 2.00391 5.25098V14.751C2.00391 15.9936 3.01127 17.001 4.25391 17.001H11.25V20.4883H7.5C7.08579 20.4883 6.75 20.8241 6.75 21.2383C6.75 21.6525 7.08579 21.9883 7.5 21.9883H16.5C16.9142 21.9883 17.25 21.6525 17.25 21.2383C17.25 20.8241 16.9142 20.4883 16.5 20.4883H12.75V17.001H19.7463C20.989 17.001 21.9963 15.9936 21.9963 14.751V5.25098C21.9963 4.00834 20.989 3.00098 19.7463 3.00098H4.25391ZM12 15.4966C12.0276 15.4966 12.0548 15.4981 12.0817 15.501H19.7463C20.1606 15.501 20.4963 15.1652 20.4963 14.751V5.25098C20.4963 4.83676 20.1606 4.50098 19.7463 4.50098H4.25391C3.83969 4.50098 3.50391 4.83676 3.50391 5.25098V14.751C3.50391 15.1652 3.83969 15.501 4.25391 15.501H11.9183C11.9452 15.4981 11.9724 15.4966 12 15.4966ZM15.48 11.2481C16.3706 10.6544 16.3706 9.34572 15.48 8.75198L11.5821 6.15337C10.5852 5.48882 9.25003 6.20341 9.25003 7.40145L9.25003 12.5987C9.25003 13.7967 10.5852 14.5113 11.5821 13.8467L15.48 11.2481ZM10.75 7.40145L14.6479 10.0001L10.75 12.5987V7.40145Z"></path></svg>`,
      detail: `<div class="detail-name">Lecture</div><div class="score"><h3 id="lecturePercentage">0%</h3>(<span id="lectureScore">0</span>)</div>`,
    },
    {
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7 3.0625C5.75736 3.0625 4.75 4.06986 4.75 5.3125V18.687C4.75 19.9296 5.75736 20.937 7 20.937H17C18.2426 20.937 19.25 19.9296 19.25 18.687V5.3125C19.25 4.06986 18.2426 3.0625 17 3.0625H7ZM6.25 5.3125C6.25 4.89829 6.58579 4.5625 7 4.5625H17C17.4142 4.5625 17.75 4.89829 17.75 5.3125V18.687C17.75 19.1012 17.4142 19.437 17 19.437H7C6.58579 19.437 6.25 19.1012 6.25 18.687V5.3125ZM8.71387 11.25C8.29965 11.25 7.96387 11.5858 7.96387 12C7.96387 12.4142 8.29965 12.75 8.71387 12.75H15.2861C15.7003 12.75 16.0361 12.4142 16.0361 12C16.0361 11.5858 15.7003 11.25 15.2861 11.25H8.71387ZM7.96387 8C7.96387 7.58579 8.29965 7.25 8.71387 7.25H15.2861C15.7003 7.25 16.0361 7.58579 16.0361 8C16.0361 8.41421 15.7003 8.75 15.2861 8.75H8.71387C8.29965 8.75 7.96387 8.41421 7.96387 8ZM8.71387 15.25C8.29965 15.25 7.96387 15.5858 7.96387 16C7.96387 16.4142 8.29965 16.75 8.71387 16.75H12.0857C12.4999 16.75 12.8357 16.4142 12.8357 16C12.8357 15.5858 12.4999 15.25 12.0857 15.25H8.71387Z"></path></svg>`,
      detail: `<div class="detail-name">My Assignments</div><div class="score"><h3>100%</h3>(164/164)</div>`,
    },
    {
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" d="M7.99366 2.25C7.16523 2.25 6.49366 2.92157 6.49366 3.75V4.66602H4.49243C3.664 4.66602 2.99243 5.33759 2.99243 6.16602V7.96527C2.99243 9.48405 4.22365 10.7153 5.74243 10.7153H6.65565C7.18332 12.8152 8.94507 14.4252 11.125 14.7292V17.0645H11.0454C8.88024 17.0645 7.125 18.8197 7.125 20.9849C7.125 21.4074 7.46753 21.7499 7.89005 21.7499H15.86C16.2825 21.7499 16.625 21.4074 16.625 20.9849C16.625 18.8197 14.8698 17.0645 12.7046 17.0645H12.625V14.7292C14.805 14.4253 16.5669 12.8153 17.0946 10.7153H18.0081C19.5268 10.7153 20.7581 9.48405 20.7581 7.96527V6.16602C20.7581 5.33759 20.0865 4.66602 19.2581 4.66602H17.2565V3.75C17.2565 2.92157 16.585 2.25 15.7565 2.25H7.99366ZM6.49366 9.21527V6.16602H4.49243L4.49243 7.96527C4.49243 8.65562 5.05208 9.21527 5.74243 9.21527H6.49366ZM7.99366 5.44333V9.39959C7.99366 11.5433 9.73144 13.281 11.8751 13.281C14.0188 13.281 15.7565 11.5433 15.7565 9.39959L15.7565 5.4332L15.7564 5.41602L15.7565 5.39883V3.75L7.99366 3.75V5.3887C7.99398 5.39776 7.99415 5.40687 7.99415 5.41602C7.99415 5.42516 7.99398 5.43427 7.99366 5.44333ZM18.0081 9.21527H17.2565V6.16602H19.2581V7.96527C19.2581 8.65562 18.6984 9.21527 18.0081 9.21527ZM15.0114 20.2499C14.7003 19.2725 13.7851 18.5645 12.7046 18.5645H11.0454C9.9649 18.5645 9.04974 19.2725 8.7386 20.2499H15.0114Z"></path></svg>`,
      detail: `<div class="detail-name">Contests</div><div class="score"><h3>79%</h3>(326/409)</div>`,
    },
    {
      svg: `<svg width="24" height="24" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_2105)"><path fill="currentColor" fill-rule="evenodd" d="M6.25342 2.00488C5.01078 2.00488 4.00342 3.01224 4.00342 4.25488V16.7488C4.00342 17.9914 5.01078 18.9988 6.25342 18.9988H7.00586V19.7507C7.00586 20.9934 8.01322 22.0007 9.25586 22.0007H17.7495C18.9922 22.0007 19.9995 20.9934 19.9995 19.7507V7.25684C19.9995 6.0142 18.9922 5.00684 17.7495 5.00684H16.9971V4.25488C16.9971 3.01224 15.9897 2.00488 14.7471 2.00488H6.25342ZM16.9971 6.50684V16.7488C16.9971 17.9914 15.9897 18.9988 14.7471 18.9988H8.50586V19.7507C8.50586 20.1649 8.84165 20.5007 9.25586 20.5007H17.7495C18.1637 20.5007 18.4995 20.1649 18.4995 19.7507V7.25684C18.4995 6.84262 18.1637 6.50684 17.7495 6.50684H16.9971ZM5.50342 4.25488C5.50342 3.84067 5.8392 3.50488 6.25342 3.50488H14.7471C15.1613 3.50488 15.4971 3.84067 15.4971 4.25488V16.7488C15.4971 17.163 15.1613 17.4988 14.7471 17.4988H6.25342C5.8392 17.4988 5.50342 17.163 5.50342 16.7488V4.25488ZM10.5244 15.3354C11.0767 15.3354 11.5244 14.8877 11.5244 14.3354C11.5244 13.7832 11.0767 13.3354 10.5244 13.3354C9.97213 13.3354 9.52441 13.7832 9.52441 14.3354C9.52441 14.8877 9.97213 15.3354 10.5244 15.3354ZM10.1648 7.37234C10.4149 7.31478 10.6762 7.32855 10.9189 7.41209C11.1617 7.49563 11.3761 7.64559 11.5379 7.84492C11.6996 8.04426 11.8022 8.28497 11.834 8.5397C11.8657 8.79443 11.8254 9.05296 11.7175 9.28591C11.6097 9.51886 11.4387 9.71688 11.2239 9.85748C11.1872 9.88148 11.1495 9.90364 11.111 9.92392C10.5688 10.209 9.769 10.8277 9.77136 11.8135L9.77142 11.8389C9.77241 12.2531 10.109 12.5881 10.5232 12.5871C10.9374 12.5861 11.2724 12.2495 11.2714 11.8353L11.2714 11.8099C11.2712 11.7609 11.2892 11.6845 11.3818 11.5751C11.4778 11.4617 11.6276 11.347 11.809 11.2516C11.8898 11.2091 11.9687 11.1627 12.0454 11.1125C12.495 10.8182 12.853 10.4037 13.0787 9.91609C13.3045 9.42847 13.3889 8.8873 13.3224 8.35409C13.2559 7.82088 13.0412 7.31701 12.7026 6.89977C12.364 6.48252 11.9152 6.16862 11.4071 5.99375C10.899 5.81888 10.3521 5.79005 9.8284 5.91054C9.30475 6.03103 8.82539 6.29601 8.44483 6.67535C8.06426 7.0547 7.79775 7.5332 7.67557 8.05647C7.58139 8.45983 7.83204 8.86317 8.2354 8.95735C8.63877 9.05152 9.04211 8.80088 9.13629 8.39751C9.19465 8.14753 9.32197 7.91894 9.50378 7.73772C9.68559 7.55649 9.91459 7.4299 10.1648 7.37234Z"></path></g>
      <defs><clipPath id="clip0_3_2105"><rect width="20" height="20" fill="white" transform="translate(2 2)"></rect></clipPath></defs></svg>`,
      detail: `<div class="detail-name">Quizzes</div><div class="score"><h3>87%</h3>(51/58)</div>`,
    },
  ];
  const items = createItemContainers(pItems, "p");
  items.firstChild.classList.add("lecturesBtn");
  performance.append(title, items);
}

function createSessionsContainer() {
  const sessions = document.querySelector(".sessions");
  sessions.id = "sessions";
  const h3 = "Your Sessions";
  const title = createContainerTitle(h3);
  title.classList.add("s-title");
  const sItems = [
    {
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" role="img" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M26.6667 25.3333H25.3333V6.66667C25.3333 5.93333 24.7333 5.33333 24 5.33333H18.6667C18.6667 4.6 18.0667 4 17.3333 4H8C7.26667 4 6.66667 4.6 6.66667 5.33333V25.3333H5.33333C4.6 25.3333 4 25.9333 4 26.6667C4 27.4 4.6 28 5.33333 28H17.3333C18.0667 28 18.6667 27.4 18.6667 26.6667V8H22.6667V26.6667C22.6667 27.4 23.2667 28 24 28H26.6667C27.4 28 28 27.4 28 26.6667C28 25.9333 27.4 25.3333 26.6667 25.3333ZM14.6667 17.3333C13.9333 17.3333 13.3333 16.7333 13.3333 16C13.3333 15.2667 13.9333 14.6667 14.6667 14.6667C15.4 14.6667 16 15.2667 16 16C16 16.7333 15.4 17.3333 14.6667 17.3333Z"></path></svg>`,
      detail: `<div class="s-item-name">Mock Interviews</div><div class="s-item-score">4</div>`,
    },
    {
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" role="img" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M21.3333 14.6667C23.5466 14.6667 25.3199 12.88 25.3199 10.6667C25.3199 8.45332 23.5466 6.66666 21.3333 6.66666C19.1199 6.66666 17.3333 8.45332 17.3333 10.6667C17.3333 12.88 19.1199 14.6667 21.3333 14.6667ZM10.6666 14.6667C12.8799 14.6667 14.6533 12.88 14.6533 10.6667C14.6533 8.45332 12.8799 6.66666 10.6666 6.66666C8.45325 6.66666 6.66658 8.45332 6.66658 10.6667C6.66658 12.88 8.45325 14.6667 10.6666 14.6667ZM10.6666 17.3333C7.55992 17.3333 1.33325 18.8933 1.33325 22V24C1.33325 24.7333 1.93325 25.3333 2.66659 25.3333H18.6666C19.3999 25.3333 19.9999 24.7333 19.9999 24V22C19.9999 18.8933 13.7733 17.3333 10.6666 17.3333ZM21.3333 17.3333C20.9466 17.3333 20.5066 17.36 20.0399 17.4C20.0666 17.4133 20.0799 17.44 20.0933 17.4533C21.6133 18.56 22.6666 20.04 22.6666 22V24C22.6666 24.4667 22.5732 24.92 22.4266 25.3333H29.3333C30.0666 25.3333 30.6666 24.7333 30.6666 24V22C30.6666 18.8933 24.4399 17.3333 21.3333 17.3333Z"></path></svg>`,
      detail: `<div class="s-item-name">Group Sessions</div><div class="s-item-score">16</div>`,
    },
    {
      svg: `<svg width="32" height="32" viewBox="0 0 32 32" role="img" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M15.9999 16C18.9466 16 21.3333 13.6133 21.3333 10.6666C21.3333 7.71998 18.9466 5.33331 15.9999 5.33331C13.0533 5.33331 10.6666 7.71998 10.6666 10.6666C10.6666 13.6133 13.0533 16 15.9999 16ZM15.9999 18.6666C12.4399 18.6666 5.33325 20.4533 5.33325 24V25.3333C5.33325 26.0666 5.93325 26.6666 6.66659 26.6666H25.3333C26.0666 26.6666 26.6666 26.0666 26.6666 25.3333V24C26.6666 20.4533 19.5599 18.6666 15.9999 18.6666Z"></path></svg>`,
      detail: `<div class="s-item-name">Mentor 1:1s</div><div class="s-item-score">1</div>`,
    },
  ];
  const items = createItemContainers(sItems, "s");
  sessions.append(title, items);
}

function createContainerTitle(heading, para) {
  let div = document.createElement("div");
  div.classList.add("container-title");
  let h3 = document.createElement("h3");
  h3.innerText = heading;
  div.appendChild(h3);
  if (para) {
    let p = document.createElement("p");
    p.innerText = para;
    div.appendChild(p);
  }
  return div;
}
function createItemContainers(list, title) {
  const container = document.createElement("div");
  container.classList.add("c-section");
  for (let i = 0; i < list.length; i++) {
    let div = document.createElement("div");
    div.classList.add("c-item", `${title}-item`);

    let itemSvg = document.createElement("div");
    itemSvg.classList.add("svg", `svg-${title}${i + 1}`);
    itemSvg.innerHTML = list[i].svg;

    let itemDetail = document.createElement("div");
    itemDetail.classList.add("c-item-detail");
    itemDetail.innerHTML = list[i].detail;

    let itemArrow = document.createElement("div");
    itemArrow.classList.add("arrow");
    itemArrow.innerHTML = arrowSvgItem;

    div.append(itemSvg, itemDetail, itemArrow);
    container.append(div);
  }
  return container;
}

function createLecturesContainer() {
  let div = document.createElement("div");
  div.id = "lectures";
  const lectures = [
    "JS recursion, JS regex, DOM events",
    "JS Recursion, DOM Events",
    "Event bubbling, capturing and propagation, JS Value vs reference types",
    "S spread operator, JS Rest Operator, Js objects",
    "closure, JS Basic OOPS, 4 pillars, JS This keyword, JS Functions & objects",
  ];
  lectures.forEach((item) => {
    let lectureItem = document.createElement("div");
    lectureItem.classList.add("lecture-item");
    let lecture = document.createElement("p");
    lecture.classList.add("lecture-name");
    lecture.innerText = item;
    let lectureBtn = createLectureBtn();
    lectureItem.append(lecture, lectureBtn);
    div.appendChild(lectureItem);
  });
  return div;
}
function createLectureBtn() {
  let p = document.createElement("p");
  let watchedBtn = createWatchedBtn(p);
  let notWatchedBtn = createNotWatchedBtn(p);
  p.append(watchedBtn, notWatchedBtn);
  return p;
}
function createWatchedBtn() {
  let btn = document.createElement("button");
  btn.innerText = "Watched";
  btn.classList.add("lectureBtn", "watchBtn");
  return btn;
}
function createNotWatchedBtn() {
  let btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.classList.add("lectureBtn", "notWatchBtn", "hide");
  return btn;
}
function activateLecturesBtn() {
  const lectureBtnTab = document.querySelector(".lecturesBtn");
  lectureBtnTab.setAttribute("href", "#");
  const lectureBtns = document.querySelectorAll(".lecturesBtn");
  lectureBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tasks = document.querySelector(".tasks");
      tasks.classList.add("hide");
      const lectures = document.getElementById("lectures");
      lectures.classList.remove("hide");
    });
  });
  const all = document.querySelector(".allBtn");
  all.addEventListener("click", () => {
    const tasks = document.querySelector(".tasks");
    tasks.classList.remove("hide");
    const lectures = document.getElementById("lectures");
    lectures.classList.add("hide");
  });
}
function makeStreaks() {
  const watchBtns = document.querySelectorAll(".watchBtn");
  const notWatchBtns = document.querySelectorAll(".notWatchBtn");
  const lectureStreak = document.getElementById("lecture-streak");
  const lecturePercentage = document.getElementById("lecturePercentage");
  const lectureScore = document.getElementById("lectureScore");
  let streak = Number(lectureStreak.innerText);
  watchBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      streak++;
      lecturePercentage.innerText = (streak / 5) * 100 + "%";
      lectureScore.innerText = `${streak}/5`;
      lectureStreak.innerText = streak;
      btn.classList.add("hide");
      let notWatchBtn = e.target.nextElementSibling;
      notWatchBtn.classList.remove("hide");
    });
  });
  notWatchBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      streak--;
      lecturePercentage.innerText = (streak / 5) * 100 + "%";
      lectureScore.innerText = `${streak}/5`;
      lectureStreak.innerText = streak;
      btn.classList.add("hide");
      let watchBtn = e.target.previousElementSibling;
      watchBtn.classList.remove("hide");
    });
  });
}
