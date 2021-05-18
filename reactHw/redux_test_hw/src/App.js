import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Routes from "./Routes/Routes";


function App() {
    return (
        <Router>
            <div className="App">
                <Routes/>
            </div>
        </Router>
    );
}

export default App;
