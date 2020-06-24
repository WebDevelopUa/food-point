import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => (
    <View style={styles.searchBarStyle}>
        <Feather name='search' style={styles.iconStyle}/>
        <TextInput style={styles.searchTextStyle}
                   placeholder="Search"
                   autoCapitalize='none'
                   autoCorrect={false}
                   value={term}
                   onChangeText={onTermChange}
                   onEndEditing={onTermSubmit}
        />
    </View>
)

const styles = StyleSheet.create({
    searchBarStyle: {
        marginTop: 15,
        backgroundColor: '#dbd5d5',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    searchTextStyle: {
        fontSize: 25,
        color: '#858d8c',
        borderColor: '#dbd5d5',
        borderWidth: 1,
        flex: 1,
    },
    iconStyle: {
        color: '#858d8c',
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

export default SearchBar
