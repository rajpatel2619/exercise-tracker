import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';


const Exercise = props =>{
    return (

        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0,10)}</td>
            <td>
                <Link to={"/edit/"+props.exercise._id} >edit</Link> | <a href="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
        </td>
    </tr>
    )
}

export default class ExerciseList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            exercises:[]
        }
    
    }

    componentDidMount(){
        axios.get("/exercises")
        .then(res=>{
            console.log(res.data)
            this.setState({
                exercises:res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    deleteExercise=(id)=>{
        axios.delete("/exercises/"+id)
        .then(res=>console.log(res.data))
        this.setState({
            exercises:this.state.exercises.filter(el=>el._id !== id)
        })
    }  

    exerciseList=()=>{
        return this.state.exercises.map(current=>{
            console.log(current)
            return <Exercise exercise={current} deleteExercise={this.deleteExercise} key={current._id} />;
        })
    }

    render(){
        return(
            <div>
                <h2>Logged Exercises</h2>
                <table className="table">
<thead className="thead-light">
    <tr>
        <th>Username</th>
        <th>Description</th>
        <th>Duration</th>
        <th>Date</th>
        <th>Actions</th>
    </tr>
</thead>
<tbody>
    {this.exerciseList()}
</tbody>
                </table>
            </div>
        )
    }
}