import { useEffect, useState } from "react";
import Input from "../formulario/Input";
import Select from "../formulario/Select";
import styles from "./ProjetoFormulario.module.css";
import SubmitButton from '../../components/formulario/SubmitButton';

function ProjetoFormulario({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault();
        console.log(project)
        //handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.tagert.option[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={styles.containerFormulario}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="insira o nome do projeto"
                handleOnchange={handleChange}
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="insira o orçamento total"
                handleOnchange={handleChange}
            />
            <Select 
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleCategory={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjetoFormulario;