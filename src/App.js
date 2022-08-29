import './App.css';
import React,{useEffect} from 'react';
import {GetData} from './store/action/AsyncFunction.action'
import {incrementValue,decrementValue} from './store/action/buttonAction'
import { useSelector,useDispatch } from "react-redux";

function App() {

  const _data = useSelector(state=>state?.data)
  const _counter = useSelector(state=>state?.buttonReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(GetData())   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  // useEffect(()=>{
  //   console.log(_data)    // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[_data])

  return (
    <div className="App">
      Redux Demo
      <br/>
      <div>

      <button style={{margin:"1rem"}} onClick={()=>dispatch(decrementValue())}>-</button>
      <>{_counter}</>
      <button style={{margin:"1rem"}} onClick={()=>dispatch(incrementValue())}>+</button>
      </div>
      <br/>
      {!_data?'Loading........': JSON.stringify(_data)}
    </div>
    
  );
}
// const mapStateToProps = state => {
//   return {
//     data: state.data
//   };
// };

// export default connect(
//   mapStateToProps,
//   null
// )(App);

export default App;


