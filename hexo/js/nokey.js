(function () {
var re = /x/;
var i = 0;
console.log(re);
  
re.toString = function () {
alert("请关闭控制台");
return '第 ' + (++i) + ' 次打开控制台';
};
})();

setInterval(function() {
  check()
}, 4000);
var check = function() {
  function doCheck(a) {
    if (("" + a/a)["length"] !== 1 || a % 20 === 0) {
      (function() {}
      ["constructor"]("debugger")())
    } else {
      (function() {}
      ["constructor"]("debugger")())
    }
    doCheck(++a)
  } 
  try {
    doCheck(0)
  } catch (err) {}
};
check();

document.onkeydown = function(){
  if(window.event && window.event.keyCode == 123) {
    alert("不能打开控制台喔!");
    event.keyCode=0;
    event.returnValue=false;
  }
  if(window.event && window.event.keyCode == 13) {
    window.event.keyCode = 505;
  }
}
document.oncontextmenu = function (event){
if(window.event){
event = window.event;
}try{
var the = event.srcElement;
if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
return false;
}
return true;
}catch (e){
return false;
}
}

