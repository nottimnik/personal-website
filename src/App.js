import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Art from './pages/Art'
import Games from './pages/Games'
import StoneMinerTutorial from './pages/Games/StoneMinerTutorial'

function App() {
  return (
    <Router> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/art" component={Art} />
        <Route path="/games" component={Games} />
        <Route path="/stone-miner/tutorial" component={StoneMinerTutorial} /> 
      </Switch>
    </Router>
  );
}

export default App;
