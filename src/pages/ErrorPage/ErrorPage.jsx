// import { Link } from "react-router-dom";
import "./style.scss";

function ErrorPage() {

  return (
    <div className="error-page">
        <h1 className="error-page__text">404 | Not Found</h1>
        <a href="/" className="error-page__button">Back to Home</a>
    </div>
  )
}

export default ErrorPage
