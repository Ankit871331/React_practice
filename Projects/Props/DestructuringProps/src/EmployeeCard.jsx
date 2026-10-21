
const EmployeeCard = ({name, empID, companyName}) => {
  return (

    <div className="employee">

    <h1>{name}</h1>
    <h6>{empID}</h6>
    <h6>{companyName}</h6>
    </div>

)
}

export default EmployeeCard