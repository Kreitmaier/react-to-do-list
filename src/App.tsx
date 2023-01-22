import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        
        <TaskForm />
      </div>
    </div>
      

      
  )
}

