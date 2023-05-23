export default function ColorList({colors}) {
    const lis = colors.map(color => <li style={{color}}>{color}</li>)
    return (
        <div>
            <p>Color List</p>
            <ul>{lis}</ul>
        </div>
    )
}