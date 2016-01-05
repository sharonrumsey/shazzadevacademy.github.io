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

var skills = ["awesomeness" , " programming ", "JS "];
// $("#main").append(skills);
//$("#main").append(skills[0]);

var bio = {
  "name" : name,
  "role" : role,
  "contact_info" : "sharon@rumsey.nz",
  "picture" : '<img src="../frontend-nanodegree-resume/images/sharon.jpg">',
  "welcome_message" : "Hire Me!",
  "skills" : skills,
};
$("#main").append(bio.name + " ")
          .append(bio.role + " ")
          .append(bio.contact_info + " ")
          .append(bio.picture)
          .append(bio.welcome_message + " ")
          .append(bio.skills);