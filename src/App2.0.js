import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Other imports...

function App() {
  return (
    <Router>
      <Switch>
        {/* Other routes... */}
        <Route path="/packages/:id" component={PackageDetail} />
      </Switch>
    </Router>
  );
}

export default App;
