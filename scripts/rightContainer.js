createCalendarDays();
function createCalendarDays() {
  const days = document.querySelector(".days");
  const dayItems = [
    {
      day: "Sat",
      content: `<div class="date"><span>23</span><span>Sat</span></div>`,
    },
    {
      day: "Sun",
      content: `<div class="date"><span>24</span><span>Sun</span></div>`,
    },
    {
      day: "Mon",
      content: `<div class="date"><span>25</span><span>Mon</span></div>`,
    },
    {
      day: "Tue",
      content: `<div class="date"><span>26</span><span>Tue</span></div>`,
    },
    {
      day: "Thu",
      content: `<div class="date"><span>28</span><span>Thu</span></div>`,
    },
    {
      day: "Fri",
      content: `<div class="date"><span>29</span><span>Fri</span></div>`,
    },
  ];
  const dayEventsName = [
    [
      "batchName",
      function (day) {
        if (day === "Mon" || day === "Fri") {
          return "Inst. 2 class";
        }
        return "FSD B - Jan 23";
      },
    ],
    [
      "eventType",
      function (day) {
        if (day === "Sun") {
          return "Contest";
        }
        return "Lecture";
      },
    ],
    [
      "timing",
      function (day) {
        if (day === "Sun") {
          return "6:00 PM - 8:00 PM";
        } else if (day === "Mon" || day === "Fri") {
          return "8:30 PM - 11:30 PM";
        }
        return "9:00 PM - 11:00 PM";
      },
    ],
  ];
  dayItems.forEach((item) => {
    let dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    let date = document.createElement("div");
    date.innerHTML = item.content;
    let dayEvents = createDayEvents(item.day);
    dayDiv.append(date, dayEvents);
    days.appendChild(dayDiv);
  });

  function createDayEvents(day) {
    let dayEvents = document.createElement("div");
    dayEvents.classList.add("dayEvents");

    let dayEvent = document.createElement("div");
    dayEvent.classList.add("dayEvent");
    dayEvents.appendChild(dayEvent);
    for (item of dayEventsName) {
      let p = document.createElement("p");
      p.classList.add(item[0]);
      p.innerText = item[1](day);
      dayEvent.appendChild(p);
    }
    if (day === "Sun") {
      let dayEvent = document.createElement("div");
      dayEvent.classList.add("dayEvent");
      dayEvent.innerHTML = `<p class="batchName">FSD B - Jan 23</p><p class="eventType">Lecture</p><p class="timing">9:00 PM - 11:00 PM</p>`;
      dayEvents.appendChild(dayEvent);
    }
    return dayEvents;
  }
}
