import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dati from './books/history.json'


function BasicExample(props) {
  const { title, descrizione } = props.dati; // Estrai title e descrizione

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title> {/* Usa title */}
        <Card.Text>
          {descrizione} {/* Usa descrizione */}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <div className="container">
      {dati.map((libro, indice) => (
        <BasicExample key={indice} dati={libro} />
      ))}
    </div>
  );
}

export default App;

