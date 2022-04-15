import React, { Component } from 'react'

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workedas: "",
      startdate: "",
      finishdate: "",
      counter: 0
    };
   
  }

  registerWorkedAsChange = (e) =>{
    
    this.setState({
      workedas: e.target.value
    })
  }

  registerStartDateChange = (e) =>{
 
    this.setState({
      startdate: e.target.value
    })
  }

  registerFinishDateChange = (e) =>{
  
    this.setState({
      finishdate: e.target.value
    })
  }

  saveWork = (e) =>{
 
  if (this.state.workedas !== "" && this.state.startdate !== "" && this.state.finishdate !== "" && this.state.counter < 2){

   let workExperienceContainer = document.createElement("div")
   workExperienceContainer.className = `work${this.state.counter}`
   let workPlaceName = document.createElement("h3")
   workPlaceName.textContent = this.state.workedas
   let startDateWork = document.createElement("p")
   startDateWork.textContent = "Start date: " + this.state.startdate
   let finishDateWork = document.createElement("p")
   finishDateWork.textContent = "End date: " + this.state.finishdate
   let deleteWorkExperienceBtn = document.createElement("button")
   deleteWorkExperienceBtn.textContent = "Delete"
   deleteWorkExperienceBtn.className = "deleteWorkExperienceBtn"
   deleteWorkExperienceBtn.onclick = this.deleteWorkExperience
   const visualizer = document.querySelector(".workExperienceVisualizer")
   workExperienceContainer.append(workPlaceName, startDateWork, finishDateWork, deleteWorkExperienceBtn)
   visualizer.append(workExperienceContainer)
   
   this.setState({
     workedas: "",
     startdate: "",
     finishdate: "",
     counter: this.state.counter + 1
   })
   console.log(this.state.counter)
   
  } 
  else if (this.state.workedas === "" && this.state.startdate !== "" && this.state.finishdate !== ""){
   alert("The work description is missing")
  } else if (this.state.workedas === "" && this.state.startdate === "" && this.state.finishdate !== ""){
   alert("The work description and start date are missing")
  } else if (this.state.workedas === "" && this.state.startdate === "" && this.state.finishdate === ""){
    alert("The work description, start date and end date are missing")
  } else if (this.state.workedas !== "" && this.state.startdate === "" && this.state.finishdate === ""){
    alert("The start date and end date are missing")
  } else if (this.state.workedas === "" && this.state.startdate !== "" && this.state.finishdate === ""){
    alert("The work description and end date are missing")
  } 
  if (this.state.workedas !== "" && this.state.startdate !== "" && this.state.finishdate !== "" && this.state.counter>= 2){
    alert("You can insert max 2 work experiences")
  }
}
  

deleteWorkExperience = (e) =>{
  e.target.parentElement.remove()
  this.setState({
    counter: this.state.counter - 1
  })
}

  

  render() {
    return (
      <div className='workExperience'>
        <div className='workForm'>

          <div className='workedasDiv'>
          <label htmlFor='workedas'>Worked as:</label>
          <input value={this.state.workedas} onChange={this.registerWorkedAsChange} type="text" id="workedas" required/>
          </div>
          
          <div className='startDateDiv'>
          <label htmlFor='startDate'>Start date:</label>
          <input value={this.state.startdate} onChange={this.registerStartDateChange} type="date" id="startDate" required/>
          </div>
         
         <div className='finishDateDiv'>
         <label htmlFor='finishDate'>Finish date:</label>
          <input value={this.state.finishdate} onChange={this.registerFinishDateChange} type="date" id="finishDate" required/>
         </div>

         <div className='submitButtonDiv'>
           <button onClick={this.saveWork} type='button' id='submitWorkBtn'>Save</button>
         </div>
          
        </div>
        <div  className='workExperienceVisualizer'>
          
        </div>
      </div>
    )
  }
}
