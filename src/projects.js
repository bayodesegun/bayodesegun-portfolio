import appgrade from './images/appointmentsCal.png';
import ipark from './images/ipark.png';
import wattaid from './images/wattaid.png';

const projects = [
  {
    name: "AppGrade",
    src: appgrade,
    description: "A school management web app",
    images: [
      {
        src: appgrade,
        caption: "Calendar view of appointments, with appointment details and available actions on hover"
      },
    ]
  },

  {
    name: "iPark",
    src: ipark,
    description: "A mobile/web app for self-assisted street parking",
    images: [
      {
        src: ipark,
        caption: "Backend web app home page"
      },
    ]
  },

  {
    name: "WattAid",
    src: wattaid,
    description: "A power information and forum web app",
    images: [
      {
        src: wattaid,
        caption: "Web app home page"
      }
    ]
  },

];

export default projects;