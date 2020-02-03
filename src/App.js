import React from 'react';
import SignInSide from './components/signIn'
import Dashboard from './components/dashboard';
import AddUser from './components/addUser';


function App() {
  return (
    <React.Fragment>
    <Dashboard/>
    <SignInSide/>
    <AddUser/>
    </React.Fragment>
  );
}

export default App;
