import Container from "./container";
import Menu from "./menu";
import Footer from "./footer";
import Header from "./header";

// eslint-disable-next-line react/prop-types
function Layout ({children}) {
    return (
        <>
            <Container>
                <Header />
                <Menu />
                <main className="container main">{children}</main>
                <Footer></Footer>
            </Container>
        </>
    );
}

export default Layout;