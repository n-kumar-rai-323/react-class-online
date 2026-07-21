function Event() {
    function handleClick(event) {
        console.log(event)
    }
    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}
export default Event