let labelsOne = ["YES", "YES BUT IT GREEN"];
let dataOne = [69, 31];
let colorsOne = ["#49A9EA", "#36CAAB"];

let myChart = document.getElementById("myChart").getContext("2d");

let chart = new Chart(myChart, {
  type: "doughnut",
  data: {
    labels: labelsOne,
    datasets: [
      {
        data: dataOne,
        backgroundColor: colorsOne,
      },
    ],
  },

  options: {
    title: {
      text: "Do you like diagram?",
      display: true,
    },
  },
});
