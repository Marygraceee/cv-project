import React, { Component } from 'react'

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolname: "",
      schoolstartdate: "",
      schoolfinishdate: "",
      schoolcounter: 0
    };
   
  }

  registerschoolnameChange = (e) =>{
    
    this.setState({
      schoolname: e.target.value
    })
  }

  registerschoolstartdateChange = (e) =>{
 
    this.setState({
      schoolstartdate: e.target.value
    })
  }

  registerschoolfinishdateChange = (e) =>{
  
    this.setState({
      schoolfinishdate: e.target.value
    })
  }

  saveSchool = (e) =>{
 
  if (this.state.schoolname !== "" && this.state.schoolstartdate !== "" && this.state.schoolfinishdate !== "" && this.state.schoolcounter < 2){

   let schoolExperienceContainer = document.createElement("div")
   schoolExperienceContainer.className = `school${this.state.schoolcounter}`
   let schoolPlaceName = document.createElement("h3")
   schoolPlaceName.textContent = this.state.schoolname
   let schoolstartdateschool = document.createElement("p")
   schoolstartdateschool.textContent = "Start date: " + this.state.schoolstartdate
   let schoolfinishdateschool = document.createElement("p")
   schoolfinishdateschool.textContent = "End date: " + this.state.schoolfinishdate
   let deleteSchoolExperienceBtn = document.createElement("button")
   deleteSchoolExperienceBtn.textContent = "Delete"
   deleteSchoolExperienceBtn.className = "deleteSchoolExperienceBtn"
   deleteSchoolExperienceBtn.onclick = this.deleteSchoolExperience
   const visualizer = document.querySelector(".schoolNamevisualizer")
   schoolExperienceContainer.append(schoolPlaceName, schoolstartdateschool, schoolfinishdateschool, deleteSchoolExperienceBtn)
   visualizer.append(schoolExperienceContainer)

   this.props.getfirstSchoolNameFunction(schoolPlaceName.textContent)
   this.props.getfirstSchoolStartDateFunction(schoolstartdateschool.textContent)
   this.props.getfirstSchoolFinishDateFunction(schoolfinishdateschool.textContent)
   
   this.setState({
     schoolname: "",
     schoolstartdate: "",
     schoolfinishdate: "",
     schoolcounter: this.state.schoolcounter + 1
   })
   
   
  } 
  else if (this.state.schoolname === "" && this.state.schoolstartdate !== "" && this.state.schoolfinishdate !== ""){
   alert("The school name is missing")
  } else if (this.state.schoolname === "" && this.state.schoolstartdate === "" && this.state.schoolfinishdate !== ""){
   alert("The school name and start date are missing")
  } else if (this.state.schoolname === "" && this.state.schoolstartdate === "" && this.state.schoolfinishdate === ""){
    alert("The school name, start date and end date are missing")
  } else if (this.state.schoolname !== "" && this.state.schoolstartdate === "" && this.state.schoolfinishdate === ""){
    alert("The start date and end date are missing")
  } else if (this.state.schoolname === "" && this.state.schoolstartdate !== "" && this.state.schoolfinishdate === ""){
    alert("The school name is missing")
  } 
  if (this.state.schoolname !== "" && this.state.schoolstartdate !== "" && this.state.schoolfinishdate !== "" && this.state.schoolcounter>= 2){
    alert("You can insert max 2 school names")
  }
}
  

deleteSchoolExperience = (e) =>{
  e.target.parentElement.remove()
  this.setState({
    schoolcounter: this.state.schoolcounter - 1
  })
  
}

  

  render() {
    return (
      <div className='schoolExperience'>
        <div className='schoolForm'>

          <div className='schoolnameDiv'>
          <label htmlFor='schoolname'>School name:</label>
          <input value={this.state.schoolname} onChange={this.registerschoolnameChange} type="text" id="schoolname" required/>
          </div>
          
          <div className='schoolstartdateDiv'>
          <label htmlFor='schoolstartdate'>Start date:</label>
          <input value={this.state.schoolstartdate} onChange={this.registerschoolstartdateChange} type="date" id="schoolstartdate" required/>
          </div>
         
         <div className='schoolfinishdateDiv'>
         <label htmlFor='schoolfinishdate'>Finish date:</label>
          <input value={this.state.schoolfinishdate} onChange={this.registerschoolfinishdateChange} type="date" id="schoolfinishdate" required/>
         </div>

         <div className='submitButtonDiv'>
           <button onClick={this.saveSchool} type='button' id='submitschoolBtn'>Save</button>
         </div>
          
        </div>
        <div  className='schoolNamevisualizer'>
          
        </div>
      </div>
    )
  }
}

