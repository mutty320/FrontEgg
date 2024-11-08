import './App.css';
import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  //Uncomment this to redirect to login automatically
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     loginWithRedirect();
  //   }
  // }, [isAuthenticated, loginWithRedirect]);
  
  const handleClick = () => {
    AdminPortal.openHosted();
  };
  
  const logout = () => {
    const baseUrl = ContextHolder.for('assignment').getContext().baseUrl;
   window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  //  window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}/LoginCallback`;
  };
  
  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl || undefined} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <div>
            <button onClick={handleClick}>Settings</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;