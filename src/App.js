import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './routes/PrivateRoute';
import { AuthContextProvider, StudentContextProvider } from '@context';

import MainTemplate from '@templates/MainTemplate';

import {
  HomePage,
  DashboardPage,
  StudentPage,
  LoginPage,
  RegisterPage,
  WelcomePage,
} from '@pages';

function App() {
  return (
    <Router>
      <Switch>
        <AuthContextProvider>
          <StudentContextProvider>
            <MainTemplate>
              <Route exact path='/' component={HomePage} />
              <PrivateRoute path='/dashboard' component={DashboardPage} />
              <PrivateRoute path='/student/:id' component={StudentPage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />
              <Route path='/welcome' component={WelcomePage} />
            </MainTemplate>
          </StudentContextProvider>
        </AuthContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
