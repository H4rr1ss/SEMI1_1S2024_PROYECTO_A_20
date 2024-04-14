'use client'
import './input-admin.css'

interface InputAdminProps {
    inputType: string;
    text: string;
    setInfo: (value: string) => void;
}

const InputAdmin = ( props:InputAdminProps ) => {

    const handle = (value: string) => {
        props.setInfo(value);
    }

    return (
        <div className="input-field">
            <input
                type={props.inputType}
                required
                onChange={(event) => handle(event.target.value)}
            />
            <label>{props.text}</label>
        </div>
    )
}

export default InputAdmin