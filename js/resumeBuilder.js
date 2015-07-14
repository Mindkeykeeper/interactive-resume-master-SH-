var bio = {
  "name": "Spencer William Hopkins III",
  "role": "Creator",
  "contacts": {
    "mobile": "16307702653",
    "email": "shopkins@chi.yearup.org",
    "github": "Mindkeykeeper",
    "twitter": "Not available",
    "location": "Chicago,IL"
  },
  "welcomeMsg": "We all die eventually, live life how you want to.",
  "skills": ["HTML", "CSS", "Microsoft suit master", "Microsoft", "Networking",
              "Colaborator", 
            ],
  "biopic": "images/myself.jpg",
  "display": function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // Check if bio has all the required 5 field
    if(Object.keys(bio.contacts).length >= 5){
      for(var property in bio.contacts){
        var value = bio.contacts[property];
        var data = HTMLcontactGeneric.replace("%contact%",property)
                                     .replace("%data%" , value);
        $("#topContacts").append(data);
      }
    }

    $("#topContacts").children().clone().appendTo("#footerContacts");

    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic))
                .append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg))
                .append(HTMLskillsStart);

    if(Object.keys(bio.skills).length >= 1){
      for (var key in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[key]));
      }
    }
  }
};

var education = {
  "schools": [
    {"name": "Udacity (Online)",
     "location": "Chicago, IL",
     "degree": "Web Development",
     "concentration": ["<br>Intro to HTML and CSS",
                       "<br>Responsive Web Design Fundamentals",
                       "<br>JavaScript Basics",
                       "<br>Intro to jQuery",
                       "<br>Object-Oriented JavaScript",
                       "<br>HTML5 Canvas"
                      ],
     "dates": "May,2015-Present",
     "url": "http://www.udacity.com/"
    },
    {"name": "Harold Washington/ Year Up",
     "location": "Chicago, IL",
     "degree": "Information Technology",
     "concentration": ["<br>Introduction to Computer Information Systems",
                       "<br>Introduction to Word Processing",
                       "<br>Introduction to Microcomputers",
                       "<br>Introduction to the Internet",
                       "<br>Cooperate Education Exploration"
                      ],
     "dates": "Sepetember 2014-Present",
     "url": "http://www.yearup.org/"
    },
    {"name": "Devry University",
     "location": "Chicago, IL",
     "degree": "Associate of Arts and Sciences (A.A.S.), web graphic design, Senior",
     "concentration": ["<br>Graphic Design",
                       "<br>Web development",
                       "<br>Advertising",
                      ],
     "dates": "August 2011 - May2013",
     "url": "http://www.Devry.edu/"
    }
  ],

  "display": function() {
    for (var i in this.schools) {
      $("#education").append(HTMLschoolStart.replace("%data%",i));
      var id = "#school-entry-" + i;
      var school = this.schools[i];
      $(id).append((HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%",school.degree))
           .replace("#", school.url))
           .append(HTMLschoolDates.replace("%data%", school.dates))
           .append(HTMLschoolLocation.replace("%data%", school.location))
           .append(HTMLschoolMajor.replace("%data%",school.concentration));
    }
  }
};

var work = {
  "jobs": [
    {"employer": "Moneterrey",
     "title": "Guest Services",
     "location": "Chicago, IL",
     "dates": "August,2014 - Present",
     "description": "- Assist 200 Customers per event with questions and addressing situations<br>" +
                    "- Oversee bag check for 10,000 people a day to ensure safety of event<br>" +
                    "- Reassure admission entry for each ticket holder and preventing illegal entry<br>" 
                   },



    {"employer": "Discovery Clothing Co",
     "title": "Lost Prevention associate",
     "location": "Chicago, IL",
     "dates": "July,2013-April,2014",
     "description": "- Assisted 400 Customers a day with bag check, questions, and retrieving clothing<br>" +
                    "- Prevented 5 acts of theft a day by providing customer service<br>" +
                    "- Performed floor sweep to ensure store safety and receive and report confidential details to manager and Loss Prevention Director <br>" 
    },

    {"employer": "Hobbies",
     "title": "Creator",
     "location": "Chicago, IL",
     "dates": "2013-present",
     "description": "- Photography<br>" +
                    "- Videography<br>" +
                    "- Graphic Design<br>"
    }
  ],
  "display": function() {
    for (var i in this.jobs) {
      $("#workExperience").append(HTMLworkStart.replace("%data%",i));
      var id = "#work-entry-" + i;
      var job = this.jobs[i];
      $(id).append((HTMLworkEmployer.replace("%data%",job.employer) + HTMLworkTitle.replace("%data%",job.title))
           .replace('href="#"', ""))
           .append(HTMLworkDates.replace("%data%",job.dates))
           .append(HTMLworkLocation.replace("%data%",job.location))
           .append(HTMLworkDescription.replace("%data%",job.description));
    }
  }
};

var projects = {
  "projects": [
    {"title": "Xperts educational site",
     "dates": ",2015",
     "description": "Module 3 project for Year Up using Html, CSS, and JavaScript",
     "images": [
       "images/Xperts.png"
     ]
    },
    {"title": "Interactive Resume",
     "dates": "May-2015",
     "description": "A interactive resume based on the template I was given by Udacity",
     "images": [
       "images/interactive-resume.png"
     ]
   },
    {"title": "Project Portfolio",
     "dates": "May,2015",
     "description": "An art piece drawn first on a notepad then recreated on illustrator",
     "images": [
       "images/King.png"
     ]
    }
  ],
  "display": function() {
    for (var i in this.projects) {
      $('#projects').append(HTMLprojectStart.replace("%data%",i));
      var id = '#project-entry-' + i;
      var project = this.projects[i];
      $(id).append(HTMLprojectTitle.replace("%data%",project.title))
           .append(HTMLprojectDates.replace("%data%",project.dates))
           .append(HTMLprojectDescription.replace("%data%",project.description));
      for (var j in project.images) {
        $(id).append(HTMLprojectImage.replace("%data%",project.images[j]));
      }
    }
  }
};

bio.display(); // display the bio section
education.display(); // display the education section
work.display(); // display the work section
projects.display(); // display the project section
$("#mapDiv").append(googleMap); // display the map
