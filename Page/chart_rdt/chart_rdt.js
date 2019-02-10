// const F2 = require('@antv/f2');

// F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
var data = [
  { id: 'Ｇ　Ｆ', name: '郭　峰', 条令条例: 70, 专业理论: 78, 保密法规: 100, 消防技能: 18, 三公里: 742, 蛇形跑: 19.35, 仰卧起坐: 79, 引体向上: 10 },
  { id: 'Ｌ　Ｘ', name: '刘　玄', 条令条例: 81, 专业理论: 80, 保密法规: 87,  消防技能: 14, 三公里: 688, 蛇形跑: 19.09, 仰卧起坐: 70, 引体向上: 13 },
  { id: 'Ｈ　Ｔ', name: '黄　通', 条令条例: 73, 专业理论: 79, 保密法规: 93,  消防技能: 13, 三公里: 749, 蛇形跑: 19.09, 仰卧起坐: 78, 引体向上: 10 },
  { id: 'ＷＺＣ', name: '伍智冲', 条令条例: 67, 专业理论: 70, 保密法规: 98,  消防技能: 6,  三公里: 689, 蛇形跑: 19.00, 仰卧起坐: 62, 引体向上: 12 },
  { id: 'ＬＢＷ', name: '刘勃唯', 条令条例: 78, 专业理论: 74, 保密法规: 93,  消防技能: 6,  三公里: 764, 蛇形跑: 22.02, 仰卧起坐: 75, 引体向上: 3  },
  { id: 'Ｌ　Ｐ', name: '廖　平', 条令条例: 79, 专业理论: 39, 保密法规: 96,  消防技能: 7,  三公里: 789, 蛇形跑: 18.45, 仰卧起坐: 77, 引体向上: 18 },
  { id: 'Ｚ　Ｌ', name: '张　力', 条令条例: 77, 专业理论: 69, 保密法规: 65,  消防技能: 15, 三公里: 770, 蛇形跑: 20.35, 仰卧起坐: 80, 引体向上: 2  },
  { id: 'ＬＬＪ', name: '刘莲杰', 条令条例: 79, 专业理论: 61, 保密法规: 88,  消防技能: 11, 三公里: 959, 蛇形跑: 21.32, 仰卧起坐: 57, 引体向上: 7  },
  { id: 'ＷＪＣ', name: '吴加才', 条令条例: 70, 专业理论: 66, 保密法规: 90,  消防技能: 14, 三公里: 743, 蛇形跑: 19.39, 仰卧起坐: 70, 引体向上: 5  },
  { id: 'ＬＲＹ', name: '李瑞营', 条令条例: 82, 专业理论: 65, 保密法规: 86,  消防技能: 17, 三公里: 737, 蛇形跑: 18.90, 仰卧起坐: 69, 引体向上: 3  },
  { id: 'Ｗ　Ｈ', name: '王　晗', 条令条例: 88, 专业理论: 89, 保密法规: 100, 消防技能: 15, 三公里: 773, 蛇形跑: 20.01, 仰卧起坐: 39, 引体向上: 2  },
  { id: 'ＱＨＨ', name: '钱洪辉', 条令条例: 77, 专业理论: 54, 保密法规: 92,  消防技能: 14, 三公里: 828, 蛇形跑: 21.39, 仰卧起坐: 36, 引体向上: 1  },
  { id: 'Ｈ　Ｄ', name: '胡　栋', 条令条例: 76, 专业理论: 80, 保密法规: 98,  消防技能: 17, 三公里: 711, 蛇形跑: 18.86, 仰卧起坐: 70, 引体向上: 6  },
  { id: 'Ａ　Ｋ', name: '艾　凯', 条令条例: 76, 专业理论: 62, 保密法规: 90,  消防技能: 11, 三公里: 820, 蛇形跑: 20.36, 仰卧起坐: 64, 引体向上: 7  },
  { id: 'ＬＷＪ', name: '李文杰', 条令条例: 92, 专业理论: 82, 保密法规: 93,  消防技能: 10, 三公里: 870, 蛇形跑: 19.96, 仰卧起坐: 72, 引体向上: 5  }
  ];

  var Global = F2.Global;
  var targetId = sessionStorage.getItem('username');
  var targetName;
  var targetObj;
  var targetColor = '#fa940e';
  
  data.forEach(element => {
    if (element.id == targetId) {
      // targetId = element.id;
      targetObj = element;
      return true;
    }
  });

  // 处理数据
  var tempData = new Array();
  let i = 0;
  for (const key in targetObj) {
    if (targetObj.hasOwnProperty(key)) {
      tempData[i] = new Object();
      tempData[i].name = key;
      tempData[i].value = targetObj[key];
      i++;
    }
  }
  tempData.splice(0,2);
  tempData[0].value = ( tempData[0].value - 60 ) / 40;
  tempData[1].value = ( tempData[1].value - 20 ) / 80;
  tempData[2].value = ( tempData[2].value - 60 ) / 40;
  tempData[3].value /= 20;
  tempData[4].value  = ( 960 - tempData[4].value ) / 280;
  tempData[5].value  = ( 23 - tempData[5].value ) / 5;
  tempData[6].value = ( tempData[6].value - 30 ) / 50;
  tempData[7].value /= 20;
  var targetData = new Array();
  targetData[0] = tempData.slice(0,4);
  targetData[1] = tempData.slice(4,8);
  
  // Step 1: 创建 Chart 对象
  var chart = new Array();
  for (let index = 0; index < 2; index++) {
    chart[index] = new F2.Chart({
      id: 'Chart_' + (index + 1) ,
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
  }
  
  for (let index = 0; index < chart.length; index++) {
    const element = chart[index];

    element.source(targetData[index], {
      value: {
        min: 0,
        max: 1
      }
    });

    element.coord('polar');

    element.axis('name', {
      grid: {
        lineDash: null
      }
    });
  
    element.axis('value',  {
      grid: {
        lineDash: null
      },
      label: null,
      linie: null
    });

    element.tooltip({
      onShow(obj) {
        var items = obj.items;
        items[0].name = items[0].title + '能力值';
        items[0].value = (items[0].value * 100).toFixed(0) + '%';
      }
    });

    element.legend(false);

    element.area().position('name*value').color('#E5875B').style({
      fillOpacity: 0.2
    }).animate({
      appear: {
        // animation: 'groupWaveIn'
      }
    });
    element.line().position('name*value').color('#E5875B').size(1).animate({
      appear: {
        // animation: 'groupWaveIn'
      }
    });
    element.point().position('name*value').color('#E5875B').animate({
      appear: {
        delay: 300
      }
    });
  };

  chart[0].render();
  
  function ChangeChart() {
      var element = document.getElementById('chart');
      var index = element.selectedIndex;

      document.getElementsByClassName('selected')[0].classList.remove('selected');
      document.getElementsByClassName('chart-box')[index].classList.add('selected');

      chart[index].render();
  }

  