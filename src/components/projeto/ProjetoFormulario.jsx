import Input from "../formulario/Input";
import styles from "./ProjetoFormulario.module.css";

function ProjetoFormulario(){
    return(
        <form className= {styles.containerFormulario}>
            <Input 
            type="text" 
            text="Nome do projeto"
            name="name"
            placeholder="insira o nome do projeto"
            />
            <div>
            <input type="number" placeholder="Insira o orçamento total"/>
            </div>
            <div>
            <select name="category_id">
                <option disabled selected> Selecione a categoria</option>
            </select>
            </div>
            <div>  
                <input type="submit" value="Criar projeto"/>
            </div>
        </form>
    )
}

export default ProjetoFormulario;