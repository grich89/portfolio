import audit from '../../images/icons/audit.svg';
import illustrator from '../../images/icons/illustrator.svg';
import chat from '../../images/icons/chat.svg';
import eye from '../../images/icons/eye.svg';
import react from '../../images/icons/react.svg';
import wordpress from '../../images/icons/wordpress.svg';

const data = {
  offerings: {
    title: "What I can do for you",
    description: "<p>Have a project you need help with? Here are a few of my specialties:</p>",
    list: [
      {
        icon: illustrator,
        text: "Pixel-perfect design implementation"
      },
      {
        class: "spin",
        icon: react,
        text: "Single page apps in <strong>React</strong> and <strong>Vue</strong>"
      },
      {
        icon: audit,
        text: "Accessibility audits & recommendations"
      },
      {
        icon: wordpress,
        text: "Full-stack web development"
      },
      {
        icon: eye,
        text: "An eye for elegant design"
      },
      {
        icon: chat,
        text: "An ability to communicate technical concepts without overcomplicating things"
      }
    ]
  }
}

export default data;