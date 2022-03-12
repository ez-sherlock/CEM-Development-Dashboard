const DATA_COUNT = 4;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const data = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
        {
            label: false,
            data: [20, 30, 45, 55, 70, 80, 100],
            borderColor: ['rgba(255, 99, 132, 0.2)'],
            backgroundColor: ['#00B6F0'],
            borderRadius: 10,
        }
    ]
};
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 125,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 25
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }

    },
};

const ctx = document.getElementById('barChart').getContext('2d');
new Chart(ctx, config);



// Polar Chart

// var polarData = {
//     datasets: [{
//         data: [52.8, 89.8, 9.8, 45.8,],

//         backgroundColor: [
//             "#000000",
//             "#3B5998",
//             "#a6b1b7",
//             "#1da1f2",
//             "#bd081c"
//         ],
//         label: 'My dataset', // for legend
//     }],
//     labels: [
//         "Blog",
//         "Facebook",
//         "Instagram",
//         "Twitter",
//         "Pinterest"
//     ],
// };
// const plotPolarData = document.getElementById('polarChart').getContext('2d');
// new Chart(plotPolarData, {
//     data: polarData,
//     type: 'polarArea',
//     options: {
//         legend: {
//             display: false,
//         },
//         scale: {
//             display: false
//         },
//         plugins: {
//             legend: {
//                 display: false
//             }
//         }
//     }
// });



// Line Chart

const lineChartData = {
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
        {
            label: 'Dataset',
            data: [15, 24, 49, 45, 69, 73, 99],
            borderColor: ['#22C83B'],
            backgroundColor: ['#1C9C2F'],
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15
        }
    ]
};

const lineChartConfig = {
    type: 'line',
    data: lineChartData,
    options: {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 125,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 25
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

const plotLineChart = document.getElementById('lineChart').getContext('2d');
new Chart(plotLineChart, lineChartConfig)


// Horizental Bar Chart

const horzBarChartData = {
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
        {
            label: 'Dataset',
            data: [15, 24, 49, 45, 69, 73, 99],
            borderColor: ['#0086B0'],
            backgroundColor: ['#0086B0'],
            borderRadius: 5,
        }
    ]
};

const horzBarChartConfig = {
    type: 'bar',
    data: horzBarChartData,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        scales: {
            x: {
                min: 0,
                max: 125,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 25
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart'
            }
        }
    },
};
const plotHorzBarChart = document.getElementById('horzBarChart').getContext('2d');
new Chart(plotHorzBarChart, horzBarChartConfig)