import styles from './styles.module.css'

export function Pokemon({ id, name, img, types }) {
    return(
        <div className={styles["pokemon-container"]}>
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
    )
}