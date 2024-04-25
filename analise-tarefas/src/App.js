import './App.css';
import Grafico from './components/grafico';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast.success("Atualizado com sucesso!");

  return (
    <div className="App">
      <Grafico />
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
