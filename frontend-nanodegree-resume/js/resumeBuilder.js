var bio = {
  "name" : "Sharon Rumsey",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "Mobile: 027-240-1705 ",
    "email" : "Email: sharon@rumsey.nz ",
    "github" :"Github: shazzadevacademy ",
    "location" : "Location: Wellington, New Zealand "
  },
  "welcome_message" : "Hire Me!",
  "skills" : ["Awesome" , " Hope to be Programmer", "JavaScript Wannabe", "Wife & Mummy"],
  "picture" : "<img src='../frontend-nanodegree-resume/images/sharon.jpg'>"
}

var education = {
  "school" : "University of Evansville",
  "attended" : "Graduated Bachelor's in 1985 and Master's in 1987",
  "major" : "Clinical Psychology",
  "school_city" : "Evansville, Indiana USA",
  "url": "https://www.evansville.edu/"
}

var work = {
  "jobs" : [
    {
      "employer" : "Watkins Group Limited",
      "title" : "Allocations and Accounts Manager",
      "location" : "Company located in Christchurch, New Zealand although I worked from home in Wellington",
      "dates" : "From June 2015 to January 2016",
      "description" : "Contract with Watkins Group to process building consents and certificates of acceptance for allocation with Christchurch City Council, as well as provide accounts management using Xero and WorkFlowMax for Regulatory, Consultancy and Design departments."
    },
    {
      "employer" : "On Networks Limited",
      "title" : "Accounts Manager",
      "location" : "Business ISP in Wellington, New Zealand",
      "dates" : "From 2012 to 2015",
      "description" : "Managed the On Networks accounts using Xero and performed payroll, invoicing and management of business contracts."
    },
    {
      "employer" : "Ministry of Fisheries and Marine Resources Development",
      "title" : "Help Desk and Systems Analyst",
      "location" : "Wellington, New Zealand",
      "dates" : "From 1997 to 2001",
      "description" : "Provided testing review of in-house coded software prior to release to end users.  Documented bugs in software and reported to IT to be fixed.  Wrote documentation for end users once testing completed. Also, provided Help Desk backup and support and wrote Help Desk documentation / manual."
    },
    {
      "employer" : "Juneau Alliance for Mental Health",
      "title" : "Case Manager II",
      "location" : "Juneau, Alaska in USA",
      "dates" : "From 1991 to 1996",
      "description" : "Worked with individuals with chronic mental illness in an out-patient setting.  Assisted individuals with linkage to community services and housing.  Worked to help people laive in the community and to assist them during periods of acute episodes in hopes that a psychiatric hospitalization may be avoided.  Provided testimony in court for individuals requiring extended hospital stays.  Oversaw the medication clinic with psychiatrist.  Acted as Clinical Supervisor during periods when supervisor of case management was away.  Assigned hospital privliges to review and assess clients being treated in hospital and over view of other case management documentation while client on mental health unit."
    },
    {
      "employer" : "Kitsap Mental Health Services",
      "title" : "Case Manager",
      "location" : "Bremerton, Washington USA",
      "dates" : "From 1990 to 1991",
      "description" : "Provided community support to help stabilize individuals with chronic mental illness in the community.  Attended psychiatric consults to review and discuss caseload.  Assisted in helping to obtain housing, medical follow up and benefits support."
    },
    {
      "employer" : "Sunmount Developmental Disabilities",
      "title" : "Psychology Assistant III",
      "location" : "Tupper Lake, New York USA",
      "dates" : "From 1988 to 1990",
      "description" : "Worked at a developmental disabilities facility for New York State. Provided assessment profiles through intelligence testing and through review of rehabilitation programming. Developed programs to modify behaviours as well as to improve daily living skills. attended psychiatric consults and trained direct care staff on each individual program as well as consulted daily with staff as problems occurred."
    },
    {
      "employer" : "Hillcrest Washington Youth Home",
      "title" : "Houseparent",
      "location" : "Evansville, Indiana USA",
      "dates" : "From 1985 to 1987",
      "description" : "Worked with sexually abused and neglected youth in their daily activities and caring for them as a surrogate parent."
    }
  ]
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);

      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
    }

function displayWork() {
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);  
  }
}
displayWork();

$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});