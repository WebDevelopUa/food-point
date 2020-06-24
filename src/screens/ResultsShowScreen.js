import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState('');
    const id = navigation.getParam('id');

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null
    }
    console.log(result);

    return (
        <>
            <View style={styles.address}>
                <Text style={styles.title}>{result.name}</Text>
                <Text style={styles.subtitle}>{result.phone}</Text>
                <FlatList

                    data={result.location.display_address}
                    keyExtractor={id => id}
                    renderItem={({item}) => <Text>{item}</Text>}
                />
            </View>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => <Image style={styles.image} source={{uri: item}}/>}
            />

        </>
    );
};

const styles = StyleSheet.create({
    title: {
        color: '#0b1450',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 2,
    },
    address: {
        fontSize: 15,

        marginBottom: 10,
        marginLeft: 35
    },
    image: {
        height: 200,
        width: 300,
        marginHorizontal: 'auto',
        marginVertical: 10,
        borderRadius: 5,
        display: 'flex',
        alignSelf: 'center',
    }
});

export default ResultsShowScreen;
