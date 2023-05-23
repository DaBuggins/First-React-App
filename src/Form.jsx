


export default function(){
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        console.log("submitted form")
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}