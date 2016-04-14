
var bio = {
	"name": "Sarah Keller",
	"role": "Web Developer",
	"contact": {
		"email": "sebethkeller@gmail.com",
		"phone": "(631)626-0103",
		"city": "Camden, ME",
		"github": "SebetheWombat"
	},
	"pic": "images/me.jpg",
	"welcome": "Hello and welcome to my page!",
	"skills": ["JavaScript", "JQuery", "HTML5", "CSS3", "AJAX", "GitHub"]
}
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").prepend(HTMLbioPic.replace("%data%", 'images/me.jpg'));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcome));

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
		$("#skills").append(HTMLskills.replace('%data%', bio.skills[skill]));
	}
}
var work = {
	"jobs" : [{
		"employer" : "Maine Sport Outfitters",
		"title" : "Sales Associate",
		"location": "Rockport, ME",
		"dates" : "September 2014 - October 2015",
		"description" : "Assist patrons in choosing the appropriate gear for their needs"
	},
	{
		"employer" : "Sunday River",
		"title" : "Lift Operator",
		"location" : "Newry, ME",
		"dates" : "November 2013 - April 2014",
		"description" : "Maintain safe operation of ski lifts"
	},
	{
		"employer" : "Bat Conservation International",
		"title" : "Field Technician",
		"location" : "Farmington, PA",
		"dates" : "July 2013 - October 2013",
		"description" : "Record bat and bird fatalities around wind turbines as part of a long term study"
	},
	{
		"employer": "USFWS",
		"title" : "Biology Intern",
		"location" : "Pea Island Wildlife Refuge, NC",
		"dates": "April 2013 - July 2013",
		"description" : "Lead education programs for all ages and protect critical habitat for ground nesting birds"
	},
	{
		"employer" : "USFWS",
		"title" : "Seabird Technician",
		"location" : "Maine Coastal Islands Wildlife Refuge, ME",
		"dates" : "May 2012 - August 2012",
		"description" : "Monitor, protect, and encourage the establishment of nesting seabird populations"
	}]
}
function displayWork(){
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);
		var employ = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
		var pos = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var loc = HTMLworkLocation.replace("%data%", work.jobs[job]["location"]);
		var date = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var des = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$('.work-entry:last').append(employ + pos + loc + date + des);
	}
}

function getLoc(workObj){
	var locArr = [];
	for(var job in workObj.jobs){
		locArr.push(workObj.jobs[job].location);
	}
	return locArr;
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

var projects = {
	"project": [{
		"title" : "Simon Game",
		"completed" : "March 2016",
		"description" : "A recreation of the classic Simon game using HTML, CSS, and jQuery.",
		"images" : "images/SimonScreen.jpg"
	},
	{
		"title": "Tic-Tac-Toe",
		"completed" : "March 2016",
		"description" : "A player versus computer game of tic-tac-toe created using HTML, CSS, and jQuery for the Free Code Camp's front end development course.",
		"images" : "images/tictacScreen.jpg"
	},
	{
		"title" : "Local Weather App",
		"completed" : "February 2016",
		"description" : "A simple weather app that uses the geolocation API to determine the user's location and the Weather Underground API to pull up the current weather for that area.",
		"images" : "images/weatherScreen.jpg"
	}
	]
}

var education = {
	"school" : 
	{
		"name" : "University of Maine",
		"url" : "https://umaine.edu/",
		"city" : "Orono, ME",
		"degree" : "BS",
		"major" : "Wildlife Ecology",
		"dates" : "2008 - 2012",
		"concentration" : "Wildlife Management"
	},

	"online" : [
	{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"url" : "https://www.udacity.com/course/javascript-basics--ud804",
		"completed" : "April 2016"
	},
	{
		"title": "Front End Development Track",
		"school" : "Free Code Camp",
		"url" : "https://www.freecodecamp.com/",
		"completed" : "March 2016"
	},
	{
		"title" : "HTML & CSS",
		"school": "Codecademy",
		"url" : "https://www.codecademy.com/learn/web",
		"completed" : "August 2015"
	},
	{
		"title" : "JavaScript",
		"school" : "codecademy",
		"url" : "https://www.codecademy.com/learn/javascript",
		"complete" : "September 2015"
	},
	{
		"title": "Learn the Command Line",
		"School" : "Codecademy",
		"url" : "https://www.codecademy.com/learn/learn-the-command-line",
		"completed": "October 2015"
	},
	{
		"title" : "Learn SQL",
		"School" : "Codecademy",
		"url": "https://www.codecademy.com/learn/learn-sql",
		"completed" : "November 2015"
	},
	{
		"title" : "JQuery",
		"School" : "Codecademy",
		"url" : "https://www.codecademy.com/learn/jquery",
		"completed" : "December 2015"
	}
	]
}

