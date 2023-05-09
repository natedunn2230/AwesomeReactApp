import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>}></Route>
                <Route path="/jacob" element={<h1>Jacoby</h1>}></Route>
                <Route path="/nate" element={<h1>Nate</h1>}></Route>
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

function App() {
   return(
        <AppRouter />
   );
}

export default App;
