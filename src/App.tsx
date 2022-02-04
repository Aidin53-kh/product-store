
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
    return (
        <Switch>
            <Route path="/"> 
                <Navbar />
            </Route>
        </Switch>
    );
}

export default App;
