import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";

import styles from "./TaskCard.module.css";

interface CardContent {
    taskId: string;
    content: string;
    isDone: boolean;
    onDeleteTask: (content: string) => void;
    onDoneTask: (content: string, isChecked: boolean) => void;
}

export function TaskCard({ taskId, isDone, content, onDeleteTask, onDoneTask }: CardContent) {
    
    function handleDeleteTask(){
        onDeleteTask(taskId)
    }

    function handleDoneTask(event: ChangeEvent<HTMLInputElement>){
        onDoneTask(taskId, event.target.checked);
    }

    return (
            <div className={styles.taskCardWrapper}>
                <div className={styles.taskItemWrapper}>
                    <input type="checkbox" checked={isDone} id={taskId} onChange={handleDoneTask}/>
                    <label htmlFor={taskId}>{content}</label>
                </div>
                <button title='Deletar tarefa' onClick={handleDeleteTask}>
                    <Trash size={16} />
                </button>
            </div>
    )
}