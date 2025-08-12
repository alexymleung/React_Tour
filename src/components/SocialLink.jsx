import { socialLinks } from "../data";

function SocialLink() {
  return (
    <ul className="icon-list">
      {socialLinks.map((item) => (
        <li className="icon-item" key={item.id}>
          <a href={item.href}>
            <i className={item.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLink;
