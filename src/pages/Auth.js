import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import { Nav } from '../imports';

const Auth = () => {
  return (
    <div className="authpage">
      <Nav />
      <h1>Welcome, you are now logged in</h1>

      <AmplifySignOut />
    </div>
  );
};

export default withAuthenticator(Auth);
