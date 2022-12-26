import { Image, StyleSheet, FlatList} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import categories from '../assets/data/categories';


interface HomeCategoryProps {
    category: {
        id: string, 
        title: string,
        movies: {
            id: string,
            poster: string
        }[]
    }
}

export default function HomeCategory(props: HomeCategoryProps) {
  const {category} = props;
  return <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({item}) => (
            <Image style={styles.image} source={{uri: item.poster }} />
        )}
        horizontal
      />
  </>;
}

const styles = StyleSheet.create({
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

