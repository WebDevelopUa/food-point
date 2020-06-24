import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Economy"
                />
                <ResultsList
                    results={filterResultsByPrice('$$')}
                    title="Medium prices"/>
                <ResultsList
                    results={filterResultsByPrice('$$$')}
                    title="High prices"
                />
            </ScrollView>
        </>
    );
};

export default SearchScreen;
