import './App.css';
import {FetchHook} from "./FetchHook";
import {LocalStorageHook} from "./LocalStorageHook";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<FetchHook />*/}
                <LocalStorageHook />
            </header>
        </div>
    );
}

export default App;
