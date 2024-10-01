import { useEffect, useState } from 'react';
import './App.css';
import banner from './Group 44.png'
import Card from './card/Card';

function App() {

const[search,setsearch] = useState('');

const[news,setnews] = useState([]);


const API_KEY = "a5daf6ebbd924ef09b1a52e77a856399";

const getdata = async() =>{
const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
const data = await response.json();
console.log(data.articles);
setnews(data.articles);
}



const userinput = (e)=>{
  setsearch(e.target.value);
}

  return (
    <div className="App">

<div className='navbar'>

 <div className='nav-logo'>
  Bharat 24/7
 </div>

 <div className='nav-menu'>
  <ul>
   <li>Home</li>
   <li>About</li>
   <li>Contact</li>
  </ul>
 </div>


<div className='nav-search'>
<input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="Search for news"/>
<button onClick={getdata}>Search</button>
</div>

</div>

{/* btns */}

<div className='btns'>
  <div onClick={userinput} value='cricket' className='btn-1'>CRICKET</div>
  <div onClick={userinput} value='football' className='btn-1'>FOOTBALL</div>
  <div onClick={userinput} value='india' className='btn-1'>INDIA</div>
  <div onClick={userinput} value='virat kohli' className='btn-1'>VIRAT KOHLI</div>
  <div onClick={userinput} value='ronaldo' className='btn-1'> RONALDO</div>
  <div onClick={userinput} value='politics' className='btn-1'>POLITICS</div>
</div>

<div className='banner'>
<img src={banner} alt=''/>
</div>

<div>
  <Card data={news}/>
</div>
  
    </div>
  );
}

export default App;
