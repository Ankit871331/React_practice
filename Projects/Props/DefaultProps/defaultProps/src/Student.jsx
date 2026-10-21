
const Student = ({ studentName = "default", rollNo, nameOfClass}) => {
    return (
        <div className="student">
            <h3>{studentName}</h3>
            <h6>{rollNo}</h6>
            <h6>{nameOfClass}</h6>

        </div>
    )
}

export default Student