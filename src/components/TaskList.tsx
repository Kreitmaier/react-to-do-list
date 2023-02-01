import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { TaskCard } from "./TaskCard";
import { TaskListNotContent } from "./TaskListNotContent";
import { PlusCircle } from "phosphor-react";

import styles from "./TaskList.module.css";

interface Task {
    id: string;
    content: string;
    isDone: boolean;
}

export function TaskList(){
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');
    const [countDoneTasks, setCountDoneTasks] = useState(0);
    
    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, {
            id: uuidv4(),
            content: newTask,
            isDone: false
        }]);

        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){ 
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Não é possivel enviar o campo vazio');
    }

    function deleteTask( taskToDelete: string ) {
        const taskWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete
        });

        setTasks(taskWithoutDeletedOne);

        const qtdDoneTasks = taskWithoutDeletedOne.reduce((acc, task) => {
            if(task.isDone){
                return acc = acc + 1;
            }else{
                return acc;
            }
        }, 0);

        setCountDoneTasks(qtdDoneTasks);  
    }

    function doneTask(taskToDone:string, isChecked: boolean) {
        if (isChecked) {
            const task = tasks.find(task => {
                return task.id === taskToDone
            });

            const updatedTaskToDone = Object.assign({}, task, {
                isDone: true
            });

            const taskIndexToDone = tasks.findIndex(task => task.id === taskToDone);

            const updateTasks = tasks.filter(task => {
                return task.id !== taskToDone
            });

            updateTasks.splice(taskIndexToDone,0,updatedTaskToDone);
            
            setTasks([...updateTasks]);

            const qtdDoneTasks = updateTasks.reduce((acc, task) => {
                if(task.isDone){
                    return acc = acc + 1;
                }else{
                    return acc;
                }
            }, 0);

            setCountDoneTasks(qtdDoneTasks);
   
        }else {
            const task = tasks.find(task => {
                return task.id === taskToDone
            });

            const updatedTaskToDone = Object.assign({}, task, {
                isDone: false
            });

            const taskIndexToDone = tasks.findIndex(task => task.id === taskToDone);

            const updateTasks = tasks.filter(task => {
                return task.id !== taskToDone
            });

            updateTasks.splice(taskIndexToDone,0,updatedTaskToDone);
            
            setTasks([...updateTasks]);

            const qtdDoneTasks = updateTasks.reduce((acc, task) => {
                if(task.isDone){
                    return acc = acc + 1;
                }else{
                    return acc;
                }
            }, 0);

            setCountDoneTasks(qtdDoneTasks);
        }
    }

    return (
        <>
            <form 
                onSubmit={handleCreateNewTask}
                className={styles.taskForm} 
            >
                <input 
                    name="task" 
                    type="text"
                    placeholder="Adicione uma nova tarefa" 
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    value={newTask}
                    required
                />
                <button type="submit">Criar <PlusCircle size={20} /></button>
            </form>

            <div className={styles.taskCountWrapper}>
                <div className={styles.createdTasks}>
                    <p><strong>Tarefas Criadas</strong></p>
                    <p className={styles.countCreatedTasks}>{tasks.length}</p>
                </div> 
                <div className={styles.doneTasks}>
                    <p><strong>Concluídas</strong></p>
                    <p className={styles.countDoneTasks}>{countDoneTasks} {countDoneTasks > 0 && <span>de {tasks.length}</span>} </p>
                </div>
            </div>
            <div className={tasks.length > 0 ? styles.taskListWrapper : undefined }>
                {
                    tasks.length <= 0 ?
                        <TaskListNotContent />
                        :
                        tasks.map(task => {
                            return (
                                <TaskCard 
                                    key={task.id}
                                    taskId={task.id} 
                                    content={task.content}
                                    isDone={task.isDone} 
                                    onDoneTask={doneTask} 
                                    onDeleteTask={deleteTask} 
                                />
                            )
                        })
                }
            </div>
        </>
    )
}

