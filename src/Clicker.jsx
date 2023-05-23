


export default function Clicker({buttonText, message}) {
    const handleClick = () => {
        alert(message)
      }
    return (
        <div>
        <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}







// function handleHover(){
//     console.log("hovered")
// }
// export default function Clicker(){
//     return (
//         <div>
//             <p onMouseOver={handleHover}>Hover Over Me</p>
//             <button onClick={handleClick}>Click</button>

//         </div>
//     )
// }