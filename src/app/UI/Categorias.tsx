import styles from './categorias.module.css'
import MovieCard from './MovieCard';

export default async function Categorias() {

    let popular;
    let showPopular;
    let now;
    let showNow;
    let upcoming;
    let showUpcoming;

    const obtenerPopulares = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWM1NzgyMTllMDdlODAwMTJmMTJjYzRlNjEwZTYxNiIsIm5iZiI6MTcyNzAxNTU0Mi44NTMzODUsInN1YiI6IjY2ZjAwZmMxYjM0OGJlYTRlYjNiNjFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uH7T4EbX2dUKREMQtRzMu539GZLCeOhPXsQuFHWyD9A'

            }
        };
        const response = await fetch(url, options);
        popular = await response.json()
        showPopular = popular.results.slice(0, 8)

    }
    const obtenerNowPayin = async ()=> {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWM1NzgyMTllMDdlODAwMTJmMTJjYzRlNjEwZTYxNiIsIm5iZiI6MTcyNzAxNTU0Mi44NTMzODUsInN1YiI6IjY2ZjAwZmMxYjM0OGJlYTRlYjNiNjFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uH7T4EbX2dUKREMQtRzMu539GZLCeOhPXsQuFHWyD9A'

            }
        };
        const response = await fetch(url, options);
        now = await response.json()
        showNow = now.results.slice(0, 8)

    }
    const obtenerUpcoming = async ()=> {
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWM1NzgyMTllMDdlODAwMTJmMTJjYzRlNjEwZTYxNiIsIm5iZiI6MTcyNzAxNTU0Mi44NTMzODUsInN1YiI6IjY2ZjAwZmMxYjM0OGJlYTRlYjNiNjFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uH7T4EbX2dUKREMQtRzMu539GZLCeOhPXsQuFHWyD9A'

            }
        };
        const response = await fetch(url, options);
        upcoming = await response.json()
        showUpcoming = upcoming.results.slice(0, 8)

    }
    await obtenerPopulares();
    await obtenerNowPayin();
    await obtenerUpcoming();
    return (
        <div className={styles.container}>
            <div>
                <h2>Popular</h2>
                <div className={styles.container_categoria}>
                    {showPopular && showPopular.map(pelicula => (
                        <MovieCard
                            image={pelicula.poster_path}
                            title={pelicula.title}
                            release_date={pelicula.release_date}
                            rate={pelicula.vote_average}
                            key={pelicula.id} />
                    ))}
                </div>
            </div>
            <div>
                <h2>Now Paying</h2>
                <div className={styles.container_categoria}>
                    {showNow && showNow.map(pelicula => (
                        <MovieCard
                            image={pelicula.poster_path}
                            title={pelicula.title}
                            release_date={pelicula.release_date}
                            rate={pelicula.vote_average}
                            key={pelicula.id} />
                    ))}
                </div>
                
            </div>
            <div>
                <h2>Upcoming</h2>
                <div className={styles.container_categoria}>
                    {showUpcoming && showUpcoming.map(pelicula => (
                        <MovieCard
                            image={pelicula.poster_path}
                            title={pelicula.title}
                            release_date={pelicula.release_date}
                            rate={pelicula.vote_average}
                            key={pelicula.id} />
                    ))}
                </div>
                
            </div>
        </div>
    )
}