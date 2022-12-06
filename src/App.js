import './App.css';
import Header from './components/Header';
import{Route, Routes} from 'react-router-dom'
import Home from './screens/Home';
import Reference from './screens/Reference';
import Details from './screens/Detail';

function App() {
  return (
    <div className="App col-container">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reference" element={<Reference/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </div>
  );
}

export default App;
