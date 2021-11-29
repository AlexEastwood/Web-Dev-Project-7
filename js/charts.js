const trafficChartID = document.getElementById('trafficChart');
const dailyTrafficChartID = document.getElementById('dailyTrafficChart');
const mobileUsersChartID = document.getElementById('mobileUsersChart');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500], 
        backgroundColor: 'rgb(116,119,191,.3)',
        borderWidth: 1,
        tension: 0.5,
        fill: true,
    }]
};

let dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        data: [75, 110, 175, 125, 225, 200, 100],
        backgroundColor: "rgb(116,119,191)"
    }]
}

let mobileUsersData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        data: [60, 21, 19],
        backgroundColor: [
            "rgba(116,119,191,255)",
            "rgba(129,201,143,255)",
            "rgba(81,182,200,255)"
        ],
        borderWidth: 0,
}]
};

let trafficChart = new Chart(trafficChartID, {
    type: 'line',
    data: trafficData,
    options: {
        responsive: true,
        aspectRatio: 2.5,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
            display: false
            }
        }
    }
});

let dailyTrafficChart = new Chart(dailyTrafficChartID, {
    type: 'bar',
    data: dailyTrafficData,
    options: {
        aspectRatio: 2,
        plugins: {
            legend: {
            display: false
            }
        }
    }
});

let mobileUsersChart = new Chart(mobileUsersChartID, {
    type: 'doughnut',
    data: mobileUsersData,
    options: {
        aspectRatio: 2,
        plugins: {
            legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                }
            }
        }
    }
});