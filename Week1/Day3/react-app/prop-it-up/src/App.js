import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  return (
    <div className="App">
      <fieldset>
        <legend>PersonCard.js</legend>
        <PersonCard firstName={'Mayank'} lastName={'Patel'} age={25} hairColor={'brown'} />
        <PersonCard firstName={'Smith'} lastName={'John'} age={88} hairColor={'brown'} />
        <PersonCard firstName={'Fillmore'} lastName={'Millard'} age={63} hairColor={'brown'} />
        <PersonCard firstName={'Doe'} lastName={'Jane'} age={5} hairColor={'brown'} />
      </fieldset>
    </div>
  );
}

export default App;