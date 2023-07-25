// import { Link } from "react-router-dom";
import './style.scss'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="error-page">
            <h1 className="error-page__text">404 | Not Found</h1>
            <Link to="/" className="error-page__button">
                Back to Home
            </Link>
        </div>
    )
}
