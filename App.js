import React from 'react'
import Navigation from './src/presentation/Navigation'
import NavigationDrawer from './src/presentation/NavigationDrawer';
import RNBootSplash from 'react-native-bootsplash';
const App = ()=>{
  React.useEffect(() => {
    // Hide SplashScreen after 3secs or Make an async task
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 3000);
  }, []);
  return(
    <NavigationDrawer/>
  )
}

export default App;
