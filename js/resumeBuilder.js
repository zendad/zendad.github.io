

// biography infomation
var bio={
	"name":"Dereck Zenda",
	"role":"Web Developer",
	"contacts":{
		"mobile":"0718776643",
		"github":"zendad",
		"twitter":"@danzenda",
		"location":"Johannesburg",
		"email":"dereck.zenda@gmail.com"
	},
	"skills":["Programming","Java","Javascript","HTML"],
	"welcomeMessage":"Welcome to my cv",
	"biopic":"images/fry.jpg"
};

//education information
var education={
	"schools":[
	{
		"name":"Mbecity",
		"location":"Harare",
		"degree":"BA",
		"major":"Computer Science",
		"dates":"2001-2003",
		"url":"http://www.example.com"
	},
	{
		"name":"Mbare",
		"location":"Masvingo",
		"degree":"BA",
		"major":"Computer Science",
		"dates":"2003-2005",
		"url":"http://www.example.com"
	}
	],
	"onlineCourses":[
		{
		"name":"Orocity",
		"onlinecourse":"Sugar Cane",
		"dates":"2001-2003",
		"url":"http://www.example.com"
	},
	{
		"name":"Maracity",
		"onlinecourse":"Soda Power",
		"dates":"2001-2003",
		"url":"http://www.example.com"
	}
	]
};

// employment history information
var work={
	"jobs":[
	{
		"employer":"Musorowegomo",
		"location":"Harare",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"url":"http://www.dereckzenda.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	},
	{
		"employer":"Mombe Chingwa",
		"location":"Cape Town",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"url":"http://www.mazanda.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo."
	},
	{
		"employer":"Sadza neNyama",
		"location":"London",
		"title":"Systems Administrator",
		"dates":"2001-2003",
		"url":"http://www.mundawangu.com",
		"description":"who moved my cheese and puit in my congo.who moved my cheese and puit in my congo"
	}
	]
};

//projects completed or participated in
var projectsDone={
	"workProjects":[
	{
		"title":"Udacity",
		"dates":"2001-2003",
		"url":"http://www.mundawangu.com",
		"description":"sadza nemuriwo",
		"images":"images/project1.png"
	},
	{
		"title":"Udacity",
		"dates":"2001-2003",
		"url":"http://www.mundawangu.com",
		"description":"chingwa chine dovi",
		"images":"images/project2.png"
	}
	]
};

//function to append bio infomation to #header
function bioInfo(){
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedJob = HTMLheaderRole.replace('%data%', bio.role);
 	var formattedPic = HTMLbioPic.replace('%data%', 'images/fry.jpg');
	var formattedMessage = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedNumber = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
	$('#header').prepend(formattedName, formattedJob);
	$('#header').append(formattedPic, formattedMessage, HTMLskillsStart);
	$('#topContacts').append(formattedNumber, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
	$('#footerContacts').append(formattedNumber, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
	if(bio.skills.length>0){
		for (skill in bio.skills){
			var formattedSkill=HTMLskills.replace("%data%",bio.skills[skill]);
			$("#skills").append(formattedSkill);
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
		var onlineFormattedUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		var onlineFormattedUrl=onlineFormattedUrl.replace("%mylink%",education.onlineCourses[course].url);
		$('.education-entry:last').append(onlineFormattedCourseName, onlineFormattedDates, onlineFormattedUrl);
	}
}

//Call functions
(function makeSite(){
	$('#mapDiv').append(googleMap);	
	bioInfo();
	displayWork();
	workProject();
	educationInfo();
	initializeMap();
}());

//create button to internationalize Name in bio
$("#main").append(internationalizeButton);
function inName(){
	name=name.trim().split(" ");
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0]+" "+name[1];
}


