setInterval(function() {
  check();
}, 2000);
var check = function() {
  function doCheck(a) {
    if (('' + a / a)['length'] !== 1 || a % 20 === 0) {
      (function() {}['constructor']('debugger')());
    } else {
      (function() {}['constructor']('debugger')());
    }
    doCheck(++a);
  }
  try {
    doCheck(0);
  } catch (err) {}
};
check();

var threshold = 160; // 打开控制台的宽或高阈值
// 每秒检查一次
setInterval(function() {
	if (window.outerWidth - window.innerWidth > threshold || 
	window.outerHeight - window.innerHeight > threshold) {
		// 如果打开控制台，则关闭控制台
		window.close();  
        window.location = "about:blank";  
	}
}, 1e3);