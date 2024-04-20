'use client'
import './input-reserve.css'

interface InputReserveProps {
  text: string;
  value: number;
  setValue: (value: number) => void;
}

const InputReserve = ( props:InputReserveProps ) => {
  return (
    <div className="rv-input-reserve flex">
      <label>{props.text}</label>
      <div className="flex items-center">
        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded-l focus:outline-none" onClick={() => props.value > 0 ? props.setValue(props.value - 1) : null}>-</button>
        <input type="text" className="w-16 px-2 py-1 bg-white text-gray-700 border border-gray-400 rounded-none focus:outline-none text-center" value={props.value} />
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r focus:outline-none" onClick={() => {props.setValue(props.value + 1)}}>+</button>
      </div>
    </div>
  )
}

export default InputReserve
