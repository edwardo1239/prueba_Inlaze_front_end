import styles from './filtros.module.css'

export default async function Filtros() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWM1NzgyMTllMDdlODAwMTJmMTJjYzRlNjEwZTYxNiIsIm5iZiI6MTcyNzAxNTU0Mi44NTMzODUsInN1YiI6IjY2ZjAwZmMxYjM0OGJlYTRlYjNiNjFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uH7T4EbX2dUKREMQtRzMu539GZLCeOhPXsQuFHWyD9A'

        }
    };
    const response = await fetch(url, options);
    const genres = await response.json()

    return (
        <div className={styles.container}>
            <div className={styles.container_search}>
                <h2>Search</h2>
                <div className={styles.container_input}>
                    <input placeholder='Keywords' type="text" className={styles.input_search} />
                    <svg className={styles.svg_input} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8048 14.862L11.8254 10.8826C12.9098 9.55637 13.443 7.86404 13.3147 6.15568C13.1863 4.44733 12.4062 2.85366 11.1358 1.70432C9.8654 0.554984 8.20183 -0.0620951 6.48919 -0.0192739C4.77656 0.0235473 3.1459 0.722992 1.93451 1.93439C0.723114 3.14578 0.0236694 4.77644 -0.0191518 6.48907C-0.0619731 8.2017 0.555106 9.86528 1.70445 11.1357C2.85379 12.4061 4.44745 13.1862 6.15581 13.3145C7.86416 13.4429 9.5565 12.9097 10.8828 11.8253L14.8621 15.8046C14.9878 15.9261 15.1562 15.9933 15.331 15.9918C15.5058 15.9902 15.673 15.9201 15.7966 15.7965C15.9203 15.6729 15.9904 15.5057 15.9919 15.3309C15.9934 15.1561 15.9262 14.9877 15.8048 14.862ZM6.66677 12C5.61193 12 4.58079 11.6872 3.70372 11.1011C2.82666 10.5151 2.14308 9.68216 1.73941 8.70762C1.33574 7.73308 1.23012 6.66073 1.43591 5.62616C1.6417 4.5916 2.14965 3.64129 2.89553 2.89541C3.64141 2.14953 4.59172 1.64158 5.62628 1.43579C6.66085 1.23 7.7332 1.33562 8.70774 1.73929C9.68228 2.14295 10.5152 2.82654 11.1013 3.7036C11.6873 4.58066 12.0001 5.61181 12.0001 6.66664C11.9985 8.08064 11.4361 9.43628 10.4362 10.4361C9.4364 11.436 8.08077 11.9984 6.66677 12Z" fill="#F6F6F6" />
                    </svg>
                </div>
            </div>
            <div className={styles.container_search}>
                <h2>Genres</h2>
                <div className={styles.container_input}>
                    <select className={styles.input_select}>
                        <option value=""></option>
                        {genres && genres.genres.map((genre, index) => (
                            <option value={genre.id} key={index + genre.id}>{genre.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}