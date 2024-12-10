import { useEffect, useState } from "react";
import Input from "../formulario/Input";
import Select from "../formulario/Select";
import styles from "./ProjetoFormulario.module.css";
import SubmitButton from '../../components/formulario/SubmitButton';
import { data } from "react-router-dom";


function ProjetoFormulario({ btnText }) {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
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
    
    return (
        <form className={styles.containerFormulario}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="insira o nome do projeto"
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="insira o orçamento total"
            />
            <Select name="category_id"
                text="Selecione a categoria"
                options={categories}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjetoFormulario;