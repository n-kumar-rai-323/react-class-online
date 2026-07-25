// Pass different Props

function Button({ text, onClick, color }) {
    return (
        <button onClick={onClick} style={{
            backgroundColor: color,
            color: "white",
            margin: "5px",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer"
        }}>{text}</button>
    )
}

export default Button;