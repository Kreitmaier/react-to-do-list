import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <TaskList />
      </main>
    </div>
      

      
  )
}

