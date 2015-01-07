$(document).ready(function(){
	draw_grid(16,16);
	path1();
});

function new_grid1(){
	var width = prompt("Please input the width");
	var height = prompt("Please input the height");
	clear_grid();
	draw_grid(width, height);
	path1();
}

function new_grid2(){
	var width = prompt("Please input the width");
	var height = prompt("Please input the height");
	clear_grid();
	draw_grid(width, height);
	path2();
}

function new_grid3(){
	var width = prompt("Please input the width");
	var height = prompt("Please input the height");
	clear_grid();
	draw_grid(width, height);
	path3();
}

function draw_grid(width, height){
	for(var i=1; i<=height;i++){
		$("#grid").prepend("<div id="+i+"></div>")
		for(var j=1; j<=width;j++){
			$("#grid #"+i).prepend("<div class='cell'></div>")
		}
	}
	$("#grid > div").width(width*50+"px")
}

function path1(){
	$("#grid > div > div").mouseenter(function(){
		$(this).css("background-color","blue");
	});
}

function path2(){
	$("#grid > div > div").mouseenter(function(){
		var color = getRandomColor();
		$(this).css("background-color",color);
		$(this).css("opacity",0.5);
	});
}

function path3(){
	$("#grid > div > div").mouseenter(function(){
		var bgColor = $(this).css("background-color");
		var parts = bgColor.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/);
		console.log(bgColor);
		console.log(parts);
	});
}

function clear_grid(){
	$("#grid > div").remove();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}