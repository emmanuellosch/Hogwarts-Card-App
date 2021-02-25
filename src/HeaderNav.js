import { NavLink, useRouteMatch } from 'react-router-dom';

export default function HeaderNavigation(){
    const {url, path} = useRouteMatch();
    return (
        <header className="header">
            <Nav className="Navigation">
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/slytherin">Slytherin</NavLink>
                <NavLink to = "/gryiffindor">Gryffindor</NavLink>
                <NavLink to = "/hufflepuff">Hufflepuff</NavLink>
                <NavLink to = "/ravenclaw">Ravenclaw</NavLink>
            </Nav>
        </header>
    )
}