import "./NotFound.css"
function NotFound({ error_code, title, message, buttonText, onButtonClick }) {
    return (
        <div className="not-found-container">
            <h1 className="error-code">{error_code}</h1>
            <h2 className="error-title">{title}</h2>
            <p className="error-message">{message}</p>
            <button className="home-button" onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}

export default NotFound