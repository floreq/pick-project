document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Chart
const ctx = document.getElementById("chart-1");
const ctx1 = document.getElementById("chart-2");

const colors = {
  main: "#ee6c4d",
  black: "#293241",
  lGray: "#d4d4d4",
  gray: "#a3a3a3"
};
let font = {
  fontFamily: "PT Sans",
  fontSize: 18,
  padding: 24
};
const border = {
  borderWidth: 2,
  borderColor: colors.lGray
};
const options = {
  maintainAspectRatio: false,
  aspectRatio: 2,
  title: {
    display: true,
    text: "Pomiar ciśnienia",
    fontSize: font.fontSize,
    fontStyle: "bold",
    fontColor: colors.black,
    fontFamily: font.fontFamily,
    padding: font.padding
  },
  legend: {
    display: false
  },
  elements: {
    point: {
      radius: 0
    }
  },
  scales: {
    xAxes: [
      {
        ticks: {
          fontFamily: font.fontFamily,
          fontSize: font.fontSize,
          fontColor: colors.gray
        },
        gridLines: {
          color: border.borderColor,
          display: false,
          lineWidth: border.borderWidth,
          drawBorder: true
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontFamily: font.fontFamily,
          fontSize: font.fontSize,
          fontColor: colors.gray,
          maxTicksLimit: 3
        },
        gridLines: {
          color: border.borderColor,
          display: false,
          lineWidth: border.borderWidth,
          drawBorder: true
        }
      }
    ]
  }
};

const lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [
      {
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: colors.main,
        borderWidth: border.borderWidth,
        data: [2, 1, 3, 1, 2, 4.5, 4]
      }
    ]
  },
  options: options
});
const lineChart1 = new Chart(ctx1, {
  type: "line",
  data: {
    labels: [0, 2, 3, 4, 5],
    datasets: [
      {
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: colors.main,
        borderWidth: border.borderWidth,
        data: [0, 2, 3, 6, 8]
      }
    ]
  },
  options: options
});
