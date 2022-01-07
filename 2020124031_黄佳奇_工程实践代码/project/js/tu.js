var wChange = document.querySelector('.wchange');
var myChart = echarts.init(wChange);
var option;

option = {
  title: {
    text: '温度增减数据统计',
	subtext: '(摄氏度)',
	padding:[
		10,
		0,
		0,
		20,
	]
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['昨天', '今天', '明天']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
 
  xAxis: {
    type: 'category',
    data: [
      '12-1',
      '12-2',
      '12-3',
      '12-4',
      '12-5',
      '12-6',
      '12-7',
      '12-8',
      '12-9',
      '12-10',
      '12-11',
      '12-12'
    ]
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} ℃'
    }
  },
  series: [
    {
      name: '昨天',
      type: 'line',
      data: [20, 12.5, 17.5, 22.5, 30, 28.5, 15.5, 3.5, 17.5, 12.2, 16.5, 14],
      smooth: true
    },
    {
      name: '今天',
      type: 'line',
      data: [10, 30, 20, 26, 15, 14, 25, 5, 8, 2, 9, 30],
      smooth: true
    },
    {
      name: '明天',
      type: 'line',
      data: [15, 23, 22, 28, 13, 14, 26, 15, 23, 22, 21, 1],
      smooth: true,
	  markPoint:{
		  data:[
			  {
				  type:"max"
			  }
		  ],
		  symbol:"circle",
		  symbolSize:20
	  }
    }
  ]
};

option && myChart.setOption(option);
