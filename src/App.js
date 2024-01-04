import React, { useState } from 'react';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import Countdown from 'react-countdown';
import Select from 'react-select';
import './App.css';

function Envelope({ onClick }) {
  return (
    <div className="envelope" onClick={onClick}>
      <div className="envelope-cover">
        <div className="envelope-front"></div>
        <div className="envelope-back"></div>
      </div>
    </div>
  );
}

function LocationButtonC() {
  const openLocationLink = () => {
    // Reemplaza 'TU_ENLACE_DE_UBICACION' con el enlace real de Google Maps o cualquier otro servicio de mapas.
    const locationLink = 'https://maps.app.goo.gl/tDzZ3YwhwFu5BBN88';
    window.open(locationLink, '_blank');
  };

  return (
    <button onClick={openLocationLink}>Ver Ubicación</button>
  );
}

function LocationButtonR() {
  const openLocationLink = () => {
    // Reemplaza 'TU_ENLACE_DE_UBICACION' con el enlace real de Google Maps o cualquier otro servicio de mapas.
    const locationLink = 'https://maps.app.goo.gl/KdRdWyWaYXrdsBpRA';
    window.open(locationLink, '_blank');
  };

  return (
    <button onClick={openLocationLink}>Ver Ubicación</button>
  );
}

function MyButton() {
  // Función que se ejecutará al hacer clic en el botón
  const handleClick = () => {
    alert('¡Hola! ¡Has hecho clic en el botón!');
    // Puedes reemplazar esto con la lógica que desees ejecutar al hacer clic en el botón.
  };

  return (
    <button onClick={handleClick}>Haz clic en mí</button>
  );
}

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  const openEnvelope = () => {
    setEnvelopeOpened(true);
    scrollTo('ceremonia'); // Cambiar a la sección deseada
  };

  const scrollTo = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  // Fecha objetivo para la cuenta regresiva
  const targetDate = new Date('May 11, 2024 16:00:00');
  const options1 = [
    { value: '2', label: 'Mariel Rodriguez' },
    { value: '4', label: 'Fabio Jimenez' },
    { value: '2', label: 'Josue Quesada' },
  ];

  const options2 = [
    { value: 'opcionA', label: 'Vamos todos' },
    { value: 'opcionB', label: 'Solo yo' },
    { value: 'opcionC', label: 'Solo 2' },
  ];

  // Estados para almacenar las selecciones de los dropdowns
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  // Función para manejar el clic en el botón de enviar
  const handleSubmit = () => {
    alert(`Enviado: ${selectedOption1?.label}, ${selectedOption2?.label}`);
    // Puedes agregar aquí la lógica de envío de datos o realizar otras acciones necesarias.
  };
  // Renderizar componente Countdown
  const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Mostrar mensaje cuando la cuenta regresiva haya terminado
      return <span>¡La boda de Shawnny y Favio ha llegado!</span>;
    } else {
      // Mostrar cuenta regresiva en curso
      return (
        <div className="countdown-container">
          <div className="countdown-box">
            <div className="countdown-digit">{days}</div>
            <div className="countdown-label">Días</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-digit">{hours}</div>
            <div className="countdown-label">Horas</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-digit">{minutes}</div>
            <div className="countdown-label">Minutos</div>
          </div>
          <div className="countdown-box">
            <div className="countdown-digit">{seconds}</div>
            <div className="countdown-label">Segundos</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="app">
      {!envelopeOpened && (
        <Element name="portada" className="cover-section">
          <Envelope onClick={openEnvelope} />
        </Element>
      )}
      <Element name="inicio" className="section">
        <h1>Boda de Shawnny y Favio</h1>
        <p>11·05·2024</p>
        <h2>El día más importante de nuestras vidas ha llegado</h2>
      </Element>
      <section className="countdown-section">
        <h2>Sábado 11 de mayo 2024</h2>
        <h2>¡Nos casamos!</h2>
        <Countdown date={targetDate} renderer={CountdownRenderer} />
      </section>

      <Element name="bless" className="section">
        <h2>Con la bendición de Dios y de nuestros padres</h2>
        <h3>Padres de la novia</h3>
        <p>Oldemar Quesada</p>
        <p>Ivet Ortiz</p>
        <h3>Padres del novio</h3>
        <p>Fabio Jiménez</p>
        <p>Isabel Cerdas</p>
        <h2>Compartir estos momentos con ustedes los hace inolvidables.</h2>
      </Element>

      <Element name="thanklfull" className="section">
        <h2>Padrinos</h2>
        <p>Pedrito</p>
        <p>Lupita</p>
        <h2>¡Nos gustaría mucho que nos acompañes!</h2>
      </Element>

      <Element name="ceremonia" className="section">
        <h2>Ceremonia</h2>
        <p>La ceremonia tendrá lugar en...</p>
      </Element>
      <section className="locationC-section">
        <h2>Ubicación</h2>
        <p>¡Nos encantaría que nos acompañaras en nuestra ubicación especial!</p>
        <LocationButtonC />
      </section>
      <Element name="recepcion" className="section">
        <h2>Recepción</h2>
        <p>Únete a nosotros para celebrar...</p>
      </Element>
      <section className="locationR-section">
        <h2>Ubicación</h2>
        <p>¡Nos encantaría que nos acompañaras en nuestra ubicación especial!</p>
        <LocationButtonR />
      </section>

      <Element name="dresscode" className="section">
        <h2>Código de vestimenta</h2>
        <p>No vayan de blanco por favor o los despicho</p>
      </Element>

      <Element name="contact" className="section">
        <h1>Contacto</h1>
        <h2>Novio</h2>
        <MyButton />
        <h2>Novia</h2>
        <MyButton />
      </Element>
      <Element name="confirmation" className="section">
        <h2>Confirmación</h2>
        <h2>Encuentrate o a un representante de tu familia</h2>
        <Select
          options={options1}
          value={selectedOption1}
          onChange={setSelectedOption1}
          placeholder="Selecciona una opción"
        />
        <p>{selectedOption1?.label || 'Ninguna opción seleccionada'}</p>
        <Select
          options={options2}
          value={selectedOption2}
          onChange={setSelectedOption2}
          placeholder="Selecciona una opción"
        />
        <button onClick={handleSubmit}>Enviar</button>
        
      </Element>
      <Element name="goodbye" className="section">
        <h2>Nos gustaría mucho que nos acompañes en este día tan especial</h2>
      </Element>
      
      <footer>
        <p>&copy; Josué Santamaría Ramírez 2024 | Costa Rica</p>
        <p>Contacto: jsantamariar.ce@gmail.com</p>
        <p>Co-diseñadora Mariel Rodriguez Araya</p>
        
      </footer>
    </div>
  );
}

export default App;