import MovieInfo, { getMovies } from "../../../component/movie-info";
import MovieVideos from "../../../component/movie-videos";
import {Suspense} from "react";

interface IParameter {
    params: {
        id: string;
    };

}
export async function generateMetadata({params: {id},}: IParameter) {
    const movie = await getMovies(id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage({ params: { id } }: IParameter) {

    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}