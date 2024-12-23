import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TickectForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";

function App() {
  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TickectForm dispatch={dispatch}></TickectForm>
      </div>
    </div>
  );
}

export default App;
