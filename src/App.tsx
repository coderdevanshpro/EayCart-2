
import { ChangeEvent, useState } from 'react';
import { MouseEvent } from 'react';
import ProductDetail from './ProductDetail.tsx'
import Button from './Button.tsx';
import Greeting from './Greeting.tsx';
import Greeting2 from './Greeting2.tsx';


function App() {
  const [count,setCount] = useState<number>();
  function Increment(event:MouseEvent<HTMLButtonElement>)
  {
    console.log(event.target);
  }
  function handleChange(event:ChangeEvent<HTMLInputElement>)
  {
    console.log(event.target.value);
  }

  return (
    <>
    {/* <Button>SignUp</Button>
    <button onClick={Increment}></button>
    <input onChange={handleChange}></input>
      <ProductDetail title="iPhone" description="hello world" price={99}></ProductDetail> */}
      <Greeting name="Dumbledore"></Greeting>
      <Greeting2 name="Harry Puttar"></Greeting2>
    </>
  )
}

export default App;
