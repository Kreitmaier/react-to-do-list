import { useState } from "react";

import { TaskCard } from "./TaskCard";

import styles from "./TaskList.module.css";

import clipboardIcon from "../assets/Clipboard.svg"
import { PlusCircle } from "phosphor-react";



export function TaskList(){
    const [tasks, setTasks] = useState([]);

    return (
        
        <div>
            <form className={styles.taskForm}>
                <input 
                    name="task" 
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                />
                <button type="submit">Criar <PlusCircle size={20} /> </button>
            </form>

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

                {tasks.map(task => {
                    return (
                        <TaskCard content={task} />
                    )
                })}
                <TaskCard content="Aqui esta o texto referente o que sera apresentado na como tarefa a ser concluída"/>
            </div>

        </div>
    )
}

