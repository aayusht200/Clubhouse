import Homepage from './pages/Homepage';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router';
function App() {
    return (
        <div className="bg-amber-400  h-dvh min-h-max">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
