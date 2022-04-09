import Navbar from './components/navbar/Navbar';
import LearnPage from './pages/Learn/Learn.Page';
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App bg-c-black min-h-screen relative" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/learn' />} />

        <Route path='/learn' element={<LearnPage />} />

        <Route path='/quiz' element={'quiz'} />

        <Route path='/profile' element={'profile'} />
      </Routes>
      <div className='text-white absolute bottom-1 flex w-full justify-center text-xl'>made with ❤️ by Abhishek Mohanty</div>
    </div>
  );
}

export default App;
