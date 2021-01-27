import './App.css';
import Menu from './components/Menu/Menu';
import createRoutes from './routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Menu />

                <div className='container'>
                    <div className='row'>
                        <Switch>{createRoutes()}</Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
