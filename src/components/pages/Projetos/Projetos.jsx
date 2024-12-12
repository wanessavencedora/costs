import styles from "./Projetos.module.css";
import ProjetoFormulario from "../../projeto/ProjetoFormulario";
import { useNavigate } from "react-router-dom";



function Projetos() {
    const history = useNavigate();


    function createPost(project) {

        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("https:/localhost:5000/projects", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then(
            (resp => resp.json())
                .then((data) => {
                    console.log(data)
                    //redirect
                })
        ).catch(err => console.log(err))

    }
    return (
        <div className={styles.containerProjetos}>
            <h1> Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoFormulario handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )


}

export default Projetos;