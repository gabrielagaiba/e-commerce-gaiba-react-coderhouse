import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import './scss/style.scss';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Gaby" />
      <ItemDetailContainer />
    </>
  )
}

export default App;