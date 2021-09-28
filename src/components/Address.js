import "./Address.css"
const Address = (props) => {
    return (
    <div className="outputWrapper">
        <h4 className="output">{props.num} {props.name} {props.number}</h4>
    </div>
    )}

export default Address;