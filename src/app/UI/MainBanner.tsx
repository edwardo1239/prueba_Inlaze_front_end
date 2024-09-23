'use client'
import { useEffect, useState } from 'react';
import styles from './MainBanner.module.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
const baseUrl = 'https://image.tmdb.org/t/p/original/'

export default function MainBanner() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('')
    const [rate, setRate] = useState('')
    const [images, setImages] = useState('')
    const [, setContador] = useState(0);

    async function obtenerData() {
        try {
            const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWM1NzgyMTllMDdlODAwMTJmMTJjYzRlNjEwZTYxNiIsIm5iZiI6MTcyNzAxNTU0Mi44NTMzODUsInN1YiI6IjY2ZjAwZmMxYjM0OGJlYTRlYjNiNjFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uH7T4EbX2dUKREMQtRzMu539GZLCeOhPXsQuFHWyD9A'
                }
            };
            const response = await fetch(url, options);
            const elementos = await response.json();
            return elementos.results.slice(0, 5);
        } catch (err) {
            if (err instanceof Error) {
                alert(err.message);
            }
        }
    }

    useEffect(() => {
        async function fetchData() {
            const elementos = await obtenerData();
            if (elementos) {
                setTitulo(elementos[0].title); // Establece el primer título por defecto

                // Configura el intervalo para cambiar el título cada segundo
                const intervalo = setInterval(() => {

                    setContador((prevContador) => {
                        const nuevoContador = (prevContador + 1) % elementos.length; // Incrementa el contador y reinicia si llega al final
                        setTitulo(elementos[nuevoContador].title);
                        setDescripcion(elementos[nuevoContador].overview);
                        setRate(elementos[nuevoContador].vote_average);
                        setImages(elementos[nuevoContador].backdrop_path)
                        return nuevoContador;
                    });
                }, 10000);

                return () => clearInterval(intervalo);
            } else {
                return
            }
        }

        fetchData();
    }, []);
    useEffect(() => { }, [titulo])

    return (
        <section
            className={styles.container}
            style={{ backgroundImage: `url(${baseUrl}${images})`, }}
            aria-label="Main banner with latest updates and trending topics">
            <div className={styles.container_detalles}>
                <h2>{titulo ? titulo : 'Loading...'}</h2>
                <h3>{descripcion ? descripcion : 'Loading...'}</h3>
            </div>
            <div className={styles.container_ratio}>
                <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.4375 6.17969C22.4375 13.0156 12.3018 18.5488 11.8701 18.7773C11.7563 18.8385 11.6292 18.8706 11.5 18.8706C11.3708 18.8706 11.2436 18.8385 11.1299 18.7773C10.6982 18.5488 0.5625 13.0156 0.5625 6.17969C0.564309 4.57444 1.20279 3.03546 2.33788 1.90038C3.47296 0.765293 5.01194 0.126809 6.61719 0.125C8.63379 0.125 10.3994 0.992187 11.5 2.45801C12.6006 0.992187 14.3662 0.125 16.3828 0.125C17.9881 0.126809 19.527 0.765293 20.6621 1.90038C21.7972 3.03546 22.4357 4.57444 22.4375 6.17969Z" fill="#F6F6F6" />
                </svg>
                <div className={styles.ratio_container}>
                    {rate ?
                        <CircularProgressbar
                        styles={
                            buildStyles({
                                pathColor: '#61C864',
                                textColor: '#ffff',
                            })
                        }
                            value={((Number(rate) * 100) / 10)}
                            text={`${((Number(rate) * 100) / 10)}%`} /> : 'Loading...'}</div>
            </div>

        </section>
    );
}
