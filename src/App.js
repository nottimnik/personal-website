import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Art from './pages/Art'
import Games from './pages/Games'

function App() {
  return (
    <Router> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/art" component={Art} />
        <Route path="/games" component={Games} />
      </Switch>
    </Router>
  );
}

export default App;
