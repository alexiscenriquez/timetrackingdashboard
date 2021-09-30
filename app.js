let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

let filter = document.querySelectorAll(".filter");

window.onload = displayItems("weekly");
filter.forEach((x) => {
  x.addEventListener("click", (e) => {
    const elemId = e.target.getAttribute("id");
    displayItems(elemId);
  });
});

function displayItems(elemId) {
  filter.forEach((x) => {
    x.classList.remove("clicked");
  });
  document.getElementById(elemId).classList.add("clicked");

  data.forEach((i) => {
    const cat = i.title.toLowerCase();
    const hrs = `${cat}-hrs`;
    const prd = `${cat}-prd`;
    const heading = `${cat}-cat`;
    document.getElementById(heading).innerHTML = `${i.title}`;
    document.getElementById(
      hrs
    ).innerHTML = `${i.timeframes[elemId].current}hrs`;

    switch (elemId) {
      case "daily":
        document.getElementById(
          prd
        ).innerHTML = `Yesterday - ${i.timeframes[elemId].previous}hrs`;
        break;
      case "weekly":
        document.getElementById(
          prd
        ).innerHTML = `Yesterday - ${i.timeframes[elemId].previous}hrs`;
        break;
      case "monthly":
        document.getElementById(
          prd
        ).innerHTML = `Yesterday - ${i.timeframes[elemId].previous}hrs`;
        break;
    }
  });
}
