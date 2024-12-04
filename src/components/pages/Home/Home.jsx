import styles from "./Home.module.css"
import imgHome from "../../img/savings.svg"
import LinkButton from "../../layout/LinkButton"


function Home() {
    return (
        <main className={styles.containerHome}>
            <h1>
                Bem vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/projetos" text="Criar Projeto" />

            <div className={styles.containerImg}><img src={imgHome} alt="" /></div>
        </main>
    )
}

export default Home