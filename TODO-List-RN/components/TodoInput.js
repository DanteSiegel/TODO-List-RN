import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TodoInput = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const handleSubmit = () => {
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={task}
                onChangeText={(text) => setTask(text)}
                placeholder="Escribi lo que tenes que hacer"
            />
            <Button
                title="Enviar"
                onPress={handleSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
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
