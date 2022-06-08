
import { useEffect, useState } from 'react';
import './App.css';
import BarChart from './BarChart'
import Form from './Form';

function App() {
  
  const [countList, setCountList] = useState([]);

  const [data, setData] = useState( [
    ["Tutors", "Popularity"],
    ["Zsolt", 0],
  ["Sky", 0],
  ["Stan", 0],
  ])


  const handleVote = (voteName) => {
    setCountList([...countList,voteName])
    // [voteName, count = num_of_voteName]
  }

  useEffect(() => {
    for(let i=1; i<data.length; i++){
      for (let vote of countList){
        console.log(vote);
        if( vote === data[i][0]){
          data[i][1]+=1
        }
      }
    }
    console.log(data);
    
    
    setData([...data])
  },[countList])

  return (
    <>
    <Form handleVote={handleVote}/>
    <BarChart data = {data}/>
    </>
 
  );
}

export default App;
