import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './components/toolkit/counterSlice'
// import fetchUserById from './components/toolkit/counterSlice' 
import { getPosts } from './components/toolkit/counterSlice'

function App() {
  // const myState=useSelector(state=>state.counter.entities)
  const { entities} = useSelector((state) => state.posts)
  const dispatch=useDispatch()
  return (
    <>
    <div className='container'>        
      <h1>Counter App</h1>
      {/* <button  onClick={()=>dispatch(increment())}>Increment</button> */}
      {/* <h1>{myState}</h1> */}
      {/* <button onClick={()=>dispatch(decrement())}>Decrement</button> */}
      <button onClick={()=>dispatch(getPosts())} > get fetch</button>

      <ol>
        {entities.map(data=>{
          return <li>{data.title}</li>
        })}
      </ol>

    </div>
    </>
  );
}

export default App;
