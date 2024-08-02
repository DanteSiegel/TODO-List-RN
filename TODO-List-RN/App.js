import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList'; 

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const newTodo = {
            texto: task,
            fechaCreacion: new Date(),
            completado: false,
            fechaTachado: null,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return {
                    ...todo,
                    completado: !todo.completado,
                    fechaTachado: !todo.completado ? new Date() : null,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const showFastest = () => {
        const completedTodos = todos.filter((todo) => todo.completado && todo.fechaTachado !== null);
        if (completedTodos.length > 0) {
            const fastest = completedTodos.reduce((prev, curr) => {
                const prevDuration = prev.fechaTachado - prev.fechaCreacion;
                const currDuration = curr.fechaTachado - curr.fechaCreacion;
                return prevDuration < currDuration ? prev : curr;
            });
            Alert.alert(
                'Tarea Más Rápida',
                `La tarea más rápida en realizarse fue: ${fastest.texto} - Tiempo: ${(fastest.fechaTachado - fastest.fechaCreacion) / 1000} segundos`
            );
        } else {
            Alert.alert('No hay tareas completadas para mostrar.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header}>Lista de Tareas</Text>
                <TodoInput addTodo={addTodo} />
                <TodoList todos={todos} toggleTodo={toggleTodo} showFastest={showFastest} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
});

export default App;
