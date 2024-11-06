import Container from "./container";
import Footer from "./footer";
import Header from "./header";

// eslint-disable-next-line react/prop-types
function Layout ({children}) {
    return (
        <>
            <Container>
                <Header />
                <main className="container mx-auto">{children}</main>
                <Footer></Footer>
            </Container>
        </>
    );
}

export default Layout;