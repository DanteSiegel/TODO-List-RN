import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet } from 'react-native';

const TodoInput = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleSubmit = () => {
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                value={task}
                onChangeText={(text) => setTask(text)}
                placeholder="Escriba lo que tiene que hacer"
            />
            <Button title="Enviar" onPress={handleSubmit} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',  
        paddingHorizontal: 16,  
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
    },
});

export default TodoInput;
