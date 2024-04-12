import './App.css'
import './NavBar'
import NavBar from './NavBar';
import companyLogo from '/public/vaizar image.png';

function App() {
  return (
    // <React.StrictMode>
    //   <h1>Hello</h1>
    // </React.StrictMode>
    <div>
      <NavBar />
      <img src={companyLogo} className='companyLogo' alt="Vaizar.png" />
    </div>
  )
}

export default App;