import './Button.css';

function Button(props) {
    return (
        <button onClick={props.event} className="modern-button">
            {props.text}
        </button>
    );
}

export default Button;
