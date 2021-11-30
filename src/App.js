import './App.css';
import Navigation from './Navigation';
import CenterContent from './CenterContent/centerContent';
import Footer from './footer';
import Header from './header';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Navigation/>
      <CenterContent/>
      
      <Footer/>
    </div>
  );
}

export default App;
