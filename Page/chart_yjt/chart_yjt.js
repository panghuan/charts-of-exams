// const F2 = require('@antv/f2');

// F2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
var data = [
    { id: 'Ｇ　Ｆ', name: '郭　峰', 条令条例: 13, 专业理论:  6, 保密法规:  1, 消防技能:  1, 三公里:  5, 蛇形跑:  7, 仰卧起坐:  2, 引体向上:  4 },
    { id: 'Ｌ　Ｘ', name: '刘　玄', 条令条例:  4, 专业理论:  3, 保密法规: 13, 消防技能:  6, 三公里:  1, 蛇形跑:  5, 仰卧起坐:  7, 引体向上:  2 },
    { id: 'Ｈ　Ｔ', name: '黄　通', 条令条例: 12, 专业理论:  5, 保密法规:  6, 消防技能:  9, 三公里:  7, 蛇形跑:  5, 仰卧起坐:  3, 引体向上:  4 },
    { id: 'ＷＺＣ', name: '伍智冲', 条令条例: 15, 专业理论:  8, 保密法规:  3, 消防技能: 14, 三公里:  2, 蛇形跑:  4, 仰卧起坐: 12, 引体向上:  3 },
    { id: 'ＬＢＷ', name: '刘勃唯', 条令条例:  7, 专业理论:  7, 保密法规:  6, 消防技能: 14, 三公里:  8, 蛇形跑: 15, 仰卧起坐:  5, 引体向上: 11 },
    { id: 'Ｌ　Ｐ', name: '廖　平', 条令条例:  5, 专业理论: 15, 保密法规:  5, 消防技能: 13, 三公里: 11, 蛇形跑:  1, 仰卧起坐:  4, 引体向上:  1 },
    { id: 'Ｚ　Ｌ', name: '张　力', 条令条例:  8, 专业理论:  9, 保密法规: 15, 消防技能:  4, 三公里:  9, 蛇形跑: 11, 仰卧起坐:  1, 引体向上: 13 },
    { id: 'ＬＬＪ', name: '刘莲杰', 条令条例:  5, 专业理论: 13, 保密法规: 12, 消防技能: 10, 三公里: 15, 蛇形跑: 13, 仰卧起坐: 13, 引体向上:  6 },
    { id: 'ＷＪＣ', name: '吴加才', 条令条例: 13, 专业理论: 10, 保密法规: 10, 消防技能:  6, 三公里:  6, 蛇形跑:  8, 仰卧起坐:  7, 引体向上:  9 },
    { id: 'ＬＲＹ', name: '李瑞营', 条令条例:  3, 专业理论: 11, 保密法规: 14, 消防技能:  2, 三公里:  4, 蛇形跑:  3, 仰卧起坐: 10, 引体向上: 11 },
    { id: 'Ｗ　Ｈ', name: '王　晗', 条令条例:  2, 专业理论:  2, 保密法规:  1, 消防技能:  4, 三公里: 10, 蛇形跑: 10, 仰卧起坐: 14, 引体向上: 13 },
    { id: 'ＱＨＨ', name: '钱洪辉', 条令条例:  8, 专业理论: 14, 保密法规:  9, 消防技能:  6, 三公里: 13, 蛇形跑: 14, 仰卧起坐: 15, 引体向上: 15 },
    { id: 'Ｈ　Ｄ', name: '胡　栋',  条令条例: 10, 专业理论:  3, 保密法规:  3, 消防技能:  2, 三公里:  3, 蛇形跑:  2, 仰卧起坐:  7, 引体向上:  8 },
    { id: 'Ａ　Ｋ', name: '艾　凯',  条令条例: 10, 专业理论: 12, 保密法规: 10, 消防技能: 10, 三公里: 12, 蛇形跑: 12, 仰卧起坐: 11, 引体向上:  6 },
    { id: 'ＬＷＪ', name: '李文杰', 条令条例:  1, 专业理论:  1, 保密法规:  6, 消防技能: 12, 三公里: 14, 蛇形跑:  9, 仰卧起坐:  6, 引体向上:  9 }
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
      tempData[i].value = 16 - targetObj[key];
      i++;
    }
  }
  tempData.splice(0,2);
  var targetData = new Array();
  targetData[0] = tempData.slice(0,4);
  targetData[1] = tempData.slice(4,8);

  const defs = {
    value : {
      min: 1,
      max: 15
    }
  };
  
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

    element.source(targetData[index], defs);

    element.coord('polar', {
      transposed: true,
      startAngle: Math.PI / 2,
      endAngle: 2 * Math.PI,
      // innerRadiius: 0.7
    });

    element.axis('name', {
      grid: {
        lineDash: null,
        type: 'arc'
      },
      line: null,
      label: {
        fontSize: 12,
        // fontWeight: 'bold',
        fill: '#E5875B'
      }
    });
  
    element.axis('value',  false);

    targetData[index].map(function (obj) {
      element.guide().text({
        position: [obj.name, obj.value],
        content: (obj.value / 15 * 100).toFixed(0) + '%',
        offsetX: -10,
        offsetY: -10
      })
    })

    element.legend(false);

    element.tooltip({
      onShow(obj) {
        var items = obj.items;
        items[0].name = items[0].title + '排名';
        items[0].value = 16 - items[0].value;
      }
    });

    element.animate({
        interval: {
            appear: {
                duration: 1000
            }
        }
    });

    element.interval().position('name*value').color('#E5875B').size(10);
  };

  chart[0].render();
  
  function ChangeChart() {
      var element = document.getElementById('chart');
      var index = element.selectedIndex;

      document.getElementsByClassName('selected')[0].classList.remove('selected');
      document.getElementsByClassName('chart-box')[index].classList.add('selected');

      chart[index].render();
  }

  