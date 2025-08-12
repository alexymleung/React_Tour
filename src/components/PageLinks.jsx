import { pageLinks } from "../data";
import PageLink from "./PageLink";

function PageLinks({ groupName, itemName }) {
  return (
    <ul className={groupName}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemName={itemName} />;
      })}
    </ul>
  );
}

export default PageLinks;
