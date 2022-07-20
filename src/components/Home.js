import React, {useState} from 'react';
import './Counter.css'
const Home = () => {
  
    const [count, setCount] = useState(0);
    function handleAdd(){
        setCount(count+1);
    }
    function handleSubtract(){
        setCount(count-1)
    }
    return (
    <div>
      <h2>My React Counter</h2>
      <div className='count'>{count}</div>
      <button className='subtract' onClick={handleSubtract}>-</button>
      <button className='add' onClick={handleAdd}>+</button>
    </div>

  );
}

export default Home;

