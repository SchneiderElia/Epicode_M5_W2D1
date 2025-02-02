import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';


function AlertDismissibleExample() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Hello Welcome in Epibooks!</Alert.Heading>
                <p>
                    Benvenuto nella nostra community di amanti della lettura!
                    Scopri un vasto catalogo di ebook di ogni genere,
                    dalle ultime novità ai classici intramontabili.
                    <br></br>
                    Esplora le nostre sezioni e trova la tua prossima lettura preferita.
                </p>
            </Alert>
        );
    }

}

export default AlertDismissibleExample;