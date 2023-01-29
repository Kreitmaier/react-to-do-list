import styles from "./TaskListNotContent.module.css"
import clipboardIcon from "../assets/Clipboard.svg";

export default function TaskListNotContent(){
    return(
        <div className={styles.taskListWrapperNotContent}>
            <img src={clipboardIcon} alt="Ícone de uma prancheta" />
            <p><strong>Você ainda não tem tarefas cadastradas </strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div> 
               
    )
}