import { SiteLink } from "interfaces/Site";
import styles from "./HeaderLink.module.css";

interface HeaderLinkProps {
  siteLink: SiteLink;
}

export const HeaderLink = ({ siteLink }: HeaderLinkProps) => {
  return <li className={styles.root}>
    <a href={siteLink.url} target='_blank' rel='noreferrer'>
      {siteLink.name}
    </a>
  </li>;
};
