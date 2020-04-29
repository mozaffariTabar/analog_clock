setInterval(function () {
    draw()
}, 1000);

draw();

function draw() {
    var date = new Date();

    var second = {
        elem: document.getElementById('second'),
        number: date.getSeconds(),
        deg: 6 * date.getSeconds()
    };

    var minute = {
        elem: document.getElementById('minute'),
        number: date.getMinutes(),
        deg: 6 * date.getMinutes()
    };

    var hour = {
        elem: document.getElementById('hour'),
        number: date.getHours(),
        deg: 30 * (date.getHours() > 12 ? date.getHours() - 12 : date.getHours()) + minute.number * .5
    };

    hour.elem.style.transform = 'rotate(' + hour.deg + 'deg)';
    minute.elem.style.transform = 'rotate(' + minute.deg + 'deg)';
    second.elem.style.transform = 'rotate(' + second.deg + 'deg)';
}