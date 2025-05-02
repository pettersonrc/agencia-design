import estilos from "./Topo.module.css"
import Image from "next/image"
import Logo from "/public/logo.png"
import BotaoLua from "/public/moon.png"
import BotaoSol from "/public/sun.png"

export default function Topo(props) {

    return (
        <header className={`${
            props.ehTemaEscuro 
                ? estilos.topo_modo_escuro 
                : estilos.topo_modo_claro} 
                ${estilos.topo}`}>
            <Image src={Logo} alt="Logo Agencia" className={estilos.logo}></Image>
            <button 
                className={
                    `${props.ehTemaEscuro 
                        ? estilos.btn_modo_escuro 
                        : estilos.btn_modo_claro} 
                        ${estilos.btn}`} 
                onClick={props.acao_onclick}>
                <Image 
                    src={
                        props.ehTemaEscuro 
                            ? BotaoSol 
                            : BotaoLua} 
                    alt="imagem lua"
                    className={estilos.icones_btn}>
                </Image>
            </button>
        </header>
    )
}