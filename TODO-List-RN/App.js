import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Title from './components/Titulo';  
import { GestureHandlerRootView } from 'react-native-gesture-handler';


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

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
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
            alert(`La tarea más rápida en realizarse fue: ${fastest.texto} - Tiempo: ${(fastest.fechaTachado - fastest.fechaCreacion) / 1000} segundos`);
        } else {
            alert('No hay tareas completadas para mostrar.');
        }
    };

    return (
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Title />
          <TodoInput addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} showFastest={showFastest} removeTodo={removeTodo} />
        </SafeAreaView>
      </GestureHandlerRootView>
    );
    };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });

export default App;
