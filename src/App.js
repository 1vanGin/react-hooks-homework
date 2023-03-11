import './App.css';
import {ViewportSizeHook} from "./ViewportSizeHook";
// import {FetchHook} from "./FetchHook";
// import {LocalStorageHook} from "./LocalStorageHook";
// import {HoverHook} from "./HoverHook";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<FetchHook />*/}
                {/*<LocalStorageHook />*/}
                {/*<HoverHook />*/}
                <ViewportSizeHook />
            </header>
        </div>
    );
}

export default App;
