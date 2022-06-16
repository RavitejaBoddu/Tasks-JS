const chart = document.getElementById('myChart');
const myChart = new Chart(chart, {
    type: 'radar',
    data: {
        labels: ['Ram', 'Ravi', 'Kiran', 'Teja', 'Krishna', 'Rohith'],
        datasets: [{
            label: '# of Votes',
            data: [1000, 870, 658, 1201, 720, 459],
            // backgroundColor: [
            //     'lightblue'
            // ],
            barThickness: 35,
            borderColor: '#777',
            borderWidth: 1,
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});