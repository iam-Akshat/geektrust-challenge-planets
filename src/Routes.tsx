import { Switch,Route } from "react-router-dom"
import Home from "./pages/Home"
import { Result } from "./pages/Result"

export const AppRoutes: React.FC = () =>{
    return(
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/result">
            <Result />
        </Route>
    </Switch>)
}