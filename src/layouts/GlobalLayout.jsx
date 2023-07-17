import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
    return (
        <>
            <h1>layout global</h1>
            <Outlet />
        </>
    );
}
