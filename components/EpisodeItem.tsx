import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from './Themed';


interface EpisodeItemProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string
    }
}
 
const EpisodeItem = (props: EpisodeItemProps) => {
    const {episode} = props;
    return <View style={{marginVertical: 10}}>
        <View style={styles.row}>
            <Image style={styles.image} source={{uri: episode.poster}} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{episode.title}</Text>
                <Text style={styles.duration}>{episode.duration}</Text>
            </View>
            <AntDesign name="download" size={24} color='white' />
        </View>
        <Text style={styles.plot}>{episode.plot}</Text>
    </View>;
}
 
const styles = StyleSheet.create({
    image: {
        height: 75,
        aspectRatio: 16/9,
        resizeMode: 'cover',
        borderRadius: 3
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleContainer: {
        flex: 1, 
        padding: 5,
        justifyContent: 'center'
    },
    duration: {
        color: 'grey',
        fontSize: 12
    },
    title: {
        
    }, 
    plot: {
        color: 'darkgrey',
        marginTop: 5
    }
})
export default EpisodeItem;