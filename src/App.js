import React from 'react';
import { BrowserRouter, Switch, Route,} from "react-router-dom";
import Google from "./pages/google";
import FontAwesome from "./pages/font-awesome";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path="/" component={Google}/>
        <Route exact path="/font-awesome" component={FontAwesome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
