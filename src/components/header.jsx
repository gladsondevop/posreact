import Logo from "../assets/images/logo.jpg"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo}/>
            </div>
        </header>
    );
}

export default Header;