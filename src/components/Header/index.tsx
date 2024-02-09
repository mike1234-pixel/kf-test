import { useState, useEffect } from "react"
import logo from "assets/logo.svg"
import { ReactNode } from "react"
import { Hamburger } from "components/Hamburger"
import { Link } from "react-router-dom"
import classNames from "classnames"
import styles from "./Header.module.css"

export interface HeaderProps {
  children: ReactNode | ReactNode[]
}

export const Header = ({ children }: HeaderProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownOpen) {
        setDropdownOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isDropdownOpen])

  return (
    <nav className={styles.header}>
      <nav className={styles.headerTop}>
        <Link to='/'>
          <img alt='Kraken Flex' height={44} src={logo} />
        </Link>
        <Hamburger onClick={toggleDropdown} collapse={isDropdownOpen} />
      </nav>
      <ul
        className={classNames(styles.list, isDropdownOpen && styles.showList)}
      >
        {children}
      </ul>
    </nav>
  )
}
