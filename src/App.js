import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router> 
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
