import Menu from "./Menu";
const Header = () => {

    return (
        <header>
            <div className="header-main">
                <img className="header-logo" src="/logo.png" />
                <Menu />
            </div>
        </header>
    );
}
export default Header;