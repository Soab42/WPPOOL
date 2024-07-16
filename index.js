// chart.js

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
function generateDataArray(startDate, days) {
  const dataArray = [];
  const currentDate = new Date(startDate);

  for (let i = 0; i < days; i++) {
    let value = Math.floor(Math.random() * 100); // Generate random y value (adjust as needed)
    dataArray.push({ x: formatDate(currentDate), y: value });

    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return dataArray;
}

// Example usage:
const startDate = new Date(); // Use current date as start date
startDate.setMonth(startDate.getMonth() - 6); // 6 months ago
const days = 180; // Number of days to generate data for

const company = [
  {
    name: "Wppool",
    value: 66.2,
    color: "#FC714D",
    data: generateDataArray(startDate, days),
  },
  {
    name: "Google",
    value: 26.6,
    color: "#615DE3",
    data: generateDataArray(startDate, days),
  },
  {
    name: "Microsoft",
    value: 34.1,
    color: "#7CA63A",
    data: generateDataArray(startDate, days),
  },
  {
    name: "Twitter",
    value: 17,
    color: "#6F34A1",
    data: generateDataArray(startDate, days),
  },
];

//
company.forEach((element) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="company-card flex justify-center items-center  bg-gray-200 p-2 rounded w-full">
                          <h1 class="text-5xl w-48 font-bold text-[${element.color}] font-[var(--nantes)]">${element.value}%</h1>
                          <p class="font-[var(--messina)] w-20">${element.name} Index</p>
                          <span class="w-2 h-10" style="background: ${element.color}"></span>
                      </div>`;
  document.getElementById("company").appendChild(card);
});
console.log(company);
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
  data: {
    // labels: [
    //   "jan",
    //   "feb",
    //   "mar",
    //   "apr",
    //   "may",
    //   "jun",
    //   "jul",
    //   "aug",
    //   "sep",
    //   "oct",
    //   "nov",
    //   "dec",
    // ],
    datasets: company.map((comp, index) => ({
      label: comp.name,
      data: comp.data,
      borderWidth: 1,
      borderColor: comp.color,
      backgroundColor: comp.color,
      pointRadius: 0, // Remove points from the line
      // hoverRadius: 0, // Remove hover points as well
    })),
  },
  options: {
    responsive: true,
    animation: {
      duration: 1000, // Customize animation duration if needed
      easing: "easeOutBounce", // Customize easing effect if needed
    },
    scales: {
      x: {
        // type: "time",
        time: {
          unit: "month",
          // stepSize: 2,
          displayFormats: {
            month: "MMM",
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          source: "auto",
          autoSkip: true,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + "%"; // Append '%' to y-axis values
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.parsed.y + "%";
          },
        },
      },
    },
    interaction: {
      mode: "index",
      intersect: true,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
  },
});

//   accordion script
document.querySelectorAll(".accordion-header").forEach((item) => {
  item.addEventListener("click", (event) => {
    const accordionItem = event.target.parentElement;

    // Close all other accordion items
    document.querySelectorAll(".accordion-item").forEach((el) => {
      if (el !== accordionItem) {
        el.classList.remove("active");
        const content = el.querySelector(".text-xl");
        if (content) {
          content.innerText = "+";
        }
      }
    });

    // Toggle the clicked accordion item
    accordionItem.classList.toggle("active");

    // Change child span text
    const accordionContent = accordionItem.querySelector(".text-xl");
    if (accordionItem.classList.contains("active")) {
      accordionContent.innerText = "-";
    } else {
      accordionContent.innerText = "+";
    }
  });
});
// chart script
const radioButtons = document.querySelectorAll(".radioItem");

radioButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.target;
    if (clickedButton.classList.contains("active")) {
      clickedButton.classList.remove("active");
    } else {
      radioButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      clickedButton.classList.add("active");
    }
  });
});

const companyData = [
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
  {
    name: "Company A",
    ticker: "CMA",
    vertical: "Technology",
    price: 150.25,
    marketCap: 200.5,
    revenueGrowth: "15%",
    grossMargin: "60%",
    evRevenue: 10,
    ytdPerformance: "20%",
  },
  {
    name: "Company B",
    ticker: "CMB",
    vertical: "Healthcare",
    price: 75.5,
    marketCap: 50.2,
    revenueGrowth: "10%",
    grossMargin: "55%",
    evRevenue: 8,
    ytdPerformance: "15%",
  },
  {
    name: "Company C",
    ticker: "CMC",
    vertical: "Finance",
    price: 120.0,
    marketCap: 150.3,
    revenueGrowth: "12%",
    grossMargin: "50%",
    evRevenue: 9,
    ytdPerformance: "18%",
  },
];

document.getElementById("CompanyTableBody").innerHTML = companyData
  .map((item) => {
    return `
          <tr class="even:bg-gray-200 ">
            <td class="text-left p-2">${item.name}</td>
            <td class="text-left">${item.ticker}</td>
            <td class="text-left">${item.vertical}</td>
            <td class="text-left">${item.price}</td>
            <td class="text-left">${item.marketCap}</td>
            <td class="text-left">${item.revenueGrowth}</td>
            <td class="text-left">${item.grossMargin}</td>
            <td class="text-left">${item.evRevenue}</td>
            <td class="text-left">${item.ytdPerformance}</td>
          </tr>
          `;
  })
  .join("");
