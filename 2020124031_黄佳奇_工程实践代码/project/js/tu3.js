var eNode = document.querySelector('.schange');
var myChart = echarts.init(eNode);
var option;

option = {
  title: {
    text: '光强增减数据统计',
	padding:[
		10,
		0,
		0,
		20,
	]
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['天', '周', '月']
  },
 
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '00:00']
    } 
  ],
  yAxis: [
    {
       type: 'value',
       axisLabel: {
          formatter: '{value} '
       },
	   }
  ],
  series: [
    {
      name: '天',
      type: 'line',
      areaStyle: {
		   
	  },
      emphasis: {
        focus: 'series'
      },
            data: [10, 30, 20, 26, 15, 14, 25],
      smooth:true,
	  markPoint:{
	  		  data:[
	  			  {
	  				  type:"max"
	  			  }
	  		  ],
	  		  symbol:"circle",
	  		  symbolSize:20
	  }
    },
	
	{
	  name: '周',
	  type: 'line',
	  areaStyle: {},
	  emphasis: {
	    focus: 'series'
	  },
	         data: [20, 12.5, 17.5, 22.5, 30, 28.5, 15.5],
	  smooth:true,
	  markPoint:{
	  		  data:[
	  			  {
	  				  type:"max"
	  			  }
	  		  ],
	  		  symbol:"circle",
	  		  symbolSize:20
	  }
	},
	
	{
	  name: '月',
	  type: 'line',
	  areaStyle: {},
	  emphasis: {
	    focus: 'series'
	  },
	       data: [15, 23, 22, 28, 13, 14, 26],
	  smooth:true,
	  markPoint:{
	  		  data:[
	  			  {
	  				  type:"max"
	  			  }
	  		  ],
	  		  symbol:"circle",
	  		  symbolSize:20
	  }
	},
	
	


  ]
};

option && myChart.setOption(option);