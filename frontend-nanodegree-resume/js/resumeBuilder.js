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