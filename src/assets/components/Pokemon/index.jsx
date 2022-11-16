import styles from './styles.module.css'

export function Pokemon({ id, name, img, types }) {
    return(
        <div className={styles["pokemon-container"]}>
            <img src={img} alt={name} />

            <div className="description">
                <p className="descriptionId">{id < 10 ? `#00${id}` : `#${id}`}</p>
                <h2 className="descriptionName">{name}</h2>
                <div className="descriptionTypes">
                    <ul className="descriptionList">
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