import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Drawing from './pages/Drawing';
import Home from './pages/Home';
import Introduce from './pages/Introduce';
import News from './pages/News';
import Quran from './pages/Quran';

const App = () => {
  return (
    <div className="min-h-screen">
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/whoami' element={<Introduce />} />
            <Route path='/drawing-game' element={<Drawing />} />
            <Route path='/news' element={<News />} />
            <Route path='/al-quran' element={<Quran />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
