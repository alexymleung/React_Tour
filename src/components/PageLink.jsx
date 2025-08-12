const PageLink = ({ itemName, href, text }) => {
  return (
    <li className={itemName}>
      <a href={href}>{text}</a>
    </li>
  );
};

export default PageLink;
