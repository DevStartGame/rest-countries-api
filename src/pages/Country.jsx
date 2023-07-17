import { useParams } from "react-router-dom";

export default function Country() {
    const { id } = useParams();

    return (
        <>
            <h1>país: {id}</h1>
        </>
    );
}
