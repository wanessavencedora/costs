import styles from "./Projetos.module.css";
import ProjetoFormulario from "../../projeto/ProjetoFormulario";



function Projetos () {
return (
    <div className={styles.containerProjetos}>
        <h1> Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjetoFormulario/>
        </div>   
)


}

export default Projetos;