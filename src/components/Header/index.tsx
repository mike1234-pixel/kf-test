import React, { useState, useEffect } from "react";
import logo from "assets/logo.svg";
import styles from "./Header.module.css";
import { ReactNode } from "react";
import { Hamburger } from "components/Hamburger";

export interface HeaderProps {
    children: ReactNode | ReactNode[];
}

const Header: React.FunctionComponent<HeaderProps> = ({
    children,
}: HeaderProps) => {
    const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (isDropdownOpen) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isDropdownOpen]);

    return (
        <nav className={styles.header}>
            <nav className={styles.headerTop}>
                <img alt="Kraken Flex" height={44} src={logo} />
                <Hamburger onClick={toggleDropdown} collapse={isDropdownOpen} />
            </nav>
            <ul className={isDropdownOpen ? styles.showList : ""}>{children}</ul>
        </nav>
    );
};

export default Header;

