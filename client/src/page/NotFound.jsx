import "./NotFound.css";

function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Sorry, page not found!</h2>
            <p>
                Sorry, we couldn’t find the page you’re looking for.
                Perhaps you’ve mistyped the URL? Be sure to check your spelling.
            </p>

            <a href="/" className="home-btn">
                Go Back Home
            </a>
        </div>
    );
}

export default NotFound;