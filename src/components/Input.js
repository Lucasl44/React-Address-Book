export const Input = ({ value, func, label, name }) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input className="input" type="text" name={name} onChange={(e) => func(e.target.value)} value={value}></input>
        </>
    )
}