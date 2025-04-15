import React, { memo } from "react"

interface InputProps {
    value: string | number
    onChange: React.ChangeEventHandler<HTMLInputElement>
    onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
}

const Input = ({ value, onChange, onKeyDown }: InputProps) => {
    return (<div className="mb-4">
        <label htmlFor="radius">Enter a radius to determine the area of a circle</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-1"
            id="radius"
            placeholder="Radius"
            value={value}
            type="text"
            onKeyDown={onKeyDown}
            onChange={onChange}
            min={0} />
        {/* User input validation could be done at the html input level by using "type=number" */}
    </div>)
}

export default memo(Input)