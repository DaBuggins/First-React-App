import './App.css';
import Chicken from './Chicken';
import Greeter from './Greeter';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import Clicker from './Clicker';
import Form from './Form';

const data = [
  { id: 1, item: "egg", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: false },
  { id: 3, item: "chicken breasts", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
]

function App() {
  return (<div>
 
    <Clicker message="Hi!!!" buttonText="Please Click Me" />
    <Clicker message="Please stop clicking fool" buttonText="DO NOT TOUCH" />
    <Form />
    {/* <ShoppingList items={data} />
    <Slots val1="🍒" val2="🍒" val3="🍒" />
    <Heading color="magenta" text="Welcome!" fontSize="50px" />
    <DoubleDice />
    <DoubleDice />
    <DoubleDice />
    <ColorList colors={["red", "pink", "purple"]} />
    <Greeter /> */}
  </div>);
}

export default App;
