import Container from "./Container";
import tLogo from "../assets/images/logo.png"

// eslint-disable-next-line react/prop-types
function Layout ({children}) {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={tLogo}/>
                    </div>
                </div>
            </header>
            <div className="container">
                <div className="menu">
                    <ul>
                        <li>Inicial</li>
                        <li>Catalogo</li>
                        <li>Maisto</li>
                        <li>Hot Wheels</li>
                        <li>Promoções</li>
                    </ul>
                </div>
                
                <Container>{children}</Container>
                
                <footer>
                    <div className="copy">Todos os direitos reservados.</div>
                    <div className="contacts">(61) 9 8899-6644 | gladson.albuquerque@gmail.com</div>
                </footer>
            </div>
        </>
        
    );
}

export default Layout;