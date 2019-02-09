// const F2 = require('@antv/f2');

// F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
var data = [
    { id: 'Ｇ　Ｆ', name: '郭　峰', tltl: 70, zyll: 78, bmfg: 100, xfjn: 18, three_km: 742, sxp: 19.35, ywqz: 79, ytxs: 10 },
    { id: 'Ｌ　Ｘ', name: '刘　玄', tltl: 81, zyll: 80, bmfg: 87,  xfjn: 14, three_km: 688, sxp: 19.09, ywqz: 70, ytxs: 13 },
    { id: 'Ｈ　Ｔ', name: '黄　通', tltl: 73, zyll: 79, bmfg: 93,  xfjn: 13, three_km: 749, sxp: 19.09, ywqz: 78, ytxs: 10 },
    { id: 'ＷＺＣ', name: '伍智冲', tltl: 67, zyll: 70, bmfg: 98,  xfjn: 6,  three_km: 689, sxp: 19.00, ywqz: 62, ytxs: 12 },
    { id: 'ＬＢＷ', name: '刘勃唯', tltl: 78, zyll: 74, bmfg: 93,  xfjn: 6,  three_km: 764, sxp: 22.02, ywqz: 75, ytxs: 3  },
    { id: 'Ｌ　Ｐ', name: '廖　平', tltl: 79, zyll: 39, bmfg: 96,  xfjn: 7,  three_km: 789, sxp: 18.45, ywqz: 77, ytxs: 18 },
    { id: 'Ｚ　Ｌ', name: '张　力', tltl: 77, zyll: 69, bmfg: 65,  xfjn: 15, three_km: 770, sxp: 20.35, ywqz: 80, ytxs: 2  },
    { id: 'ＬＬＪ', name: '刘莲杰', tltl: 79, zyll: 61, bmfg: 88,  xfjn: 11, three_km: 959, sxp: 21.32, ywqz: 57, ytxs: 7  },
    { id: 'ＷＺＣ', name: '吴加才', tltl: 70, zyll: 66, bmfg: 90,  xfjn: 14, three_km: 743, sxp: 19.39, ywqz: 70, ytxs: 5  },
    { id: 'ＬＲＹ', name: '李瑞营', tltl: 82, zyll: 65, bmfg: 86,  xfjn: 17, three_km: 737, sxp: 18.90, ywqz: 69, ytxs: 3  },
    { id: 'Ｗ　Ｈ', name: '王　晗', tltl: 88, zyll: 89, bmfg: 100, xfjn: 15, three_km: 773, sxp: 20.01, ywqz: 39, ytxs: 2  },
    { id: 'ＱＨＨ', name: '钱洪辉', tltl: 77, zyll: 54, bmfg: 92,  xfjn: 14, three_km: 828, sxp: 21.39, ywqz: 36, ytxs: 1  },
    { id: 'Ｈ　Ｄ', name: '胡　栋', tltl: 76, zyll: 80, bmfg: 98,  xfjn: 17, three_km: 711, sxp: 18.86, ywqz: 70, ytxs: 6  },
    { id: 'Ａ　Ｋ', name: '艾　凯', tltl: 76, zyll: 62, bmfg: 90,  xfjn: 11, three_km: 820, sxp: 20.36, ywqz: 64, ytxs: 7  },
    { id: 'ＬＷＪ', name: '李文杰', tltl: 92, zyll: 82, bmfg: 93,  xfjn: 10, three_km: 870, sxp: 19.96, ywqz: 72, ytxs: 5  }
  ];

var average = [ 77.7, 70.5, 91.3, 12.5, 185, 3.16, 66.5, 6.9 ];

  // 处理数据
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    element.three_kmz = 960 - element.three_km;
    element.sxpz = 23 - element.sxp;
  }

  const defs = {
    tltl: {
      min: 60, // 手动指定最小值
      max: 100, // 手动指定最大值
      alias: '条令条例'
    },
    zyll: {
      min: 20,
      max: 100,
      alias: '专业理论'
    },
    bmfg: {
      min: 60,
      max: 100,
      alias: '保密法规'
    },
    xfjn: {
      min: 0,
      max: 20,
      alias: '消防技能'
    },
    three_kmz: {
      min: 0,
      max: 280,
      alias: '三公里'
    },
    sxpz: {
      min: 0,
      max: 5,
      alias: '蛇形跑'
    },
    ywqz: {
      min: 30,
      max: 80,
      alias: '仰卧起坐'
    },
    ytxs: {
      min: 0,
      max: 20,
      alias: '引体向上'
    },
  };

  var Global = F2.Global;
  var targetId = sessionStorage.getItem('username');
  var targetName;
  var targetColor = '#fa940e';

  // data.forEach(element => {
  //   if (element.name == targetName) {
  //     return targetId = element.id;
  //   }
  // });
  
  // Step 1: 创建 Chart 对象
  var chart = new Array();
  for (let index = 0; index < 8; index++) {
    chart[index] = new F2.Chart({
      id: 'Chart_' + (index + 1) ,
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
  }
  
  var key  = ['tltl', 'zyll', 'bmfg', 'xfjn', 'three_kmz', 'sxpz', 'ywqz', 'ytxs']

  for (let index = 0; index < chart.length; index++) {
    const element = chart[index];

    element.source(data, defs);

    element.axis('name', {
      line: Global._defaultAxis.line,
      grid: null,
      label: name => {
        if( name == targetName) {
          return { fill : targetColor };
        }
        return { fill : '#999' };
      }
    });
  
    element.axis(key[index],  {
      line: null,
      grid: Global._defaultAxis.grid
    });
    if (index == 4) {
      element.axis(key[index], {
        grid: Global._defaultAxis.grid,
        label: text => {
          var min = parseInt((960 - text) / 60);
          var sec = (960 - text) % 60;
          var value = min + '\'' + sec + '\"';
          return {text: value};
        }
      });
    }
    if (index == 5) {
      element.axis(key[index], {
        grid: Global._defaultAxis.grid,
        label: text => {
          var sec = parseInt(23 - text);
          var msec = parseInt((23 - text) * 100 % 100);
          var value = sec + '\'' + msec;
          return {text: value};
        }
      });
    }
      
    element.coord({ transposed: true });
    element.legend(false);
    element.tooltip(false);

    element.guide().line({
      start: [ 'min', average[index] ],
      end: [ 'max', average[index] ],
      style: {
        stroke: '#d0502d',
        lineWidth: 2,
        lineCap: 'round'
      }
    });
    element.guide().tag({
      position: ['max', average[index] ],
      content: '平均值：' +  average[index],
      offsetY: -3,
      direct: 'tc',
      withPoint: false,
      background: {
        padding: [4, 6],
        radius: 2,
        fill: '#d0502d'
      }
    });
    if( index == 4 ) {
      element.guide().tag({
        content: '平均值：' + parseInt((960 - average[index]) / 60) + '\'' + (960 - average[index]) % 60 + '\"',
        position: ['max', average[index] ],
        offsetY: -3,
        direct: 'tc',
        withPoint: false,
        background: {
          padding: [4, 6],
          radius: 2,
          fill: '#d0502d'
        }
      });
    }
    if( index == 5 ) {
      element.guide().tag({
        content: '平均值：' + parseInt(23 - average[index]) + '\'' + parseInt((23 - average[index]) * 100 % 100),
        position: ['max', average[index] ],
        offsetY: -3,
        direct: 'tc',
        withPoint: false,
        background: {
          padding: [4, 6],
          radius: 2,
          fill: '#d0502d'
        }
      });
    }

    element.animate({
        interval: {
            appear: {
                animation: 'groupScaleInX',
                duration: 1000
            }
        }
    });

    element.interval().position('id*' + key[index]).color('id', id => {
      if( id == targetId) {
        return targetColor;
      }
      return '#ccc';
    }).size(5);
  };

  chart[0].render();
  
  function ChangeChart() {
      var element = document.getElementById('chart');
      var index = element.selectedIndex;

      document.getElementsByClassName('selected')[0].classList.remove('selected');
      document.getElementsByClassName('chart-box')[index].classList.add('selected');

      chart[index].render();
  }

  