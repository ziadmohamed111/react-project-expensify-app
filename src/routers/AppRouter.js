import React from 'react';
import { Router, Route, Switch} from "react-router-dom" 
import ExpenseDashBoardPage from "../components/ExpenseDashboardPage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import HelpPage from "../components/HelpPage"
import PageNotFound from "../components/PageNotFound"
import LoginPage from '../components/LoginPage';
import PrivateRoute from "./PrivateRoute"

const createHistory =  require("history").createBrowserHistory
export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" exact={true} component={ExpenseDashBoardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound}/>
            </Switch>
        </div>
    </Router>
)


export default AppRouter