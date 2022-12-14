import "./Arquivos-css/app.css"
import logoImg from './img/logo.png'
export default function Header() {
    return (
        <header>
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src={logoImg} alt="logo Instagram" />
                </div>
                <div class="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div class="instagram-mobile">
                    <img src={logoImg} alt='logo' />
                </div>
                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                <div class="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
}