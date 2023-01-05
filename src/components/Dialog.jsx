import './dialog.scss'

export function Dialog(props) {
    return (
        <div id="dialog-box">
            <p>{props.text}</p>
        </div>
    )
}