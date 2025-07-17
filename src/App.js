import React from 'react'; 
import Header from './components/Header'
import Homepage from './components/page/Homepage'
import axios from 'axios';
import Footer from "./components/Footer"





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
        <div>
            <Homepage data={items}/>

        </div>
        <Footer/>

    </div>
  );
}

export default App;
