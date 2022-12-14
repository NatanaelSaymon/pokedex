import { useState } from 'react';

import { Modal } from '../Modal'
import styles from './styles.module.css'

export function Pokemon({ id, name, img, types, stats, abilities }) {

    const [modalOpen, setModalOpen] = useState(false)

    
    return(
        <>
            <div className={styles["pokemon-container"]} onClick={() => setModalOpen(true)}>
                <div className={styles['pokemon-cover']}>
                    <img src={img} alt={name} />
                </div>

                <div className={styles["description"]}> 
                    <span className={styles["description__id"]}>
                        {id < 10 ? `#00${id}` : `#${id}`}
                    </span>

                    <h2 className={styles["description__name"]}>
                        {name}
                    </h2>

                    <div className={styles["description__types"]}>
                        <ul className={styles["description__list"]}>
                            {types.map(type => {
                                return(
                                    <li>{type.type.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
                {name}
                <ul>
                    {stats.map(stat => {
                        return(
                            <li>{stat.stat.name} - {stat.base_stat}</li>
                        )
                    })}
                </ul>

                <ul>
                    {abilities.map(ability => {
                        return(
                            <li>{ability.ability.name}</li>
                        )
                    })}
                </ul>
            </Modal>
        </>
    )
}