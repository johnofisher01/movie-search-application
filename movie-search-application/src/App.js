import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import SimpleBottomNavigation from './components/MainNav';

function App() {
  return (
    <>
    <Header/>
    <div className="app"></div>
    <SimpleBottomNavigation/>
    </>
  );
}

export default App;
