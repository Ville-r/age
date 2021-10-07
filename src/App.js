import {useState} from 'react';

const URL = 'https://api.agify.io/?name=';
const country = '&country_id=FI';

function App() {
  const [name,setName] = useState('');
  const [age,setAge] = useState(0);

  async function predict(e) {
    e.preventDefault();
    try {
      const address = URL + name + country;
      const response = await fetch(address);
  
      if (response.ok) {
        const json = await response.json();
        setAge(json.age);
      } else {
        alert('Error on predicting your age.');
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div style={{margin: 45}}>
      <form onSubmit={predict}>
        <h1>Your age</h1>
        <p>Enter your name and let the algorithm predict your age. Lets start!</p>
        <div style={{margin: 10}}>
          <label>Name</label>&nbsp;
          <input type="text" placeholder="Your name here"
          value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div style={{margin: 10}}>
          <button>Press here</button>
        </div>
        <div style={{margin: 10}}>
          <output>Your age is&nbsp;{age}&nbsp;years.</output>
        </div>
      </form>
    </div>
  );
}

export default App;
