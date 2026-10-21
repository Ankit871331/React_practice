// App.jsx
import Card from "./Card";
import cardsData from "./data";
import "./App.css";
import StudentCard from './StudentCard'; 
import StudentData from './secondData'

function App() {
  return (
    <div className="app">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          role={card.role}
          city={card.city}
          image={card.image}
        />
      ))}

{StudentData.map((student)=>(
      <StudentCard
      key = {student.id}
      rollNo = {student.rollNo}
      name = {student.name}
      image = {student.image}
      class = {student.class}
      />

))}
    </div>
  );
}

export default App;