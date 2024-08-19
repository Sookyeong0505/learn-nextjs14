import Link from "next/link";

export const metadata = {
    title: 'Home',
}

const api_url = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function fetchMovies() {
    const response = await fetch(api_url);
    const json = await response.json();
    return json;
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