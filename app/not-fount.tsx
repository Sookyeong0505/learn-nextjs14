import {Metadata} from "next";

export const metadata = {
    title: 'Not Found',
}

export default function NotFound() {
    return (
        <div>
        <h1>Not Found!!</h1>
        <p>This is the 404 page.</p>
        </div>
    );
}