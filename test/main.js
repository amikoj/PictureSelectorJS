var { add }  = require('./add');
var { reduce } = require('./reduce');

// 加法
document.getElementById('add').onclick =  function () {
    const a = document.getElementsByName('a')[0].value;
    const b = document.getElementsByName('b')[0].value;
    document.getElementById('result').innerHTML = add(a,b);
}

// 减法
document.getElementById('reduce').onclick =  function () {
    const a = document.getElementsByName('a')[0].value;
    const b = document.getElementsByName('b')[0].value;
    document.getElementById('result').innerHTML = reduce(a,b);
}