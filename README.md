- components
-object destrecturing 
-optional chaning 
-fall back url
-array methods
-swiper js webisite
-closers


*********************************************** Props start ************************************************************8

-Props = Properties. They are data passed from a parent component to a child component.


-How to pass props:

        Type	    Syntax
        String	    name="Rahul"
        Number	    age={25} ← curly braces
        Boolean	    isActive={true} or just isActive
        Variable	name={userName}
        Object	    user={{ name: "Rahul" }}
        Array	    hobbies={["coding", "gaming"]}
        Function	onClick={handleClick}



-Destructuring Props =  Destructing is a js properities that let us pull the data from object in one line.

                        -Instead of writing props.name, props.age everywhere, destructure:
                        -There are two ways of Destructuring 
                                        a. inside function body :
                                                        function Card(props) {
                                                        const { name, role, city } = props;   // ← unpack the box once

                                        b. in the paremeter of fucntion:
                                                function Card({ name, role, city }) 

            // ❌ Verbose
            function User(props) {
            return <h2>{props.name} is {props.age}</h2>;
            }

            // ✅ Destructure in parameter (most common)
            function User({ name, age }) {
            return <h2>{name} is {age}</h2>;
            }

            // ✅ Destructure inside body (also valid)
            function User(props) {
            const { name, age } = props;
            return <h2>{name} is {age}</h2>;
            }

            
-Default Props = If a parent doesn't pass a prop, you can set a default value:

            function Button({ text = "Click Me", color = "blue" }) {
            return <button style={{ color }}>{text}</button>;
            }

            <Button />                    // Renders: "Click Me" in blue
            <Button text="Submit" />      // Renders: "Submit" in blue
            <Button text="Submit" color="red" /> // "Submit" in red

-The children Prop = Everything between opening and closing tags becomes the children prop.

            function Card({ children }) {
            return <div className="card">{children}</div>;
            }

            // Usage
            <Card>
            <h1>Hello</h1>
            <p>This is inside the card</p>
            </Card>

-Props are Read-Only (Immutable) = You cannot modify props inside a child. This is a top interview question.

        function User({ name }) {
        name = "Hacker"; // ❌ NEVER DO THIS
        return <h1>{name}</h1>;
        }
-Passing Functions as Props = 

                function App() {
                const handleDelete = (id) => {
                    console.log("Deleting", id);
                };

                return <Item id={1} onDelete={handleDelete} />;
                }

                function Item({ id, onDelete }) {
                return <button onClick={() => onDelete(id)}>Delete</button>;
                }

                ⚠️ Don't do this: onClick={onDelete(id)} — this calls immediately during render.
                ✅ Do this: onClick={() => onDelete(id)} — this calls on click.



-Prop Drilling = When you pass props through many nested components just to reach a deep child:


            <App> → <A user={user} /> → <B user={user} /> → <C user={user} /> → <D user={user} />
            Problem: Ugly, hard to maintain

            Solutions (know the names): Context API, Redux, Zustand, component composition

            You don't need to master these now — just know the term and why it's a problem.

- Spread Operator with Props = Useful when you have many props or passing down props received by a wrapper.




            const userProps = { name: "Rahul", age: 25, city: "Delhi" };

            <User {...userProps} />
            // Same as:
            <User name="Rahul" age={25} city="Delhi" />




-PropTypes = Props are not type-checked by default. prop-types adds runtime warnings:


            import PropTypes from "prop-types";

            function User({ name, age }) {
            return <h2>{name} - {age}</h2>;
            }

            User.propTypes = {
            name: PropTypes.string.isRequired,
            age: PropTypes.number,
            };

*********************************************** Props end ************************************************************8



*********************************************** Hooks start***********************************************
-The Problem Before Hooks
        Before 2019, React components had two types:
        Class components — could hold state (data that changes), but ugly syntax
        Function components — clean syntax, but no state

-Before Hooks, if you wanted a component to have memory (state) or do something when it loads, you had to write a long, complicated JavaScript class. Hooks let you do all of that inside simple, normal functions.

-React Hooks are special functions that let you add "features" (like memory or actions) to your components.



=================================== How hooks works ======================================
CLICK
  ↓
setCount(count + 1)   ← uses current count, sends new value to notebook
  ↓
React writes new value in notebook + schedules re-render
  ↓
React runs Counter() again
  ↓
useState reads notebook → gives you NEW count
  ↓
Screen shows NEW count

==================================================================================

// ❌ Can be buggy when called multiple times and it is not bug if you call only one time
setCount(count + 1);

// ✅ Always safe
setCount(prev => prev + 1);


-1 useState Mistake: Object State

                const [user, setUser] = useState({ name: "Rahul", age: 25 });

                // ❌ WRONG — replaces the whole object, name is LOST
                setUser({ age: 26 });

                // ✅ RIGHT — spread old values, only change age
                setUser({ ...user, age: 26 });


 ========================================================= Patterns =================================================

-Counter

        const [count, setCount] = useState(0);
        setCount(prev => prev + 1);

-Boolean Toggle 
        const [isOpen, setIsOpen] = useState(false);
        setIsOpen(prev => !prev);


- Controlled Input

                const [text, setText] = useState("");
                <input value={text} onChange={e => setText(e.target.value)} />

-Form Object

                const [form, setForm] = useState({ name: "", email: "" });
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />

-Array of Items

                const [items, setItems] = useState([]);
                setItems(prev => [...prev, newItem]);                        // add
                setItems(prev => prev.filter(i => i.id !== id));             // remove
                setItems(prev => prev.map(i => i.id === id ? newItem : i));  // update

-Lazy Initialization (for expensive initial values)

                const [data, setData] = useState(() => JSON.parse(localStorage.getItem("data")));



 ===========================================================================================================               

Function components — clean syntax, but no state
-it is a kind of function , ti controal data management life cycle, to identify written use in prifix.
-without class component we can write funcanalities
- it let us use state(data, variable), life cycle feature.
-context management, data sharing .

*********************************************** Hooks  end ***********************************************


*********************************** useEffect ********************************************************8


*********************************** useEffect ********************************************************8
library exios - for api to get data from backend 
