import './App.css';
import './tags/Header.css'
import './tags/Main.css'
import	'./tags/Footer.css'
// import Grafico from './components/grafico';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Header from './tags/Header';
import Main from './tags/Main'
import Footer from './tags/Footer'

function App() {
  // const notify = () => toast.success("Atualizado com sucesso!");

  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
