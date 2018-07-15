//显示当前时间
function clockon() {
				var now = new Date();
				var year = now.getFullYear();
				var month = now.getMonth();
				var date = now.getDate();
				var day = now.getDay();
				var hour = now.getHours();
				var minu = now.getMinutes();
				var sec = now.getSeconds();
				var week;
				month = month + 1;
				if(month < 10) month = "0" + month;
				if(date < 10) date = "0" + date;
				if(hour < 10) hour = "0" + hour;
				if(minu < 10) minu = "0" + minu;
				if(sec < 10) sec = "0" + sec;
//				var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
//				week = arr_week[day];''
				
				time2 = year + "<br>*" + month + "*<br>*" + date+"*"; 
                
               
				//将时间显示在id=bgclock的区域
				time1.innerHTML=time2;
				hour1.innerHTML= hour;
				min1.innerHTML = minu;
			    sec1.innerHTML = sec;

				var timer = setTimeout("clockon()", 200);

			}

//旋转的云
var ele;

$.fn.extend({
	rotate: function() {
		ele = this;
		setInterval('singleRotate()', 20);
	}
});

var degree = 0;

function singleRotate() {
	degree = degree + 50 * Math.PI / 180;
	ele.css("transform", "rotate(" + degree + "deg)");
}

$(document).ready(function() {
	//$("#img").click(function () {
	$("#img").rotate();
	// });
});
