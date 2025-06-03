import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import BookTable from './components/BookTable';

function App() {
  return (
    <div style={{background: '#333', minHeight: '100vh'}}>
      <Header />
      <Carousel />
      <Menu />
      <BookTable />
    </div>
  );
}

export default App;
