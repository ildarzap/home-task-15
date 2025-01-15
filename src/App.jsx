import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import AppRoutes from './Routes';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Список произведений</Link>
          <Link to="/about">Описание</Link>
        </nav>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
