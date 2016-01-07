/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var awesomeThoughts = "I am Sharon and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME" , "FUN");
// $("#main").append(funThoughts);

var name = "Sharon Rumsey";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%" , name);
var formattedRole = HTMLheaderRole.replace("%data%" , role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness" , " programming ", "JavaScript Wannabe "];
// $("#main").append(skills);
//$("#main").append(skills[0]);

var bio = {
  "name" : name,
  "role" : role,
  "welcome_message" : "Hire Me!",
  "skills" : skills,
  "picture" : '<img src="../frontend-nanodegree-resume/images/sharon.jpg">'
};

bio["mobile"] = "Mobile: 027-240-1705 ";
bio["email"] = "Email: sharon@rumsey.nz ";
bio["github"] = "Github: shazzadevacademy ";
bio["location"] = "Location: Wellington, New Zealand ";

$("#main").append(bio.name + " ")
          .append(bio.role + " ")
          .append(bio.welcome_message + " ")
          .append(bio.skills)
          .append(bio.mobile)
          .append(bio.email)
          .append(bio.github)
          .append(bio.location)
          .append(bio.picture)
var work = {
  "position" : "Allocations and Accounts Manager",
  "employer" : "Watkins Group",
  "years_worked" : "From June 2015 to January 2016",
  "city" : "Company located in Christchurch, New Zealand although I worked from home in Wellington",
}
$("#main").append(work.position + " ")
          .append(work.employer + " ")
          .append(work.years_worked + " ")
          .append(work.city + " ")

var education = {
  "school" : "University of Evansville",
  "attended" : "Graduated Bachelor's in 1985 and Master's in 1987",
  "school_city" : "Evansville, Indiana in USA",
}
$("#main").append(education.school + " ")
          .append(education.attended + " ")
          .append(education.school_city + " ")
