import { Trash } from "phosphor-react";

import styles from "./TaskCard.module.css";


interface CardContent {
    content: string;
}

export function TaskCard({ content }: CardContent) {
    return (
        <div className={styles.taskCardWrapper}>
            <div className={styles.taskItemWrapper}>
                <input type="checkbox" />
                <label>{content}</label>
            </div>
            <button title='Deletar tarefa'>
                <Trash size={20} />
            </button>
        </div>
    )
}