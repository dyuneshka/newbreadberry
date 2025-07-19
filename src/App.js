import React from 'react'; 
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Homepage from './components/page/Homepage'
import axios from 'axios';
import Footer from "./components/Footer"
import EveryCard from './components/page/EveryCard';




function App() {

  const [items, setItems] = React.useState([])

  React.useEffect(() => {
      axios.get("http://localhost:3000/homeitems")
      .then((response) => {
        console.log("response.data:", response.data);
        setItems(response.data)
      })
     
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>   
        <Route path = "/" element = {<Homepage  data={items}/>}></Route>    
        <Route path = "/assortment" element = { <EveryCard data={items}/>}></Route>   
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
