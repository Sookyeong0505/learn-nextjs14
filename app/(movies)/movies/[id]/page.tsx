
const api_url = 'https://nomad-movies.nomadcoders.workers.dev/movies';
async function getMovies(id:string) {
    console.log(`Fetching movie: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`${api_url}/${id}`);
    return response.json();
}
async function getVideos(id:string) {
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`${api_url}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail(
    {
        params: {id},
    }: {
    params: {id:string};
}) {
    console.log(`Fetch start: ${Date.now()}`);
    const [movie, videos] = await Promise.all([getMovies(id), getVideos(id)]);
    // const movie = await getMovies(id);
    // const vedios = await getVideos(id);
    console.log(`Fetch end: ${Date.now()}`);
    return (
        <div>
        <h1>{movie.title}</h1>
        </div>
    );
}