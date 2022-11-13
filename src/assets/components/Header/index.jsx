import styles from './styles.module.css'

import logo from '../../images/svg/logo-pokemon.svg'
import linkedin from '../../images/svg/logo-linkedin.svg'
import github from '../../images/svg/logo-github.svg'

export function Header() {
    return(
        <header>
            <div className={styles['header-container']}>
                <div className={styles["header-logo"]}>
                    <img src={logo} alt="Logo Pokemon" />
                </div>
                <div className={styles["header-socials"]}>
                    <a href="https://www.linkedin.com/in/natanael-saymon-2b9b18145/" target="_blank">
                        <img src={linkedin} alt="Logo do LinkeDin" />
                    </a>
                    <a href="https://github.com/NatanaelSaymon" target="_blank">
                        <img src={github} alt="Logo do Github" />
                    </a>
                </div>
            </div>
        </header>
    )
}