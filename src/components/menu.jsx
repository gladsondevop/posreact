import { NavLink } from "react-router-dom";

function Menu() {

    const itensMenu = [
        {nome: 'Inicial', route: '/'},
        {nome: 'Cadastro', route: '/cadastro'},
        {nome: 'Catalogo', route: '/catalogo'},
        {nome: 'Promoções', route: '/promocoes'}
    ]

    return (
        <div className="container">
            <nav className="menu">
                {itensMenu.map((item, i) => (
                    <NavLink 
                        key={i} 
                        to={item.route} 
                        className={({isActive, isPending}) => isPending ? 'pending' : isActive ? 'active' : ''}>
                        {item.nome}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default Menu;
