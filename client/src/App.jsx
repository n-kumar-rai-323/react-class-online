import Button from "./components/Button";

function App() {
    function handleDelete() {
        alert("Delete Button Clicked")
    }
    function handleSave() {
        alert("Save Button Clicked")
    }

    const buttons = [
        {
            id: 1,
            text: "Save",
            onClick: () => alert("Save Clicked"),
            color: "green"
        },
        {
            id: 2,
            text: "View",
            onClick: () => alert("View Clicked"),
            color: "orange"
        },
        {
            id: 3,
            text: "Delete",
            onClick: () => alert("Delete Clicked"),
            color: "red"
        }, {
            id: 4,
            text: "Edit",
            onClick: () => alert("Edit Clicked"),
            color: "blue"
        }
    ]
    return (
        <>
            <Button text="Delete" onClick={handleDelete} />
            <Button text="Save" onClick={handleSave} />

            {buttons.map((button) => (
                <Button key={button.id} text={button.text} onClick={button.onClick} color={button.color} />
            ))}
        </>
    )
}

export default App;

// Create a React app with two dropdowns.Selecting Nepal cities, selecting India shows indian Cities and if not country is selectd
// on city dropdown is displayed. 