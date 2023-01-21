import styles from "./Header.module.css"

import todoLogo from "../assets/rocket.svg"

export function Header() {
    return (
        <div className={styles.header}>   
            
            <img src={todoLogo} alt="Lototipo do site Todo" />
                   
            <p className={styles.to}>to</p><p className={styles.do}>do</p>  
        </div>
       
    )
}