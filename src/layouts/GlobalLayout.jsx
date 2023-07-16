import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
    return (
        <>
            <h1>Layout global</h1>
            <Outlet />
        </>
    );
}
