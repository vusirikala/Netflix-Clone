import { Image, StyleSheet, FlatList} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import categories from '../assets/data/categories';
import HomeCategory from '../components/HomeCategory';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const firstCategory = categories.items[0];
  
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({item}) => <HomeCategory category={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 5
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

