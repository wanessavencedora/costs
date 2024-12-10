import styles from './Input.module.css';

function Input({ type, text, name, placeholder, handleOnchange, value} ){
    return(
    <div className={styles.containerInput}>
        <label htmlFor={name}>{text}:</label>
        <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnchange}
        value={value}
        />
        </div>
    )
}

export default Input;