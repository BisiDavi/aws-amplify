import {withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Hello from AWS Amplify</h1>
     <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
