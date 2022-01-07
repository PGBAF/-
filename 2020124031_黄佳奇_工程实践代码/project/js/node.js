var Nodes = document.querySelector('.nodes');
var myChart = echarts.init(Nodes);
var option;

option = {
  title: {
    text: '时间节点温度变化',
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
    data: ['当天', '当周', '本月', '去年']
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
      data: ['12am', '2am', '4am', '6am', '8am', '10am', '12pm','14pm','16pm','18pm','20pm','22pm']
    } 
  ],
  yAxis: [
    {
       type: 'value',
       axisLabel: {
          formatter: '{value} ℃'
       },
	   }
  ],
  series: [
    {
      name: '当天',
      type: 'line',
      areaStyle: {
		   
	  },
      emphasis: {
        focus: 'series'
      },
            data: [10, 30, 20, 26, 15, 14, 25, 5, 8, 2, 9, 30],
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
	  name: '当周',
	  type: 'line',
	  areaStyle: {},
	  emphasis: {
	    focus: 'series'
	  },
	         data: [20, 12.5, 17.5, 22.5, 30, 28.5, 15.5, 3.5, 17.5, 12.2, 16.5, 14],
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
	  name: '本月',
	  type: 'line',
	  areaStyle: {},
	  emphasis: {
	    focus: 'series'
	  },
	       data: [15, 23, 22, 28, 13, 14, 26, 15, 23, 22, 21, 1],
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
	  name: '去年',
	  type: 'line',
	  areaStyle: {},
	  emphasis: {
	    focus: 'series'
	  },
	        data: [10, 30, 20, 26, 15, 14, 25, 5, 8, 2, 9, 30],
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