    var points=0;
    var qCount=1;
    var correct=0;
    var userAnswer="";
    var realAnswer="";
    var name="";
    var timerClock=null;

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
    questions[2]=new Question("chad.png","Japan","Iran","Chile","Chad","Chad");
    questions[3]=new Question("israel.png","Australia","Israel","Netherlands","USA","Israel");
    questions[4]=new Question("france.png","Mexico","France","USA","Russia","France");
    questions[5]=new Question("guernsey.png","New Guinea","Isle of Man","Italy","Guernsey","Guernsey");
    questions[6]=new Question("chile.png","India","Chile","Spain","Mali","Chile");
    questions[7]=new Question("germany.png","Vietnam","Egypt","Germany","Kenya","Germany");
    questions[8]=new Question("australia.png","Australia","Iran","Kenya","Mexico","Australia");
    questions[9]=new Question("vietnam.png","India","United Kingdom","Vietnam","China","Vietnam");
    questions[10]=new Question("kenya.png","Ukraine","Kenya","Mali","USA","Kenya");
    questions[11]=new Question("peru.png","Chad","Peru","Vanuatu","Germany","Peru");
    questions[12]=new Question("iran.png","Netherlands","Kenya","Iran","Mali","Iran");
    questions[13]=new Question("japan.png","Vanutau","Japan","United Kingdom","Isle of Man","Japan");
    questions[14]=new Question("mexico.png","Mexico","USA","China","Chile","Mexico");
    questions[15]=new Question("isleofman.png","Isle of Man","Guernsey","Vanuatu","Israel","Isle of Man");
    questions[16]=new Question("india.png","Mexico","Ukraine","Israel","India","India");
    questions[17]=new Question("netherlands.png","Germany","Netherlands","Peru","Uzbekistan","Netherlands");
    questions[18]=new Question("italy.png","Mexico","Italy","Guernsey","Mali","Italy");
    questions[19]=new Question("uzbekistan.png","Mali","Uzbekistan","Mauritius","Ukraine","Uzbekistan");
    questions[20]=new Question("spain.png","Italy","Spain","Israel","Germany","Spain");
    questions[21]=new Question("ukraine.png","Isle of Man","Uzbekistan","Germany","Ukraine","Ukraine");
    questions[22]=new Question("egypt.png","Netherlands","Ukraine","Egypt","Netherlands","Egypt");
    questions[23]=new Question("mali.png","Chile","Iran","Mali","Chad","Mali");
    questions[24]=new Question("uk.png","United Kingdom","Isle of Man","Japan","Egypt","United Kingdom");
    questions[25]=new Question("russia.png","Russia","Germany","Egypt","Ukraine","Russia");
    questions[26]=new Question("china.png","Kenya","Russia","China","United Kingdom","China");
    questions[27]=new Question("cambodia.png","Ukraine","Peru","Cambodia","Kenya","Cambodia");
    questions[28]=new Question("vanuatu.png","Kenya","Israel","Vanuatu","Uzbekistan","Vanuatu");
    questions[29]=new Question("usa.png","Spain","Kenya","Ukraine","USA","USA");


$(document).ready(function(){
    // function Player(score,time){
    // 	this.score=score;
    // 	this.times=time;
    // }
    // var player=new Player(0,0:00);

    //variables tracking users selections
    formatRestart();
    $(".next").click(function(){ 
    	formatIntro();
    }); 
    $(".instructStart").click(function(){
    		timerClock=setInterval(function(){countClock()},1000);
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
    		$(".score").text(points*5);
    		$(".correct").text(points);
    		correct=points;

    		if (qCount<=30){
    		//if question count is less than 50, increment qCount and ask another question
    			formatQuestion();
    		}
    		else{
    			//otherwise end format
    			//display points on score section of game over
    			clearInterval(timerClock);
    			formatDone();
    		}
    });
    $(".end").click(function(){
    	//prematurely end format
    	clearInterval(timerClock);
    	formatDone();	
    });
    $(".restart").click(function(){
		formatRestart();    	
    });
});
function formatDone(){
		$(".rectLeft").css({"width":"35%"});
    	$(".rectRight").css({"width":"55%"})
    	$(".questionholder").hide();
    	$(".imageHolder").hide();
    	$(".gameover").show();
    	$(".social").show();
    	rateMe();
}
function formatQuestion(){
		$(".rectLeft").css({"width":"45%","float":"left","margin-left":"3%"});
        $(".instruct").hide();

    	// $(".questionholder").css({"display":"block"});
    	// $(".rectRight").css({"display":"block"});
    	$(".rectRight").show();
    	$(".questionholder").show();
    	$(".choices .aOne").text(questions[qCount-1]["optionOne"]);
    	$(".choices .aTwo").text(questions[qCount-1]["optionTwo"]);
    	$(".choices .aThree").text(questions[qCount-1]["optionThree"]);
    	$(".choices .aFour").text(questions[qCount-1]["optionFour"]);
    	realAnswer=questions[qCount-1]["answerFive"];
    	var imageFile=questions[qCount-1]["questionImage"];
    	$(".imageHolder").css({"background":"url("+imageFile+") center center no-repeat"});
    	
    	//setting timer
}
function formatIntro(){
        $(".circleHolder").addClass("outer1");
        $(".circle").addClass("inner1");
        $(".logo,.mousetext,.pretitle,.title,.top").hide();
        $(".rectLeft").css({"display":"block"});
        $(".rectLeft .instruct").show();
        $(".next").hide();
}
function formatRestart(){
    	$(".first").show();
		$(".rectLeft").hide();
    	$(".rectRight").hide();
    	$(".circleHolder").removeClass("outer1");
    	$(".circle").removeClass("inner1");
    	$(".next").show();
    	$(".rectLeft").css({"width":"95%","float":"none","margin-left":"3%"});
    	$(".rectRight").css({"width":"45%"})
    	$(".gameover").hide();
    	$(".social").hide();
    	$(".imageHolder").show();
   	 	$(".instruct").hide();
   	 	points=0;
    	qCount=1;
    	correct=0;
    	userAnswer="";
    	realAnswer="";
    	$('.questionCount').text(qCount);
    	$(".score").text(points*5);
    	$(".correct").text(points);
    	$(".time").html("1:00");

}
function rateMe(){
		if (correct<5){
    		$(".ratingButton").text("Shameful");
    		$(".advice").text("It may be time to retake that remedial geography course again.");
    	}
    	else if	(correct<10){
    		$(".ratingButton").text("Below Average");
    		$(".advice").text("Unfortunately, you know less than the average person.");

    	}
    	else if (correct<20){
    		$(".ratingButton").text("Average");
    		$(".advice").text("Congratulations, you know exactly about the same amount as the average person.");

    	}
    	else if (correct<28){
    		$(".ratingButton").text("Pretty Good");
    		$(".advice").text("Fortunately, you know more than the average person.");

    	}
    	else if (correct<30){
    		$(".ratingButton").text("Awe-some!");
    		$(".advice").text("You know your countries pretty well, don't you feel good?");

    	}
    	else if(correct=30){
    		$(".ratingButton").text("Genius");
    		$(".advice").text("Time to call up Alex Trebeck, for Jeopardy.  Because you know your world geography!");

    	}

    		var finalTime=$('.time').html();
    		var finalTime1=returnDigits(finalTime);
    		var finalSec=parseInt(finalTime1[1],10);
    		
    		var name="";
    	// alert(finalTime[1]);
    	if (points==150 && finalSec>50){
    		name=prompt("Congratulations, you've made it to WG Hall of Fame.  What's your name?");
    		$('.1stname').html(name);
    		$('.1sttime').html(finalTime);
    	}
    	else if(points==150 && finalSec>40){
    		name=prompt("Congratulations, you've made it to WG Hall of Fame.  What's your name?");
    		$('.2ndname').html(name);
    		$('.2ndtime').html(finalTime);
    	}
    	else if(points==150 && finalSec>30){
    		name=prompt("Congratulations, you've made it to WG Hall of Fame.  What's your name?");
    		$('.3rdname').html(name);
    		$('.3rdtime').html(finalTime);
    	}
    	else if(points==150 && finalSec>20){
    		name=prompt("Congratulations, you've made it to WG Hall of Fame.  What's your name?");
    		$('.4thname').html(name);
    		$('.4thtime').html(finalTime);
    	}
    	else if(points==150 && finalSec>10){
    		name=prompt("Congratulations, you've made it to WG Hall of Fame.  What's your name?");
    		$('.5thname').html(name);
    		$('.5thtime').html(finalTime);
    	}


}
function countClock(){    
	//gets content of span container
    var timer = $('.time').html();

    timer=returnDigits(timer);

    //parse string into integer
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    // alert(minutes);
    // alert(seconds);
    //decrement second by 1
    seconds -= 1;
    //when minutes is less than 0, clear the interval back to 00
    if (minutes < 0){ return clearInterval(timerClock);
    	formatDone();
    }
    //concatenate integer back with 0 if minute is less than 10 
    if (minutes < 10 && minutes.length != 2) {
    	minutes = '0' + minutes;
    	// alert("0+minutes")
    }
    //if second is less than 0, and minute is not reached 0
    if (seconds < 0 && minutes != 0) {
        //decrement minutes by 1
        minutes -= 1;
        // alert(minutes);
        //set second to 59
        seconds = 59;
        // alert(seconds);
    }
    //concatenate seconds with 0 if seconds are less than 10
    else if (seconds < 10 && length.seconds != 2){ seconds = '0' + seconds;
    // alert(minutes);
    // alert(seconds);
}
    //concatenate with : and set the text in span container
    $('.time').html(minutes + ':' + seconds);
    //clear minutes and seconds if it reaches 0 on both
    if (minutes == 00 && seconds ==00){
        //clears or resets interval
        clearInterval(timerClock);

        formatDone();
    }
}
function returnDigits(stringDigits){
	
	//returns array substring

	var intDigits=stringDigits.split(":");
	return intDigits;

}



