

// biography infomation
var bio={
	"name":"Dereck Zenda",
	"role":"Front-End Web Developer",
	"contacts":{
		"skype":"skype:dereck_z?chat",
		"email":"mailto:dereck.zenda@gmail.com?subject=Contact from Resume",
		"linkedin":"https://www.linkedin.com/pub/dereck-zenda/a4/2a0/b01",
		"github":"https://github.com/zendad",
		"twitter":"https://twitter.com/intent/tweet?screen_name=@danzenda",
		"location":"https://www.google.co.za/maps/place/70+Bram+Fischer+Dr,+Randburg,+2194/@-26.119577,27.99935,17z/data=!3m1!4b1!4m2!3m1!1s0x1e9574b4ec79e251:0x6d9b0eda7942bc9d"
	},
	"skills":["Python","Java","Javascript","HTML","CSS"],
	"biopic":"images/profile.jpg"
};

//education information
var education={
	"schools":[
	{
		"name":"Harare Polytechnic",
		"location":"Roodepoort,Johannesburg",
		"degree":"ND",
		"major":"Computer Science",
		"dates":"1999-2001",
		"url":"http://www.hararepoly.com"
	},
	{
		"name":"Masvingo Polytechnic",
		"location":"Rivonia,Johannesburg",
		"degree":"HND",
		"major":"Computer Science",
		"dates":"2001-2003",
		"url":"http://www.masvingopoly.com"
	}
	],
	"onlineCourses":[
		{
		"name":"Udacity",
		"onlinecourse":"Front-End Web Developer Nanodegree",
		"dates":"10/2014-01/2015",
		"url":"https://www.udacity.com"
	},
	{
		"name":"Coursera",
		"onlinecourse":"Mobile Cloud Computing with Android",
		"dates":"03/2014-12/2014",
		"url":"https://www.coursera.org"
	},
	{
		"name":"Coursera",
		"onlinecourse":"Data Science",
		"dates":"03/2014-12/2014",
		"url":"https://www.coursera.org"
	}
	]
};

// employment history information
var work={
	"jobs":[
	{
		"employer":"Mula Systems Plc",
		"location":"Lonehill,Johannesburg",
		"title":"Systems Engineer",
		"dates":"2010-Current",
		"url":"http://www.mula.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	},
	{
		"employer":"ABC Holdings",
		"location":"Sandton,Johannesburg",
		"title":"Systems Administrator",
		"dates":"2004-2009",
		"url":"http://www.mazanda.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	},
	{
		"employer":"Donbas Art Works",
		"location":"Randburg,Johannesburg",
		"title":"Linux Administrator",
		"dates":"2000-2003",
		"url":"http://www.mundawangu.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	}
	]
};

//projects completed or participated in
var projectsDone={
	"workProjects":[
	{
		"title":"Zenda Portal",
		"dates":"2005-2009",
		"url":"http://www.zenda.com",
		"description":"Front-End project -developing a front-web portal for Zenda Works",
		"images":"images/project1.png"
	},
	{
		"title":"Mandu Portal",
		"dates":"2000-2004",
		"url":"http://www.mundawangu.com",
		"description":"Front-End project - developing a front-web portal for Mandu website",
		"images":"images/project2.png"
	}
	]
};

//function to append bio infomation to #header
function bioInfo(){
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedJob = HTMLheaderRole.replace('%data%', bio.role);
	var formattedSkype = HTMLskype.replace('%mylink%', bio.contacts.skype);
	var formattedEmail = HTMLemail.replace('%mylink%', bio.contacts.email);
	var formattedLinkedin = HTMLlinkedin.replace('%mylink%',bio.contacts.linkedin);
	var formattedGithub = HTMLgithub.replace('%mylink%', bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace('%mylink%', bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace('%mylink%',bio.contacts.location);
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$('#mypic').prepend(formattedPic);
	$('#myname').prepend(formattedName,formattedJob);
	$('#myskills').append(HTMLskillsStart);
	$('#topContacts').prepend(formattedSkype, formattedEmail, formattedLinkedin, formattedGithub, formattedTwitter, formattedLocation);
	if(bio.skills.length>0){
		for (skill in bio.skills){
			var formattedSkill=HTMLskills.replace("%data%",bio.skills[skill]);
			$("#myskills").append(formattedSkill);
		}
	}
}

//function to append work to #workExperience
function displayWork(){
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedEmployer=formattedEmployer.replace("%mylink%",work.jobs[job].url);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer+formattedTitle;
		var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedCity=HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedCity,formattedDescription);
	}
}

//function to append work to #projects
function workProject(){
	for (project in projectsDone.workProjects) {
		$("#projects").append(HTMLprojectStart);
		var projectFormattedTitle=HTMLprojectTitle.replace("%data%",projectsDone.workProjects[project].title);
		var projectFormattedTitle=projectFormattedTitle.replace("%mylink%",projectsDone.workProjects[project].url);
		var projectFormattedDates=HTMLprojectDates.replace("%data%",projectsDone.workProjects[project].dates);
		var projectFormattedDescription=HTMLworkDescription.replace("%data%",projectsDone.workProjects[project].description);
		var projectFormattedImage=HTMLprojectImage.replace("%data%",projectsDone.workProjects[project].images);
		$('.project-entry:last').append(projectFormattedTitle, projectFormattedDates, projectFormattedDescription, projectFormattedImage);
	}
}


//function to append education to #education
function educationInfo(){
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var schoolFormattedTitle=HTMLschoolName.replace("%data%",education.schools[school].name);
		var schoolFormattedTitle=schoolFormattedTitle.replace("%mylink%",education.schools[school].url);
		var schoolFormattedDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var schoolFormattedName= schoolFormattedTitle+schoolFormattedDegree;
		var schoolFormattedDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var schoolFormattedLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var schoolFormattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].major);
		$('.education-entry:last').append(schoolFormattedName, schoolFormattedDates, schoolFormattedLocation, schoolFormattedMajor);
	}
	
	$('#education').append(HTMLonlineClasses,HTMLschoolStart)
 
	for (course in education.onlineCourses) {
		var onlineFormattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[course].onlinecourse);
		var onlineFormattedCourse=HTMLonlineSchool.replace("%data%",education.onlineCourses[course].name);
		var onlineFormattedTitle=onlineFormattedTitle.replace("%mylink%",education.onlineCourses[course].url);
		var onlineFormattedCourseName=  onlineFormattedTitle+onlineFormattedCourse;
		var onlineFormattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		var onlineFormattedUrl=HTMLonlineURL.replace(education.onlineCourses[course].url);
		$('.education-entry:last').append(onlineFormattedCourseName, onlineFormattedDates, onlineFormattedUrl);
	}
}

//button to internationalize Name in bio
function inName() {

	var name_var = bio.name.trim().split(" ");
	name_var[0] = name_var[0].slice(0,1).toUpperCase() + name_var[0].slice(1).toLowerCase();
	name_var[1] = name_var[1].toUpperCase();

	return name_var[0] + " " + name_var[1];
}

//Skills Chart
function donutChat(){
	google.setOnLoadCallback(drawChart);
	function drawChart() {
		var data = google.visualization.arrayToDataTable([
          ['Skill', 'Skill Usage'],
          ['Python',     11],
          ['Java',      7],
          ['Javascript',  9],
          ['HTML', 10],
          ['CSS',    7]
        ]);

        var options = {
          title: 'Skills Usage in Projects',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
}


//Call functions
(function makeSite(){
	$('#mapDiv').append(googleMap);	
	donutChat();
	$("#main").append(internationalizeButton);
	bioInfo();
	displayWork();
	workProject();
	educationInfo();
	initializeMap();
	inName(name);
}());
