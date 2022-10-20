import React ,{ useMemo } from 'react'
import { Mensaje , Header, Total } from './components/index'
import { topics } from './utils/data'

const App = () => {

  const numArr =  useMemo(() => topics?.map((item)=>item?.value), []); // generar un nuevo arreglo como tu quieras 
// const numArrFil =  topics?.filter((item)=> item?.value < 10) // generar un nuevo arreglo como tu quieras 
// console.log(numArrFil);
const suma = useMemo(() => numArr.reduce((a,b)=>a+b), [numArr]);

  return (
    <div>
      <Header course='Half Stack application development' />
      {topics.map((cadaItem,i)=> <Mensaje key={i} label={cadaItem.title} value={cadaItem.value} />)}
      <Total texto='Esta es la suma: ' suma={suma} />
    </div>
  )
}

export default App