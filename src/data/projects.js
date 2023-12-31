import appgrade from '../images/appgrade.png'
import appgradeCal from '../images/appointmentsCal.png';
import appgradeNew from '../images/appointmentNew.png';
import appgradeClose from '../images/appointmentClose.png';
import appgradeCard from '../images/gradeCard.png';
import appgradeUtil from '../images/utilizationReport.png';
import ipark from '../images/ipark.png';
import cordova from '../images/cordova_32.png';
import phonegap from '../images/phonegap.png';
import entry from '../images/1entry.png';
import login from '../images/2login.png';
import menuCustomer from '../images/3amenu_customer.png';
import menuAgent from '../images/3bmenu_agent.png';
import menuEnforcer from '../images/3bmenu_enforcer.png';
import parkingCustomer from '../images/4aparking_customer.png';
import paymentCustomer from '../images/5apayment_customer.png';
import paymentAgent from '../images/5bpayment_agent.png';
import reportsCustomer from '../images/6areports_customer.png';
import helpCustomer from '../images/7ahelp_customer.png';
import messageApp from '../images/messageApp.png';
import messageAppLogon from '../images/messageAppLogon.png';
import mvcHome from '../images/mvcHome.png';
import mvcList from '../images/mvcList.png';
import mvcAdd from '../images/mvcAdd.png';

const projects = [
  {
    name: "AppGrade",
    src: appgrade,
    description: "A school management web app",
    role: "Lead developer: translated user story into requirements, developed the database schema, backend services, the front end, and everything else in-between. Incorporated feedback from client and friends.",
    urls: {private: true},
    details: "An internal tool developed for a Music School in Lagos, Nigeria. Main features: <ul>" +
    "<li>Creation and management of appointments (classes) between teachers and students, including management of all resources involved " +
    " - teachers, rooms and lessons, with calendar view for visualizing booked and open slots.</li>" +
    "<li>Grades entry at the end of each class. <Generation, signing and emailing of digital report cards to parents at the end of each term.</li>" +
    "<li>Generation of monthly time sheets for the payment of teachers.</li>" +
    "<li>Resource utilization report showing how the resources - teachers, lessons and room-hours have been used, with graphs to visualize the data.</li></ul>",
    tech: '<ul class="list-inline"> <li class="devicon-php-plain colored" />' +
    '<li class="devicon-html5-plain-wordmark colored" />' +
    '<li class="devicon-css3-plain-wordmark colored" />' +
    '<li class="devicon-javascript-plain colored" />' +
    '<li class="devicon-jquery-plain-wordmark colored" />' +
    '<li class="devicon-bootstrap-plain-wordmark colored" />' +
    '<li class="devicon-mysql-plain-wordmark colored" />' +
    '<li class="devicon-apache-plain-wordmark colored" />' +
    '<li class="devicon-linux-plain colored" />' +
    '<li class="devicon-docker-plain-wordmark colored" />' +
    '<li class="devicon-yii-plain-wordmark colored" /> </ul>',
    images: [
      {
        src: appgradeCal,
        caption: "Calendar view of appointments, with appointment details and available actions on hover"
      },
      {
        src: appgradeNew,
        caption: "New appointment form, with intelligent background resource availability checks"
      },
      {
        src: appgradeClose,
        caption: "Appointment close form, with space for entering grades for students in a group class"
      },
      {
        src: appgradeCard,
        caption: "Grade card sample, with space for teacher to sign and add comment"
      },
      {
        src: appgradeUtil,
        caption: "Resource utilization reports"
      },
    ]
  },

  {
    name: "iPark",
    src: ipark,
    urls: {private: true},
    description: "A mobile/web app for self-assisted street parking",
    details: "A pioneer street parking application for e-management of street parking on Nigerian streets. Main features include:" +
    "<ul><li>Customer checks in and out of parking area and pay for time used, using the mobile app.</li>" +
    "<li>Customers who cannot self-park for any reason are assisted by Agent at parking locations.</li>" +
    "<li>Enforcers check and ensure that vehicles in the parking area are duly checked in.</li>" +
    "<li>Enforcers  can fine or tow offending vehicles and capture this activity in the system.</li>" +
    "<li>An administrator manages application data using a back-end interface.</li></ul>",
    role: "Lead developer: translated user story into requirements, developed the database schema, backend services, the front end, and everything else in-between. Incorporated feedback from client and friends.",
    tech: '<ul class="list-inline"> <li class="devicon-php-plain colored" />' +
    '<li class="devicon-html5-plain-wordmark colored" />' +
    '<li class="devicon-css3-plain-wordmark colored" />' +
    '<li class="devicon-javascript-plain colored" />' +
    '<li class="devicon-jquery-plain-wordmark colored" />' +
    '<li class="devicon-bootstrap-plain-wordmark colored" />' +
    '<li class="devicon-mysql-plain-wordmark colored" />' +
    '<li class="devicon-apache-plain-wordmark colored" />' +
    '<li class="devicon-linux-plain colored" />' +
    '<li class="devicon-laravel-plain-wordmark colored" />' +
    `<li title="Phonegap"><img class="no-vertical-align" src=${phonegap} width="32" height="32" alt="Phonegap" /> </li>` +
    `<li title="Cordova"><img class="no-vertical-align" src=${cordova} alt="Cordova" /> </li> </ul>`,
    images: [
      {
        src: entry,
        caption: "Home screen"
      },
      {
        src: login,
        caption: "Login screen"
      },
      {
        src: menuCustomer,
        caption: "Customer menu"
      },
      {
        src: menuAgent,
        caption: "Agent menu"
      },
      {
        src: menuEnforcer,
        caption: "Enforcer menu"
      },
      {
        src: parkingCustomer,
        caption: "Customer parking screen"
      },
      {
        src: paymentCustomer,
        caption: "Customer payment screen"
      },
      {
        src: paymentAgent,
        caption: "Agent payment screen"
      },
      {
        src: reportsCustomer,
        caption: "Customer report screen"
      },
      {
        src: helpCustomer,
        caption: "Customer help screen"
      },
    ]
  },

  {
    name: "Message App",
    src: messageApp,
    urls: {repo: 'https://github.com/bayodesegun/message_app', live: 'http://message-app.bayodesegun.com/'},
    description: "A simple messaging app written in Meteor.js",
    details: "A Simple messaging app written in Meteor, to get on a grip on Meteor development and testing.",
    role: "Solo developer: developed the database schema, backend services, the front end, and everything else in-between.",
    tech: '<ul class="list-inline"> <li class="devicon-meteor-plain-wordmark colored" />' +
    '<li class="devicon-html5-plain-wordmark colored" />' +
    '<li class="devicon-css3-plain-wordmark colored" />' +
    '<li class="devicon-javascript-plain colored" />' +
    '<li class="devicon-jquery-plain-wordmark colored" />' +
    '<li class="devicon-bootstrap-plain-wordmark colored" />' +
    '<li class="devicon-mongodb-plain-wordmark colored" />' +
    '<li class="devicon-apache-plain-wordmark colored" />' +
    '<li class="devicon-linux-plain colored" />',
    images: [
      {
        src: messageApp,
        caption: "Guest page"
      },
      {
        src: messageAppLogon,
        caption: "User page"
      },
    ]
  },

  {
    name: "MVC App",
    src: mvcHome,
    urls: {repo: 'https://github.com/bayodesegun/simple_MVC', live: 'http://mvc-app.bayodesegun.com/'},
    description: "A simple app demonstrating basic MVC concepts",
    details: "A simple app demonstrating basic MVC concepts without the use of a framework, to get a hold on basic HTTP concepts.",
    role: "Solo developer: developed the database schema, backend services, the front end, and everything else in-between.",
    tech: '<ul class="list-inline"> <li class="devicon-php-plain colored" />' +
    '<li class="devicon-html5-plain-wordmark colored" />' +
    '<li class="devicon-css3-plain-wordmark colored" />' +
    '<li class="devicon-javascript-plain colored" />' +
    '<li class="devicon-jquery-plain-wordmark colored" />' +
    '<li class="devicon-bootstrap-plain-wordmark colored" />' +
    '<li class="fa fa-database" aria-hidden="true" title="SQLite" />' +
    '<li class="devicon-apache-plain-wordmark colored" />' +
    '<li class="devicon-linux-plain colored" />',
    images: [
      {
        src: mvcHome,
        caption: "Entry page"
      },
      {
        src: mvcList,
        caption: "List current db items"
      },
      {
        src: mvcAdd,
        caption: "Add item to db"
      },
    ]
  },
];

export default projects;
