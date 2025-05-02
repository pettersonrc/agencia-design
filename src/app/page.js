"use client";

import { useState } from "react";
import estilos from "./page.module.css";
import Topo from "@/components/Topo";
import SecaoBanner from "@/components/SecaoBanner";
import SecaoExperienciaTrabalho from "@/components/SecaoExperienciaTrabalho";
import Rodape from "@/components/Rodape";

export default function Home() {
    const [ehTemaEscuro, setTemaEscuro] = useState(false);

    function alterarTema() {
        setTemaEscuro(!ehTemaEscuro);
    }

    return (
        <div>
            <Topo acao_onclick={alterarTema} ehTemaEscuro={ehTemaEscuro} />
            <SecaoBanner ehTemaEscuro={ehTemaEscuro} />
            <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro} />
            <Rodape ehTemaEscuro={ehTemaEscuro} />
        </div>
    );
}
