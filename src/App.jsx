import Navbar from './components/navbar/Navbar'
import '../src/App.css'

function App() {
  //Cremaos una constante para reutilizarla en un futuro
  const links = 
  [{
    id:1,
    text:"home",
    link: "/",
  },
  {
    id:2,
    text:"apod",
    link: "/apod",
  },
  {
    id:3,
    text:"astros",
    link: "/astros",
  },
];
  

  return(
    <> 
    <Navbar header="Space-App 2" links={links} />
    </>);
}
export default App;


