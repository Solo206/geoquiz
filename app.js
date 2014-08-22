    var points=0;
    var qCount=1;
    var correct=0;
    var userAnswer="";
    var realAnswer="";
    

    //question constructor
    function Question(questionImage,optionOne,optionTwo,optionThree,optionFour,answerFive){
    	// this.questionString=questionString;
    	this.questionImage=questionImage;
    	this.optionOne=optionOne;
    	this.optionTwo=optionTwo;
    	this.optionThree=optionThree;
    	this.optionFour=optionFour;
    	this.answerFive=answerFive;
    }

    //array of questions
    var questions=new Array();
    questions[0]=new Question("q1image.png","Gambia","Chile","Australia","USA","Gambia");
    questions[1]=new Question("q2image.png","New Guinea","Iran","Mauritius","Uzbekistan","Mauritius");


$(document).ready(function(){
    // function Player(score,time){
    // 	this.score=score;
    // 	this.times=time;
    // }
    // var player=new Player(0,0:00);

    //variables tracking users selections

    $(".intro").click(function(){ 
    	formatIntro();
    }); 
    $(".instructStart").click(function(){
    		formatQuestion();
    });
    $(".answer").click(function(){

    		qCount++;
    		userAnswer=$(this).text();
    		//check to see if user selection matched up with answer
    		if (userAnswer==realAnswer){
    			//if user answer is matches with realAnswer than increment points
    			points++;
    		}
    		$('.questionCount').text(qCount);
    		if (qCount<=2){
    		//if question count is less than 50, increment qCount and ask another question
    			formatQuestion();
    		}
    		else{
    			//otherwise end format
    			//display points on score section of game over
    			$('.score').text(points);
    			formatDone();
    		}
    });
    $(".end").click(function(){
    	//prematurely end format
    	formatDone();	
    });
    $(".restart").click(function(){
    	$(".rectLeft").css({"display":"none"});
    	$(".rectRight").css({"display":"none"});
    	$(".circleHolder").removeClass("outer1");
    	$(".logo,.mousetext,.pretitle,.title,.top").show();
    	$(".circle").removeClass("inner1");
    	$(".main").addClass("intro");
    	$(".gameover").css({"display":"none"});
    	$(".social").css({"display":"none"});
    	$(".rectLeft").hide();

    });
});
function formatDone(){
		$(".rectLeft").css({"width":"35%"});
    	$(".rectRight").css({"width":"55%"})
    	$(".questionholder").hide();
    	$(".imageHolder").hide();
    	$(".gameover").css({"display":"block"});
    	$(".social").css({"display":"block"});

}
function formatQuestion(){
		$(".rectLeft").css({"width":"45%","float":"left","margin-left":"3%"});
    	$(".instructions").hide();
    	$(".questionholder").css({"display":"block"});
    	$(".rectRight").css({"display":"block"});
    	$(".choices .aOne").text(questions[qCount-1]["optionOne"]);
    	$(".choices .aTwo").text(questions[qCount-1]["optionTwo"]);
    	$(".choices .aThree").text(questions[qCount-1]["optionThree"]);
    	$(".choices .aFour").text(questions[qCount-1]["optionFour"]);
    	realAnswer=questions[qCount-1]["answerFive"];
    	var imageFile=questions[qCount-1]["questionImage"];
    	$(".imageHolder").css({"background":"url("+imageFile+") no-repeat"});
}
function formatIntro(){
        $(".circleHolder").addClass("outer1");
        $(".circle").addClass("inner1");
        $(".logo,.mousetext,.pretitle,.title,.top").hide();
        $(".rectLeft").css({"display":"block"});
        $(".main").removeClass("intro");
}