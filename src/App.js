import QrCode from './components/qr-code/qr-code';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App pt-5">
      <h1>QR Code Generator</h1>
      <QrCode />
    </div>
  );
}

export default App;
