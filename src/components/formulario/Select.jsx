import styles from './Select.module.css';

function Select({text, name, options, handleOnchange, value} ){
    return(
    <div className={styles.containerSelect}>
        <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
        {options.map((option)=>(
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
    )
}

export default Select;