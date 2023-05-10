import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Jacob from './Jacob/Jacob';
import Nate from './Nate/Nate';
import "./Hello.css"
import ResponsiveAppBar from './ResponsiveAppBar';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>}></Route>
            <Route path="/jacob" element={<Jacob/>}></Route>
            <Route path="/nate" element={<Nate/>}></Route>
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
}

function App() {
   return(
    <div className= "app">
        <BrowserRouter>
                <ResponsiveAppBar />
                <AppRouter />
            </BrowserRouter>

    </div>
            
   );
}

export default App;
