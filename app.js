$(document).ready(function(){
    // function Player(score,time){
    // 	this.score=score;
    // 	this.times=time;
    // }
    // var player=new Player(0,0:00);
    $(".intro").click(function(){
        $(".circleHolder").addClass("outer1");
        $(".circle").addClass("inner1");
        $(".logo,.mousetext,.pretitle,.title,.top").hide();
        $(".rectLeft").css({"display":"block"});
        $(".main").removeClass("intro");
    }); 
    $(".instructStart").click(function(){
    	$(".rectLeft").css({"width":"45%","float":"left","margin-left":"3%"});
    	$(".instructions").hide();
    	$(".questionholder").css({"display":"block"});
    	$(".rectRight").css({"display":"block"});
    });
    $(".end").click(function(){
    	$(".rectLeft").css({"width":"35%"});
    	$(".rectRight").css({"width":"55%"})
    	$(".questionholder").hide();
    	$(".imageHolder").hide();
    	$(".gameover").css({"display":"block"});
    	$(".social").css({"display":"block"});
    });
    // $(".restart").click(function(){
    // 	$(".rectLeft").css({"display":"none"});
    // 	$(".rectRight").css({"display":"none"});
    // 	$(".circleHolder").removeClass("outer1");
    // 	$(".logo,.mousetext,.pretitle,.title,.top").show();
    // 	$(".circle").removeClass("inner1");
    // 	$(".main").addClass("intro");
    // 	$(".gameover").css({"display":"none"});
    // 	$(".social").css({"display":"none"});
    // 	$(".rectLeft").hide();

    // });
});
