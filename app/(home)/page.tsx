import Link from "next/link";
import {API_URL} from "../API_URL";
import Movie from "../component/movie";
import styles from "../styles/movie.module.css";

export const metadata = {
    title: 'Home',
}

async function fetchMovies() {
    const response = await fetch(API_URL);
    return await response.json();
}

export default async function HomePage() {
    const movies = await fetchMovies();
  return (
    <div className={styles.container}>
        {movies.map(movie => (
            <Movie title={movie.title} poster_path={movie.poster_path} id={movie.id} />
        ))}
    </div>
  );
}