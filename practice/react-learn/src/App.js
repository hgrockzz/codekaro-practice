import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

let users = ['Harshit', 'Amit', 'Sanjeev', 'Anant', 'Vishal', 'Sanchit', 'Tushar']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Version {Math.floor(Math.random() * (100-90 +1)+90)}</h1>
        {/* printing random no.'s from 90 to 100 (if +1 not used then 100 will not include)*/}
        <p>Welcome {users[Math.floor(Math.random() * 7)]}</p>
      </header>
      <div className="flex">
      <Card title="Dance Classes" img="https://source.unsplash.com/600x350/?dancing" des="We provide dance classes with amazing tutorials.. training by world class choreographers"/>
      <Card title="Singing Classes" img="https://source.unsplash.com/600x350/?singing" des="We provide singing classes promising melodious vocals.. training by various stage performers"/>
      <Card title="Act/Drama Classes" img="https://source.unsplash.com/600x350/?acting-movie" des="We provide acting / drama classes with face expressions training and timed dialogue delivery"/>
      </div>
    </div>
  );
}

export default App;
