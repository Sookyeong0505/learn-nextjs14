import {API_URL} from "../../../API_URL";

async function getMovies(id:string) {
    console.log(`Fetching movie: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}
async function getVideos(id:string) {
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({params: {id},}: { params: {id:string};}) {
    console.log(`Fetch start: ${Date.now()}`);
    const [movie, videos] = await Promise.all([getMovies(id), getVideos(id)]);
    console.log(`Fetch end: ${Date.now()}`);
    return (
        <div>
        <h1>{movie.title}</h1>
        </div>
    );
}