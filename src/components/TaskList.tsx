import styles from "./TaskList.module.css";

import clipboardIcon from "../assets/Clipboard.svg"

export function TaskList(){
    return (
        <div>
            <div className={styles.taskCountWrapper}>
                <div className={styles.createdTasks}>
                    <p><strong>Tarefas Criadas</strong></p>
                    <p className={styles.countCreatedTasks}>0</p>
                </div> 
                <div className={styles.doneTasks}>
                    <p><strong>Concluídas</strong></p>
                    <p className={styles.countDoneTasks}>0</p>
                </div>
            </div>

            <div className={styles.taskListWrapperNotContent}>
                <img src={clipboardIcon} alt="Ícone de uma prancheta" />
                <p><strong>Você ainda não tem tarefas cadastradas </strong></p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

        </div>
    )
}