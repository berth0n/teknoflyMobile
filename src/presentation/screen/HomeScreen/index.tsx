import * as React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { AEmporterScreen } from '../AEmporterScreen';
import { LivraisonScreen } from '../LivraisonScreen';


export const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'livraison', title: 'Livraison' },
    { key: 'aEmporter', title: 'A emporter' },
  ]);

  const renderScene = SceneMap({
    livraison: LivraisonScreen,
    aEmporter: AEmporterScreen,
  });

  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      
      swipeEnabled={false}
    />
  );
}