import  React  from 'react';
import { store } from './reducers/index.js';
import { DECREMENT_ACTION, INCREMENT_ACTION } from './actions/index';
import Counter from './components/Counter.js';



function App() {
store.dispatch(INCREMENT_ACTION)
store.dispatch(DECREMENT_ACTION)


  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;
