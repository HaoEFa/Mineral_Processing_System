function animateData(obj, targer , fangFa) {
    var timer = setInterval(function () {
    var sum = (targer - obj.offsetLeft) / 10;
    // 步数取整，防止出现小数(向上取整)
    sum = sum > 0 ? Math.ceil(sum) : Math.floor(sum);
    // 为什么不可以使用div.style.left = div.style.left + 5 + "px"
    // 因为div.style.left返回的是字符串类型的数据
    if(obj.offsetLeft == targer) {
    clearInterval(timer);     
    fangFa();       
    } 
    obj.style.left = obj.offsetLeft + sum + 'px';
    },5);     
}