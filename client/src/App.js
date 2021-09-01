import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";
import { deleteUser } from "./services/users";
import Layout from "./components/Layout/Layout";
import Login from "./screens/SignIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import MainContainer from "./containers/MainContainer";
import EditAccount from "./screens/EditAccount/EditAccount";

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
    history.push("/");
  };

  const handleSignUp = async (signupData) => {
    const userData = await registerUser(signupData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    if (window.confirm("Confirm Logout?")) {
      setCurrentUser(null);
      localStorage.removeItem("authToken");
      removeToken();
      history.push("/");
    } 
  };
  // wanted to add in a way to prevent users from logging out by mistake which is a feature in many common apps and one method I found was window.confirm. I learnt about it from here -> https://stackoverflow.com/questions/63311845/unexpected-use-of-confirm-no-restricted-globals

  const userDelete = async () => {
    let entry = prompt(
      "Please enter email address to confirm account deletion:",
      ""
    );
    if (entry === null || entry === "") {
      alert("NO INPUT - DELETION CANCELLED");
    } else if (entry === currentUser.email) {
      alert("DELETION COMPLETE");
      await deleteUser(currentUser.id);
      setCurrentUser(null);
      localStorage.removeItem("authToken");
      removeToken();
      history.push("/");
    } else {
      alert("INCORRECT ENTRY - TRY AGAIN TO CONFIRM");
    }
  };

  return (
    <div className="App">
      <Layout
        currentUser={currentUser}
        handleLogout={handleLogout}
        userDelete={userDelete}
      >
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/signup">
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path="/edit-account">
            <EditAccount currentUser={currentUser} userDelete={userDelete} />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
