import Link from "next/link";
import {API_URL} from "../API_URL";

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
    <div>
        {movies.map(movie => (
            <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
        ))}
    </div>
  );
}