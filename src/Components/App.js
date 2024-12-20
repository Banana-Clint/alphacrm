import Dashboard from './Dashboard/Dashboard.js';
import { Provider } from 'react-redux';
import { store } from './ReduxDataStore/Store.js';
import { useState, useEffect } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authSuccess = urlParams.get('auth');

      if (authSuccess === 'success') {

          setIsAuthenticated(true);
        
      } else {
        // Redirect to the authentication flow if not authenticated
        window.location.href = 'https://crmapi-657550777490.us-central1.run.app/Api/Auth/Auth';
      }             
    };

    // Check authentication status on component mount
    checkAuthentication();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <p>Redirecting to authenticate...</p>
        )}
      </div>
    </Provider>
  );
}

export default App;
