import logo from 'assets/logo.svg'

export interface HeaderProps { }

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    return <div>
        <p>Header Component</p>
        <img alt="Kraken Flex" height={80} src={logo} />
    </div>
}

export default Header