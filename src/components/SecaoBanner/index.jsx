import estilos from "./SecaoBanner.module.css"

export default function SecaoBanner() {
    return (
        <section className={estilos.secao_banner}>
            <div className={estilos.banner}>

            </div>
            <div className={estilos.container_texto}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}