import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';

import TodoList from './components/todoList/TodoList';
import Header from './components/header/Header';
import Welcome from './components/welcom/Welcome';
import Form from './components/form/Form';

import './App.scss';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
      value: '',
      editting: false,
      handlEditId: null
    };
  }

  componentDidMount = async () => {
    try {
      let todos = await axios('https://jsonplaceholder.typicode.com/todos?_limit=10');
      let toJson = await todos;

      this.setState({
        todo: toJson.data
      });
    } catch (e) {
      console.log(e + ':<');
    }
  };

  // Handle input value
  handleInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  // Submitted Todo
  handelSubmit = e => {
    e.preventDefault();
    const { todo, value } = this.state;

    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: value,
        completed: false
      })
      .then(res =>
        this.setState({
          todo: [res.data, ...todo],
          value: ''
        })
      );
  };

  // Mark as comeplete or not
  markComplete = id => {
    const { todo } = this.state;

    this.setState({
      todo: todo.map(e => {
        if (e.id === id) {
          e.completed = !e.completed;
        }
        return e;
      })
    });
  };

  // Delete item
  handelDlt = id => {
    const { todo } = this.state;
    this.setState({
      todo: [...todo.filter((e, i) => id !== e.id)]
    });
  };

  // Edit Todo
  handelEdit = id => {
    const { todo } = this.state;
    let findId = todo.filter(e => e.id === id);

    if (findId) {
      this.setState({
        value: findId[0].title,
        editting: true,
        handlEditId: findId
      });
    }
  };

  // Edit Submit
  handelEditSubmit = e => {
    e.preventDefault();
    const { value, todo, handlEditId } = this.state;

    this.setState({
      todo: todo.map(x => {
        if (x.id === handlEditId[0].id) {
          x.title = value;
        }
        return x;
      }),
      editting: false,
      value: ''
    });
  };

  render() {
    const { todo, editting, value } = this.state;

    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Welcome} />

          <Route path="/todo">
            <Form
              editting={editting}
              currentTodo={value}
              handleInput={this.handleInput}
              handelEditSubmit={this.handelEditSubmit}
              handelSubmit={this.handelSubmit}
            />
            <TodoList
              todos={todo}
              editInput={this.handleInput}
              editProps={editting}
              check={this.markComplete}
              todoDlt={this.handelDlt}
              todoEdit={this.handelEdit}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
