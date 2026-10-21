
import './App.css'
import data from './data'
import Student from './Student'
function App() {

  
  return (
    
    <>
    
    {data.map((d)=>(

<Student

key={d.id}
studentName={d.name}
nameOfClass={d.class}
/>

    ))}

    </>
  )
}

export default App
