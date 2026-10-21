

const StudentCard = (props) => {
    return (
        <div className="student">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <h6>{props.rollNo}</h6>
            <h6>{props.class}</h6>

        </div>
    )
}

export default StudentCard