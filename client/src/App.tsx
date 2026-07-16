import Homepage from './pages/Homepage';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router';
import Signup from './pages/Signup';
import Error from './pages/Error';
import CreatePost from './pages/CreatePost';
function App() {
    return (
        <div className="bg-amber-400  h-dvh min-h-max">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
