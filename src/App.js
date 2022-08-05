import logo from './logo.svg';
import './App.css';
import Fetch from './Fetch';
import Test from './test';
import Main from './main';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Test/>
            </header>
            <main>
            <Main></Main>
            </main>
        </div>
    );
}

export default App;
