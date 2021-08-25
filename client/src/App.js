import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth';
import Layout from './components/Layout/Layout';
import Login from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignUp = async (signupData) => {
    const userData = await registerUser(signupData);
    setCurrentUser(userData);
    history.push('/');
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <SignUp handleSignUp={handleSignUp} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
