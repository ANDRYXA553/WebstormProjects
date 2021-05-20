import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TodoList from "./components/todoList";
import {store} from "./redux";
import {Provider} from "react-redux";

function App() {
    return (<Provider store={store}>
        <Router>
            <div className="App">
              <TodoList/>
            </div>
        </Router>
        </Provider>
    );
}

export default App;
