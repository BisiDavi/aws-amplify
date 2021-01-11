import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

const Auth = () => {
  return (
    <div className="authpage">
      <h1>Welcome, you are now logged in</h1>

      <AmplifySignOut />
    </div>
  );
};

export default withAuthenticator(Auth);
