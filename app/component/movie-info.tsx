import {API_URL} from "../API_URL";

async function getMovies(id:string) {
    console.log(`Fetching movie: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getMovies(id);
    return (
    <h6>{JSON.stringify(movie)}</h6>
    );
}