import React from 'react';
import { FlatList, StyleSheet, View, Button } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, showFastest, removeTodo }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item, index }) => (
                    <TodoItem
                        key={index}
                        todo={item}
                        toggleTodo={() => toggleTodo(index)}
                        onDelete={() => removeTodo(index)}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
            <Button title="Mostrar Tarea Más Rápida" onPress={showFastest} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       
        padding: 16,
    },
});

export default TodoList;
