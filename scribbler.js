// utilities
var get = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function (selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

// setup typewriter effect in the termina8l demo
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `sh ~/documents/resume.sh

            [name]: Cristofer Posas
            [e-mail]: ogcristofer@gmail.com
            [phone number]: (469) 507-1450


            ############################### RESUME SUMMARY################################

            Self-taught web developer and engineer with a profound understanding of computers, networks, algorithms, information security, web and application development, and mobile app development.
            Currently a personal shopper at Central Market Lover's Lane, but would like to develop and grow into my role in the information technology world with Central Market and H-E-B.

            ### Competencies
            Love for Computers | Always open to creative criticism |  Customer Service | Enjoys working in teams | Always looking for new opportunities | Always staying informed with company and new developments in tech | Product Knowledge (Central Market and FAST) | Fast Learner | Flexible

            ### Education
              W.H. Adamson Collegiate Academy and P-Tech
              (2017-2021)

              El Centro College (AAS in Computer Science)
              (2017-2021)

              IBM Apprenticeship through School Partnership
              (2017-2021)

              American Airlines Developer Operations Internship through School Partnership
              (2017-2021)
            ### Professional Experience

            -Norma's Cafe (Intermittently 2017-2021)
             Food Runner, Cashier, Server, Administrative Assistant, Facilitator
            This was my first job. I learned many important skills during my time here, most notably customer service, patience, time-management, sense of urgency, teamwork, conflict resolution, multitasking, and understanding customer feedback.
            It was important for me to understand how to communicate issues to my team and help expedite the flow of our service to improve the experience for everyone. I had several responsibilites and I upheld them very well.

            -Chick-Fil-A (2020-2021)
             Front of House Team Member and Team Lead (Cashier, Exposition, Host, Facilitator)
            My job here was to facilitate all of our front-end operations and give good customer service to promote customer-brand loyalty and provide great service.

            -Amazon.com (2021-2022)
             (Area Manager, Information Technology and RME [Reliability and Maintenance Engineer], Amnesty)
            During my time here I was able to learn and appreciate the beauty of understanding operations and the standards that they have to be held to in order to make a business function well.
            As an Area Manager I had to manage a group of 20+ employees and make sure that they were compliant in all their training, coach them to reach our productivity standards, and find flaws in our operations that could be resolved with my intervention.
            My role in IT was initially to give maintenance and repair to our KivA robotics systems and our internal network that worked outside of AWS. I got to learn and truly understand the networking of a business deployment of an internal IDP/Cisco based network. We would also be in charge of re-flashing and enrolling our workstations into our domain.
            After becoming ComptIA certified in Hardware Maintenance and Software and receiveing my MIcrosoft Specialist certificate I was moved into our RME team where we would review our operations and reliability and collect feedback from our employees to make the changes necessary to improve our day-to-day productivity.

            Central Market by H-E-B (2022 - present)
             (Curbside Personal Shopper)
            My responsibilites here are to receive and process customer orders placed through our website, help prepare the orders for pick-up and delivery, and help expedite the operations in our curbside department by assuming the roles necessary to reach our productivity levels.
            Most of my job is performed using the FAST application and I am able to become more productive by listening to my leaders and managers and our team helps each other out.

            ###Programming Languages
            -HTML
            -Java
            -CSS
            -SQL
            -Python
            -Git
            -Swift
            -electron


            ###Platforms
            Docker
            MongoDB
            Github
            Kubernetes
            Windows
            Windows Server
            Linux (Ubuntu Server, Debian, Fedora, CENTOS, Kali Linux, elementaryOS)
            macOS
            Swift
            gParted
            WordPress
            VMWare Horizon
            VMWare
            Wireshark
            Apache
            Microsoft Azure
            Amazon AWS
            Google Cloud
            cloudflare
            Firebase

            ###Skills
              Active Listener
              Fast Learner
              Customer Service
              Receptive of feedback
              Conflict management and resolution
              Microsoft Office certified
              A+ Software and Hardware certified
              Strong in analytics and statistics
              Sales
              Industry research
              Understanding of what industry we are in
              Cloud Computing and Hosting


            ###Community
              Latinos at Amazon
              Glamazon
              Pride PRG @ HEB
              Hispanic PRG Group
              Thanksgiving Meals for those in Need @ Norma's Cafe (2017-2021)
              Kiestwood Assemblies of God


                                                                              `;
  var speed = 0;
  //gonna leave this one at 0 lol
  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}

// toggle tabs on codeblock
window.addEventListener("load", function() {
  // get all tab_containers in the document
  var tabContainers = getAll(".tab__container");

  // bind click event to each tab container
  for (var i = 0; i < tabContainers.length; i++) {
    get('.tab__menu', tabContainers[i]).addEventListener("click", tabClick);
  }

  // each click event is scoped to the tab_container
  function tabClick (event) {
    var scope = event.currentTarget.parentNode;
    var clickedTab = event.target;
    var tabs = getAll('.tab', scope);
    var panes = getAll('.tab__pane', scope);
    var activePane = get(`.${clickedTab.getAttribute('data-tab')}`, scope);

    // remove all active tab classes
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    // remove all active pane classes
    for (var i = 0; i < panes.length; i++) {
      panes[i].classList.remove('active');
    }

    // apply active classes on desired tab and pane
    clickedTab.classList.add('active');
    activePane.classList.add('active');
  }
});

//in page scrolling for documentaiton page
var btns = getAll('.js-btn');
var sections = getAll('.js-section');

function setActiveLink(event) {
  // remove all active tab classes
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function smoothScrollTo(i, event) {
  var element = sections[i];
  setActiveLink(event);

  window.scrollTo({
    'behavior': 'smooth',
    'top': element.offsetTop - 20,
    'left': 0
  });
}

if (btns.length && sections.length > 0) {
  for (var i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', smoothScrollTo.bind(this,i));
  }
}

// fix menu to page-top once user starts scrolling
window.addEventListener('scroll', function () {
  var docNav = get('.doc__nav > ul');

  if( docNav) {
    if (window.pageYOffset > 63) {
      docNav.classList.add('fixed');
    } else {
      docNav.classList.remove('fixed');
    }
  }
});

// responsive navigation
var topNav = get('.menu');
var icon = get('.toggle');

window.addEventListener('load', function(){
  function showNav() {
    if (topNav.className === 'menu') {
      topNav.className += ' responsive';
      icon.className += ' open';
    } else {
      topNav.className = 'menu';
      icon.classList.remove('open');
    }
  }
  icon.addEventListener('click', showNav);
});
