import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TODO List</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        marginVertical: 20,  
    },
    title: {
        fontSize: 24,          
        fontWeight: 'bold',    
        color: '#333',         
    },
});

export default Title;
