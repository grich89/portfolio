import nyb_mobile from '../../images/screenshots/nyb-mobile.png';
import nyb_desktop from '../../images/screenshots/nyb-desktop.png';
import hc_mobile from '../../images/screenshots/hc-mobile.png';
import hc_desktop from '../../images/screenshots/hc-desktop.png';
import ss_mobile from '../../images/screenshots/ss-mobile.png';
import ss_desktop from '../../images/screenshots/ss-desktop.png';
import cfgi_mobile from '../../images/screenshots/cfgi-mobile.png';
import cfgi_desktop from '../../images/screenshots/cfgi-desktop.png';

const data = {
  title: "Work",
  description: "<p>Here are a few of the recent freelance projects I've completed, both for clients and my own professional development.</p><p>Feel free to <a href=\"mailto:gregorysrich@gmail.com\">email me</a> if you'd like to see more!</p>",
  projects: [
    {
      title: "NYB Creative",
      type: "Web Development",
      details: {
        title: "NYB Creative",
        mobile: {
          src: nyb_mobile,
          alt: "NYB Creative mobile design"
        },
        desktop: {
          src: nyb_desktop,
          alt: "NYB Creative desktop design"
        },
        link: "https://nybcreative.com",
        description: "<p>Full website rebuild in Wordpress for an NYC-based marketing agency.</p>"
      }
    },
    {
      title: "Honig Conte",
      type: "Web Development",
      details: {
        title: "Honig Conte",
        mobile: {
          src: hc_mobile,
          alt: "Honig Conte mobile design"
        },
        desktop: {
          src: hc_desktop,
          alt: "Honig Conte desktop design"
        },
        link: "https://honigconte.com",
        description: "<p>Full website rebuild in Wordpress for an NYC-based insurance agency.</p>"
      }
    },
    {
      title: "CFGI",
      type: "Web Development",
      details: {
        title: "CFGI",
        mobile: {
          src: cfgi_mobile,
          alt: "CFGI mobile design"
        },
        desktop: {
          src: cfgi_desktop,
          alt: "CFGI desktop design"
        },
        link: "https://cfgi.com",
        description: "<p>Full website rebuild in Wordpress for an account advisory firm.</p>"
      }
    },
    {
      title: "Secret Santa",
      type: "React SPA",
      details: {
        title: "Secret Santa",
        mobile: {
          src: ss_mobile,
          alt: "Secret Santa mobile"
        },
        desktop: {
          src: ss_desktop,
          alt: "Secret Santa desktop design"
        },
        link: "https://nybcreative.com",
        description: "<p>This React app allows you to create a Secret Santa list. I created this app as a side project to help me learn the basics of React. Users start by choosing between two options, finding an existing Secret Santa list or creating a new list. The create a new list option requires a list name and at least three participants. Users can share the list name they choose with others that are participating in the Secret Santa. Those users can look up the list by clicking on the “Find My List” button and entering in the list name. All data is stored in a Google Firebase database.</p>"
      }
    }
  ]
}

export default data;