import { PlusCircle } from "phosphor-react";
import styles from "./TaskForm.module.css";

export function TaskForm() {
    return (
        <form className={styles.taskForm}>
            <input 
                name="task" 
                type="text"
                placeholder="Adicione uma nova tarefa" 
            />
            <button type="submit">Criar <PlusCircle size={20} /> </button>
        </form>
    )
}