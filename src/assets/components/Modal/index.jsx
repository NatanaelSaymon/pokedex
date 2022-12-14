import { useEffect } from 'react';
import styles from './styles.module.css';

export function Modal({ children, isOpen, setIsOpen, id = 'modal' }) {

    const ESCAPE_KEYCODE = 27;

    useEffect(() => {
        if(!window) return

        const keyUpListener = (event) => {
            if(event.keyCode === ESCAPE_KEYCODE) {
                setIsOpen(false)
            }
        }

        window.addEventListener('keyup', keyUpListener)

        return() => {
            window.removeEventListener('keyup', keyUpListener)
        }
    }, [])

    if(!isOpen) return null

    const handleBackdropClick = (event) => {
        if(event.target.id !== id) return

        setIsOpen(false)
    }

    return(
        <div id={id} className={styles["backdrop"]} onClick={handleBackdropClick}>
            <div className={styles["modal"]}>
                <button type="button" className={styles["modal-close"]} onClick={() => setIsOpen(false)}/>
                {children}
            </div>
        </div>
    )
}