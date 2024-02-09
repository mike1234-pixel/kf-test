import { navLinks } from "constants/navLinks"
import { Header } from "components/Header"
import { ReactNode } from "react"
import styles from "./Layout.module.css"

interface LayoutProps {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header>
        <ul className={styles.navLinkList}>
          {navLinks.map((navLink) => (
            <li className={styles.navLinkListItem}>
              <a href={navLink.url} target='_blank' rel='noreferrer'>
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
      </Header>
      {children}
    </div>
  )
}
