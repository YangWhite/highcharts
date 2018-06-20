
// THE CHART
Highcharts.ganttChart('container', {
    title: {
        text: 'Gantt Chart with Progress Indicators'
    },
    xAxis: {
        min: Date.UTC(2014, 10, 17),
        max: Date.UTC(2014, 10, 30)
    },

    series: [{
        name: 'Project 1',
        data: [{
            taskName: 'Start prototype',
            start: Date.UTC(2014, 10, 18),
            end: Date.UTC(2014, 10, 25),
            completed: 0.25
        }, {
            taskName: 'Test prototype',
            start: Date.UTC(2014, 10, 27),
            end: Date.UTC(2014, 10, 29)
        }, {
            taskName: 'Develop',
            start: Date.UTC(2014, 10, 20),
            end: Date.UTC(2014, 10, 25),
            completed: {
                amount: 0.12,
                fill: '#fa0'
            }
        }, {
            taskName: 'Run acceptance tests',
            start: Date.UTC(2014, 10, 23),
            end: Date.UTC(2014, 10, 26)
        }]
    }]
});