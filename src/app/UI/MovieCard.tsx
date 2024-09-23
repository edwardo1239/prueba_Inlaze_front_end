'use client'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import styles from './moviecard.module.css';
const baseUrl = 'https://image.tmdb.org/t/p/original/'

type propsType = {
    title: string
    image: string
    release_date: string
    rate: number
}

export default function MovieCard(props: propsType) {
    return (
        <div className={styles.container}>
            <div className={styles.imagen}>
                <img src={`${baseUrl}${props.image}`} alt="movie image" height={210} />
            </div>
            <div className={styles.info_contaner}>
                <div className={styles.titulo_fecha}>
                    <h2>{props.title ? props.title : 'No avaliable...'}</h2>
                    <p>{new Date(props.release_date).toDateString()}</p>
                </div>
                <div className={styles.rating_favoritor_container}>
                    <div className={styles.container_rate_section}>
                        <p>Rating:</p>
                        <div className={styles.ratio_container}>
                            {props.rate ?
                                <CircularProgressbar
                                    styles={
                                        buildStyles({
                                            pathColor: '#61C864',
                                            textColor: '#ffff',
                                        })
                                    }
                                    value={(((props.rate) * 100) / 10)}
                                    text={`${(((props.rate) * 100) / 10)}%`} /> : 'Loading...'}
                        </div>
                    </div>
                    <div className={styles.favoritos_container}>
                        <p>Favoritos:</p>
                        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.4375 6.17969C22.4375 13.0156 12.3018 18.5488 11.8701 18.7773C11.7563 18.8385 11.6292 18.8706 11.5 18.8706C11.3708 18.8706 11.2436 18.8385 11.1299 18.7773C10.6982 18.5488 0.5625 13.0156 0.5625 6.17969C0.564309 4.57444 1.20279 3.03546 2.33788 1.90038C3.47296 0.765293 5.01194 0.126809 6.61719 0.125C8.63379 0.125 10.3994 0.992187 11.5 2.45801C12.6006 0.992187 14.3662 0.125 16.3828 0.125C17.9881 0.126809 19.527 0.765293 20.6621 1.90038C21.7972 3.03546 22.4357 4.57444 22.4375 6.17969Z" fill="#F6F6F6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}