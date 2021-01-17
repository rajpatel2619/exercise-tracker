import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar';
import ExerciseList from './components/exercises-list';
import EditExercises from './components/edit-exercises';
import CreateExercise from './components/create-exercise';
import CreateUser from './components/create-user';

function App() {
  return (
    <Router>
    <div className="container">

      <Navbar />
    <br />
      <Switch>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id"  component={EditExercises} />
        <Route path="/create"  component={CreateExercise} />
        <Route path="/user"  component={CreateUser} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
