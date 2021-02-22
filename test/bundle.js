(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports.add = function(a,b) {
    return a + b;
}
},{}],2:[function(require,module,exports){
var { add }  = require('./add');
var { reduce } = require('./reduce');

document.getElementById('add').onclick =  function () {
    const a = document.getElementsByName('a')[0].value;
    const b = document.getElementsByName('b')[0].value;
    document.getElementById('result').innerHTML = add(a,b);
}


document.getElementById('reduce').onclick =  function () {
    const a = document.getElementsByName('a')[0].value;
    const b = document.getElementsByName('b')[0].value;
    console.log('a val:',a.value);
    document.getElementById('result').innerHTML = reduce(a,b);
}
},{"./add":1,"./reduce":3}],3:[function(require,module,exports){
module.exports.reduce = function(a,b){
    return a-b;
}
},{}]},{},[2]);
