/*code for new django based student portal*/

var minRating=4; 	//min can be 1
var maxRating=5; 	//max can be 5
function randomizeRating(){
	return Math.floor(Math.random()*(maxRating-minRating+1))+minRating;
}

for(var i = 1; i< 16; i++){
	var questionNumber=i;
	var feedback = document.getElementsByName("courseFeedback" + questionNumber);
	feedback[0].value=randomizeRating();
	if(i!=15)
	courseFeedbackChanged(i);
}


for(var i = 1; i< 21; i++){
	var questionNumber=i;
	var feedback = document.getElementsByName("facultyFeedback" + questionNumber);
	feedback[0].value=randomizeRating();

	facultyFeedbackChanged(i);
}



/*
//Feedback code for old PHP based student portal

var minRating=5; 	//min can be 1
var maxRating=5; 	//max can be 5

var courseIndex=0;

var scope = angular.element('[ng-controller=feedbackCourses]').scope();

var currentCourse=scope.courseName;

for(var i=0;i<scope.course.length;i++){
	if(scope.course[i].courseName==currentCourse)
		courseIndex=i;
}

function randomizeRating(){
	return Math.floor(Math.random()*(maxRating-minRating+1))+minRating;

}

for(var i = 0; i< scope.course[courseIndex].question.course.length; i++){
	scope.course[courseIndex].question.course[i].display = true;
	scope.course[courseIndex].question.course[i].value = randomizeRating();
}

for(var i = 0; i< scope.course[courseIndex].question.faculty.length; i++){
	scope.course[courseIndex].question.faculty[i].display = true;
	scope.course[courseIndex].question.faculty[i].value = randomizeRating();
}

scope.$apply();


// scope.submitFeedback();

*/
