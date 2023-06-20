"use strict";
import data from "./source/data.json" assert { type: "json" };
console.log(data);

const ctx = document.getElementById("myChart");
const days = data.map((obj) => obj["day"]);
const amounts = data.map((obj) => obj["amount"]);
const barColor = amounts.map((num, i, arr) =>
  Math.max(...arr) === num ? "hsl(186, 34%, 60%)" : "#ec775f"
);
console.log(data.reduce((accu, obj) => (accu += obj["amount"]), 0));

new Chart(ctx, {
  type: "bar",
  data: {
    labels: days,
    datasets: [
      {
        label: "",
        data: amounts,
        backgroundColor: barColor,
        hoverBackgroundColor: " rgb(238, 182, 171)",
        borderWidth: 0,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        yAlign: "bottom",
        position: "average",
        callbacks: {
          title: () => "",
        },
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: { display: false },
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  },
});
