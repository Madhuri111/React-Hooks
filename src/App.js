import './App.css';
import StateHook from './Hooks/StateHook'
import StateHookFour from './Hooks/StateHookFour';
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
      <br />
      <br />
      <StateHookFour />
    </div>
  );
}

export default App;
