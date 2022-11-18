import styles from './styles.module.css'

export function Pokemon({ id, name, img, types, height, weight }) {
    return(
        <div className={styles["pokemon-container"]}>
            <img src={img} alt={name} />

            <div className={styles["description"]}>
                <span className={styles["description__id"]}>{id < 10 ? `#00${id}` : `#${id}`}</span>
                <h2 className={styles["description__name"]}>{name}</h2>
                <div className={styles["description__types"]}>
                    <ul className={styles["description__list"]}>
                        {types.map(type => {
                            return(
                                <li>{type.type.name}</li>
                            )
                        })}
                    </ul>
                </div>

                <div className={styles["description__caracter"]}>
                    <div className={styles["description__weight"]}>
                        <p>
                            <span><strong>{weight} kg</strong></span>
                            <span>Peso</span>
                        </p>
                    </div>
                    <div className={styles["description__height"]}>
                        <p>
                            <span><strong>{height} m</strong></span>
                            <span>Altura</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}