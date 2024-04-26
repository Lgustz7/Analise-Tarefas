import './Header.css'
import Nav from './Nav'
import './Nav.css'

function Header() {
    var nomeUser = 'Luiz'
    return (
        <>
            <header>
                <h2>Olá, {nomeUser}</h2>
            </header>
            <Nav />
        </>
    )
}
export default Header