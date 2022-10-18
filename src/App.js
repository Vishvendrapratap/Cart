import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProuctList from './Components/ProuctList';

function App() {
  const product = [
    {
      price: 99999,
      name: "IPhone 13 pro",
      quantitty: 0,
    },
    {
      price: 9999,
      name: "redmi 11",
      quantitty: 0,
    }
  ]

  
  return (
    <>
    <Navbar />
    <ProuctList product={product} />
    {/* <Footer /> */}
    
    </>
  );
}

export default App;
 