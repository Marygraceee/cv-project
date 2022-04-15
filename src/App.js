import React, { Component } from 'react'
import Education from './components/Education'
import Identity from './components/Identity'
import Skills from './components/Skills'
import Work from './components/Work'
import "./App.css"


export default class App extends Component {
constructor(props){
  super(props)
  this.state = {
    name: "",
    surname: "",
    firstSchoolName: "",
    firstSchoolStartDate: "",
    firstSchoolFinishDate: "",
    secondSchoolName: "",
    secondSchoolStartDate: "",
    secondSchoolFinishDate: "",
    workedas: "",
    startdate: "",
    finishdate: "",
    description: ""

  }
 
}

/* PROPS REGARDING IDENTITY */

getName = (identityName) =>{
  
  this.setState({
    name: identityName
  })
}

getSurname = (identitySurname) =>{

  this.setState({
    surname: identitySurname
  })
}


consoleLog = () =>{
  console.log(this.state.name)
  console.log(this.state.surname)
  console.log(this.state.firstSchoolName)
  console.log(this.state.firstSchoolStartDate)
  console.log(this.state.firstSchoolFinishDate)
}

/* ------------------- */

/* PROPS REGARDING EDUCATION */

getfirstSchoolName = (educationfirstSchoolName) =>{
  
  this.setState({
    firstSchoolName: "First school name: " + educationfirstSchoolName
  })
}

getfirstSchoolStartDate = (educationfirstSchoolStartDate) =>{
  
  this.setState({
    firstSchoolStartDate: educationfirstSchoolStartDate
  })
}

getfirstSchoolFinishDate = (educationfirstSchoolFinishDate) =>{
  
  this.setState({
    firstSchoolFinishDate: educationfirstSchoolFinishDate
  })
}

getsecondSchoolName = (educationsecondSchoolName) =>{
  
  this.setState({
    secondSchoolName: "second school name: " + educationsecondSchoolName
  })
}

getsecondSchoolStartDate = (educationsecondSchoolStartDate) =>{
  
  this.setState({
    secondSchoolStartDate: educationsecondSchoolStartDate
  })
}

getsecondSchoolFinishDate = (educationsecondSchoolFinishDate) =>{
  
  this.setState({
    secondSchoolFinishDate: educationsecondSchoolFinishDate
  })
}

/* ---------------------- */

  render() {
    return (
      <div className='container'>
        <Identity getNameFunction={this.getName} getSurnameFunction={this.getSurname}/>
        <Education  
        getfirstSchoolNameFunction={this.getfirstSchoolName} 
        getfirstSchoolStartDateFunction={this.getfirstSchoolStartDate}
        getfirstSchoolFinishDateFunction={this.getfirstSchoolFinishDate}
        getsecondSchoolNameFunction={this.getsecondSchoolName} 
        getsecondSchoolStartDateFunction={this.getsecondSchoolStartDate}
        getsecondSchoolFinishDateFunction={this.getsecondSchoolFinishDate}/>
        <Work/>
        <Skills/>
        <button onClick={this.consoleLog}>See</button>

      </div>
    )
  }
}

