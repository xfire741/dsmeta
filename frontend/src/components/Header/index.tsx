import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Vendas" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/xfire741"> Eduardo Victor</a>
                </p>
            </div>
        </header>

    )
}

export default Header
