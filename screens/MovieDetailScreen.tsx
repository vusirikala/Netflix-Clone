import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import {StyleSheet, Image, Text, View, FlatList, Pressable} from 'react-native';

import movie from '../assets/data/movie';
import EpisodeItem from '../components/EpisodeItem';

export default function MovieDetailScreen() {

    const firstEpisode = movie.seasons.items[0].episodes.items[0];
    return (
        <View>
            <Image style={styles.image} source={{uri: firstEpisode.poster }} />  
            
            <FlatList
                data={movie.seasons.items[0].episodes.items}
                renderItem={({item}) => <EpisodeItem episode={item} />}
                style={{marginBottom: 300}}
                ListHeaderComponent={(
                    <View>
                        <Text style={styles.title}>{movie.title}</Text>
                        <View style={styles.titleline}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>2012</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white"/>
                        </View>
                        <Pressable onPress={() => {console.warn('Play')}} style={styles.playButton}>
                            <Text style={styles.playButtonText}>
                                <Entypo name="controller-play" size={24} color="black" />
                                {'  '}Play
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => {console.warn('Play')}} style={styles.downloadButton}>
                            <Text style={styles.downloadButtonText}>
                                <AntDesign name="download" size={24} color="black" />
                                {'  '}Download
                            </Text>
                        </Pressable>
                        <Text style={styles.plot}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Createor: {movie.creator}</Text>

                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <View style={{alignItems: 'center', marginHorizontal: 45}}>
                                <AntDesign name='plus' size={24} color='white' />
                                <Text style={{color: 'darkgrey'}}>My List</Text>
                            </View>

                            <View style={{alignItems: 'center', marginHorizontal: 45}}>
                                <Feather name='thumbs-up' size={24} color='white' />
                                <Text style={{color: 'darkgrey'}}>Rate</Text>
                            </View>

                            <View style={{alignItems: 'center', marginHorizontal: 45}}>
                                <Ionicons name='share-social' size={24} color='white' />
                                <Text style={{color: 'darkgrey'}}>Share</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 5/3,
        resizeMode: 'cover'
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'white'
    },
    match: {
        fontWeight: "bold",
        color: 'green',
        fontSize: 15,
        marginRight: 15
    },
    year: {
        color: 'grey',
        marginRight: 5
    },
    ageContainer: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        paddingHorizontal: 3,
        marginRight: 10
    },
    age: {
        color: 'black',
        fontWeight: 'bold'
    },
    titleline: {
        flexDirection: 'row'
    },
    playButton: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 3
    },
    downloadButton: {
        backgroundColor: 'grey',
        borderRadius: 5,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    downloadButtonText: {
        color: 'white',
        fontSize: 16,
        fongWeight: 'bold',
    },
    playButtonText: {
        color: 'black',
        fontSize: 16,
        fongWeight: 'bold',
    },
    plot: {
        marginVertical: 10,
        color: 'white'
    }
})