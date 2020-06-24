import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ({resultItem}) => {
    // console.log(resultItem);
    return (
        <View style={styles.container}>
            {resultItem.image_url ? <Image
                style={styles.image}
                source={{uri: resultItem.image_url}}/> : null}
            <Text style={styles.name}>{resultItem.name}</Text>
            <Text>{resultItem.rating} Stars, {resultItem.review_count} Reviews </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 280,
        height: 170,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;
