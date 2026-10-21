import EmployeeCard from "./EmployeeCard"
import data from './data'


function App() {
 
  return (
    <>
{data.map((d) =>(
<EmployeeCard
key={d.id}
name={d.name}
empID={d.empID}
companyName={d.companyName}
/>

))};
    </>
  )
}

export default App
