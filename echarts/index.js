// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('main'));

// specify chart configuration item and data
var option = {
    title: {
        text: 'ECharts entry example'
    },
    tooltip: {},
    legend: {
        data: ['Sales']
    },
    xAxis: {
        data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
    },
    yAxis: {},
    series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};


const optionsLines = {
    title: { text: 'Line Chart' },
    tooltip: {},
    toolbox: {
        feature: {
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            },
            restore: {}
        }
    },
    xAxis: {},
    yAxis: {},
    series: [{
        type: 'line',
        smooth: true,
        data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
    }]
};
// use configuration item and data specified to show chart
myChart.setOption(option);
myChart.on('finished', () => {
    // return;
    // if (myChart.getOption().title[0].text === "Line Chart") {
    //     return;
    // }
    try {

        if (myChart.getOption().series[0].data.length === 3) {
            // myChart.setOption(optionsLines);
            myChart.dispose()
            myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(optionsLines);
            return;
        }
        // Create a pie chart:
        myChart.setOption({
            series: {
                type: 'pie',
                data: [
                    { name: 'A', value: 1212 },
                    { name: 'B', value: 2323 },
                    { name: 'C', value: 1919 }
                ]
            }
        });
    } catch (e) {
        setTimeout(() => {

        }, 500)
    } finally {

    }
});