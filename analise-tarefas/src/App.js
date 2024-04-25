import './App.css';
import './components/Header.css'
// import Grafico from './components/grafico';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';

function App() {
  // const notify = () => toast.success("Atualizado com sucesso!");

  return (
    <div className="App">
        <Header />
    </div>
  );
}

export default App;
