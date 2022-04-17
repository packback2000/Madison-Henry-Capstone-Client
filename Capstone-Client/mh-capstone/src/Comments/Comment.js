export default function Comment(props) {
    console.log(props)
    return (
        <div>
            <p>{props.body}</p>
        </div>
    )
}