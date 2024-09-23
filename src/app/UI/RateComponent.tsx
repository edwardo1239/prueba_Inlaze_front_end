import styles from './RateComponent.module.css';

type prposType = {
    rate: string
}

export default function RateComponent(props: prposType) {

    return (
        <div className={styles.container}>
            <div className={styles.circular_progress}>
                <h1 className={styles.value}>
                    {props.rate && ((Number(props.rate) * 100) / 10).toFixed(0)}%
                </h1>
            </div>
        </div>
    )
}