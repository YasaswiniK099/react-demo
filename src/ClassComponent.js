import React from 'react'

class ClassComponent extends React.Component{
	state={
		subjectname:"MATHS",
		year:2020,
		inputValue:"",
		students:[
		    {
		    	name:"YASASWINI",
		    	age:21,
		    	gender:"female",
		    },
		    {
		    	name:"LAHARI",
		    	age:19,
		    	gender:"female"
		    }
		]
	}
	handleClick=()=>{
		console.log(this.state.inputValue)
		this.setState({
			inputValue:""
		})
	}
	handleChange=(e)=>{
		this.setState({
			inputValue:e.target.value
		})
	}
	render(){
		return(
			<div>
			<h2>GOOD MORNING</h2>
			<p>{this.state.subjectname}</p>	
			<p>{this.state.year}</p>
			{
				this.state.students.map((pos)=>(
				<div>
				<p>{pos.name}</p>
				<p>{pos.age}</p>
				<p>{pos.gender}</p>
				</div>
				))
			}
			<input value={this.state.inputValue} onChange={this.handleChange}/>
			<button onClick={this.handleClick}>Submit</button>		
			</div>
		       )
	}
}
export default ClassComponent