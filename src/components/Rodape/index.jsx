import estilos from "./Rodape.module.css"
import Image from "next/image"
import Logo from "/public/logo.png"
import logoFacebook from "/public/facebook.png"
import logoX from "/public/twitter.png"
import logoLinkedin from "/public/linkedin.png"
import logoDribble from "/public/dribble.png"
import logoBehance from "/public/behance.png"
import logoGoogle from "/public/google.png"

export default function Rodape(props) {
    return (
        <footer>
            <div className={
                `${props.ehTemaEscuro
                    ? estilos.rodape_modo_escuro
                    : estilos.rodape_modo_claro}
                ${estilos.rodape}`
            }>
                <div className={estilos.container_titulo}>
                    <Image src={Logo} alt="logo agencia" className={estilos.logo}></Image>
                    <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                    ferramentas e tecnologias personalizadas.</p>
                </div>
                <div className={estilos.container_logos}>
                    <Image src={logoFacebook} alt="logo facebook" className={estilos.logos}></Image>
                    <Image src={logoX} alt="logo twitter" className={estilos.logos}></Image>
                    <Image src={logoLinkedin} alt="logo linkedin" className={estilos.logos}></Image>
                    <Image src={logoDribble} alt="logo dribble" className={estilos.logos}></Image>
                    <Image src={logoBehance} alt="logo behance" className={estilos.logos}></Image>
                    <Image src={logoGoogle} alt="logo google" className={estilos.logos}></Image>
                </div>
                <div className={estilos.container_copyright}>
                    <p>Copyright 2025 <span>Petterson Rodolpho</span></p>
                </div>
            </div>
        </footer>
    )
}