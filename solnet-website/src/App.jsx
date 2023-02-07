import { Route, Routes } from 'react-router-dom';
import Navbar from './components/ui/Navbar.jsx';
import Homepage from './pages/Homepage.jsx';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </div>
    );
};

export default App;

