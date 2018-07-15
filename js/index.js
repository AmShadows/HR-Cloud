<!--下拉菜单-->
//定义鼠标移入时，二级菜单显示的函数
function displaySubMenu(li) {
	<!--//获取二级菜单对象-->
	var submenu = li.getElementsByTagName("ul")[0];
	submenu.style.display = "block";
	//让二级菜单显示

}
//定义鼠标移开时，二级菜单隐藏的函数
function hideSubMenu(li) {
	//获取二级菜单对象
	var submenu = li.getElementsByTagName("ul")[0];
	//让二级菜单隐藏
	submenu.style.display = "none";
}


<!--间歇滚动js-->
var area = document.getElementById("newsBox");
var iliHeight = 40;
area.innerHTML += area.innerHTML;
area.scrollTop = 0;
area.scrollTop = 0;
var speed = 40;
var delay = 2000;
var time;

function startMove() {
	area.scrollTop++;
	time = setInterval("scrollup()", speed);
}

function scrollup() {
	if(area.scrollTop % iliHeight == 0) {
		clearInterval(time);
		setTimeout("startMove()", delay);
	} else {
		area.scrollTop++;
		if(area.scrollTop > area.scrollHeight / 2) {
			area.scrollTop = 0;
		}
	}
}
setTimeout("startMove()", delay)


<!--选项卡-->
$(".main-page .nav div").mouseenter(function() {
	var $this = $(this);
	var index = $this.index();
}).mouseleave(function() {
	var $this = $(this);
	var index = $this.index();
}).click(function() {
	var $this = $(this);
	var index = $this.index();
	var l = -(index * 637);
	$(".main-page .nav div").removeClass("on");
	$(".main-page .nav div").eq(index).addClass("on");
	$(".main-page .content .con-ggh:eq(0)").stop().animate({
		"margin-top": l
	}, 500);
});


<!--照片-->
$(document).ready(function() {
		var b = $("#solutionList div");
		b.mouseover(function() {
			var e = $(this);
			b.removeClass("active");
			e.addClass("active")
		});
		b.mouseout(function() {
			var e = $(this);
			e.removeClass("active");
		});
	}

);

