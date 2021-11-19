const trafficChartID = document.getElementById('trafficChart');

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

let trafficOptions = {
    aspectRatio: 2.5,
    maintainAspectRatio: true,
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
        display: false
        }
    },
    responsive: true
};

let trafficChart = new Chart(trafficChartID, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
