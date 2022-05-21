import Header from "./components/header/Header.js";
import SelecionaHorario from "./components/horarioFilme/SelecionaHorario.js";
import SelecionaAssento from "./components/selecionaAssento/selecionaAssento.js";
import SelecionaFilme from "./components/selecionaFilme/SelecionaFilme.js";
import Topo from "./components/topo/Topo.js";


export default function App(){

    return(
        <main>
            <Header/>
            <SelecionaAssento/>

        </main>
    );
}