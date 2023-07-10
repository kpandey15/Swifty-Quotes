import logo from './logo.svg';
import './App.css';
import QuoteData from './component/QuoteData/QuoteData';
import Header from './component/Header/Header';
import Random from './component/Random/Random';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="app-container">
      <div className="left-panel">
      <QuoteData />
      </div>
      <div className="right-panel">
        <Random />
      </div>
    </div>
      <Footer name={"kohina pandey"}></Footer>
    </div>
  );
}

export default App;
