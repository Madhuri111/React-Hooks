import './App.css';
import StateHook from './Hooks/StateHook'
import StateHookThree from './Hooks/StateHookThree';
import StateHookTwo from './Hooks/StateHookTwo';

function App() {
  return (
    <div className="App">
      <StateHook />
      <br />
      <br />
      <StateHookTwo />
      <br />
      <br />
      <StateHookThree />
    </div>
  );
}

export default App;
