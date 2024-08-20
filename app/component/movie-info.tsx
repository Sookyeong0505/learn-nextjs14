import {API_URL} from "../API_URL";
import styles from "../styles/movie-info.module.css";

async function getMovies(id:string) {
    console.log(`Fetching movie: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getMovies(id);
    return (
    <div className={styles.container}>
        <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p>⭐{movie.vote_average.toFixed(1)}</p>
            <p>{movie.overview}</p>
            <a href={movie.homepage}>Homepage</a>
        </div>
    </div>
    );
}