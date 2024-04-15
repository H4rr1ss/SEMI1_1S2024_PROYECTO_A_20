'use client'
import '../input-admin/input-admin.css'

interface InputProfileProps {
    inputType: string;
    text: string;
    value: string;
    disabled: boolean;
    setInfo: (value: string) => void;
}

const InputProfile = ( props:InputProfileProps ) => {

    const handle = (value: string) => {
        props.setInfo(value);
    }

    return (
        <div className="input-field">
            <input
                type={props.inputType}
                required
                value={props.value}
                disabled={!(props.disabled)}
                onChange={(event) => handle(event.target.value)}
            />
            <label>{props.text}</label>
        </div>
    )
}

export default InputProfile