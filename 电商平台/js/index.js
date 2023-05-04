window.addEventListener('load', function() {
    // 移动鼠标，隐藏显示左右按钮图标
    //    获取左右元素
    var leftbottom = this.document.querySelector('.leftbottom');
    var rightbottom = this.document.querySelector('.rightbottom');
    var lunbo = this.document.querySelector('.lunbo');
    // 统计小圆点是否被点击
    var content = 0;
    // 1.克隆第一张图片
    var first = lunbo.children[0].cloneNode(true);
    lunbo.appendChild(first);
    lunbo.addEventListener('mouseenter', function() {
        leftbottom.style.display = 'inline-block';
        rightbottom.style.display = 'inline-block';
        // 鼠标经过时必须要停止计时器
        clearInterval(timer);
        // 必须要清除计时器变量
        timer = null; 
    });
    lunbo.addEventListener('mouseout', function() {
        leftbottom.addEventListener('mousemove', function() {
            leftbottom.style.display = 'inline-block';
            rightbottom.style.display = 'inline-block';
            clearInterval(timer);
        // 必须要清除计时器变量
        timer = null; 
        });
        rightbottom.addEventListener('mousemove', function() {
            leftbottom.style.display = 'inline-block';
            rightbottom.style.display = 'inline-block';
            clearInterval(timer);
        // 必须要清除计时器变量
        timer = null; 
        });
        leftbottom.style.display = 'none';
        rightbottom.style.display = 'none';
        // 此时调用不需要在声明var
        timer = setInterval(function() {
            // 调用点击事件
           rightbottom.click();
        }, 2000);
    });
    // 自动获取图片的个数对应生成li标签
    // 1.首先要获取图片的个数，他一定是某个元素的子节点，因为一节点全部以伪元素的形式存储，通过length获取
    // 2.多个生成一定会用到for循环，首先创建节点（var li = this.document.createElement('li')使用容器存储
    // 3.添加节点-指定的地点，为第一个class命名
    var indicator = this.document.querySelector('.indicator');
    for(var i = 0; i < lunbo.children.length; i++) {
        var li = this.document.createElement('li');
        li.setAttribute('index', i);
        indicator.insertBefore(li, indicator.children[i]);
        // 为什么要在括号内部？
        // 经过尝试，括号外只有第一个可以点击，分析是括号外只可以定位到第一个li
        // 为什么不可以使用li.className?
        // 不通过for循环加子节点的删去方式，无法确定删去哪一个标签   
        // 排他思想：先全部删去，在通过点击添加
        indicator.children[0].className = 'active';
        li.addEventListener('click', function() {
            for(var i = 0; i < lunbo.children.length; i++) {
                indicator.children[i].className = '';
            }      
            this.className = 'active';
            // 获取第几个图标位置
            var index = parseInt(this.getAttribute('index'));
            var sum = index;
            content = 1;
            leftbottom.addEventListener('click', function() {
                if(sum >= 0) {
                    sum--;
                    // console.log(sum);
                    if(sum >= 0) {
                        animateData(lunbo, lunbo.children[0].offsetWidth * (-1) * sum);
                        // lunbo.style.left = lunbo.children[0].offsetWidth * (-1) * sum + 'px';
                        for(var i = 0; i < lunbo.children.length - 1; i++) {
                            indicator.children[i].className = '';
                        }
                        indicator.children[sum].className = 'active';
                    }   else if(sum == -1) {
                        lunbo.style.left =  lunbo.children[0].offsetWidth * (-1) * (lunbo.children.length - 2) + 'px';
                        sum = lunbo.children.length - 2;
                        for(var i = 0; i < lunbo.children.length - 1; i++) {
                            indicator.children[i].className = '';
                        }
                        indicator.children[lunbo.children.length - 2].className = 'active';
                    }
                    
                 }
            });
            rightbottom.addEventListener('click', function() {
                // console.log(content);
                if(sum < lunbo.children.length - 1) {
                    sum++;
                    // console.log(sum);
                    if(sum < lunbo.children.length - 1) {
                        animateData(lunbo, lunbo.children[0].offsetWidth * (-1) * sum);
                        // lunbo.style.left = lunbo.children[0].offsetWidth * (-1) * sum + 'px';
                        for(var i = 0; i < lunbo.children.length - 1; i++) {
                            indicator.children[i].className = '';
                        }
                        indicator.children[sum].className = 'active';
                    }
                    else if(sum == lunbo.children.length - 1) {
                       lunbo.style.left = 0 + 'px';
                       sum = 0;
                       for(var i = 0; i < lunbo.children.length - 1; i++) {
                       indicator.children[i].className = '';
                       }
                       indicator.children[0].className = 'active';
                    }   
                 }
            });
            var x = index * lunbo.children[0].offsetWidth * (-1);
            animateData(lunbo, x);
            // lunbo.style.left = x + 'px'; 
            // animateData();
            // 移动距离 = 第几个图标 * 图片距离
            // 如何确定点击的是第几个按钮？
            // 设置自定义属性index
            // 如何设置？
            // setAttribute(建立属性)
            // 如何获取？
            // li.getAttribute('index'),
            // var x = lunbo.children[0].offsetWidth * (-1) * ();
            // animateData(lunbo,-lunbo.children[0].offsetWidth);
            });
    }    
    //  3.点击左右按钮切换图片
        indicator.children[indicator.children.length - 1].style.display = 'none';
        // console.log(lunbo.children.length);
    //  隐藏最后一个小原点
        var sum = 0;
    //  sum关键参数，图片切换，与小圆点切换指示器 
    leftbottom.addEventListener('click', function() {
        if(content == 0) {
            if(sum >= 0) {
                sum--;
                // console.log(sum);
                if(sum >= 0) {
                    animateData(lunbo, lunbo.children[0].offsetWidth * (-1) * sum);
                    // lunbo.style.left = lunbo.children[0].offsetWidth * (-1) * sum + 'px';
                    for(var i = 0; i < lunbo.children.length - 1; i++) {
                        indicator.children[i].className = '';
                    }
                    indicator.children[sum].className = 'active';
                }   else if(sum == -1) {
                    lunbo.style.left =  lunbo.children[0].offsetWidth * (-1) * (lunbo.children.length - 2) + 'px';
                    sum = lunbo.children.length - 2;
                    for(var i = 0; i < lunbo.children.length - 1; i++) {
                        indicator.children[i].className = '';
                    }
                    indicator.children[lunbo.children.length - 2].className = 'active';
                }
             }
        }
    });
            rightbottom.addEventListener('click', function() {
                // console.log(content);
                if(content == 0) {
                    // console.log(content);
                    if(sum < lunbo.children.length) {
                        sum++;
                       if(sum == lunbo.children.length - 1) {
                          for(var i = 0; i < lunbo.children.length - 1; i++) {
                              indicator.children[i].className = '';
                          }
                          // 突然跳转到第一个原点，需要将sum变化为零   
                          sum = 0;
                          //   当跳转到第一个原点，需要把原点设置为选中状态
                          indicator.children[0].className = 'active';
                          animateData(lunbo, 0);
                        //   lunbo.style.left = 0 + 'px';
                       }  else {
                            //  console.log('sum的值' + sum);
                             animateData(lunbo, lunbo.children[0].offsetWidth * (-1) * (sum));
                        //    lunbo.style.left = lunbo.children[0].offsetWidth * (-1) * sum + 'px';
                          for(var i = 0; i < lunbo.children.length - 1; i++) {
                             indicator.children[i].className = '';
                          }
                             indicator.children[sum].className = 'active';
                       }  
                    }
                }
            }); 
        var timer = setInterval(function() {
            // 调用点击事件
           rightbottom.click();
        }, 2000);
}); 