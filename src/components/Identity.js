import React, { Component } from 'react'


export default class Identity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: ""
    };
   
  }



   registerNameChange = (e) =>{
    
    this.setState({
      name: e.target.value
    })
  }


  saveNameChange = (e) =>{
    if (this.state.name !== ""){
      e.target.nextSibling.textContent = this.state.name
      const saveBtn = e.target
      const inputField = e.target.previousSibling
      const labelField = e.target.previousSibling.previousSibling
      saveBtn.style.cssText = "opacity: 0"
      inputField.style.cssText = "opacity: 0"
      labelField.style.cssText = "opacity: 0"
      const editButton = document.createElement("button")
      editButton.className = "editBtn"
      editButton.textContent = "Edit"
      editButton.style.cssText = "background-color: grey"
      editButton.onclick = this.editFirstName
      document.querySelector(".firstnameInput").append(editButton)
      this.setState({
        name: ""
      })
      this.props.getNameFunction(this.state.name)
    } else alert("Please insert your name")

  }

  editFirstName = (e) => {
    e.target.previousSibling.textContent = ""
    e.target.previousSibling.previousSibling.style.cssText = "opacity: 1"
    e.target.previousSibling.previousSibling.previousSibling.style.cssText = "opacity: 1"
    e.target.previousSibling.previousSibling.previousSibling.previousSibling.style.cssText = "opacity: 1"
    e.target.remove()
    this.setState({
      name: ""
    })
  }

  editsurname = (e) => {
    e.target.previousSibling.textContent = ""
    e.target.previousSibling.previousSibling.style.cssText = "opacity: 1"
    e.target.previousSibling.previousSibling.previousSibling.style.cssText = "opacity: 1"
    e.target.previousSibling.previousSibling.previousSibling.previousSibling.style.cssText = "opacity: 1"
    e.target.remove()
    this.setState({
      surname: ""
    })
  }

  registerSurnameChange = (e) =>{
    
    this.setState({
      surname: e.target.value
    })
  }


  saveSurnameChange = (e) =>{
    if (this.state.surname !== ""){
      e.target.nextSibling.textContent = this.state.surname
      const saveBtn = e.target
      const inputField = e.target.previousSibling
      const labelField = e.target.previousSibling.previousSibling
      saveBtn.style.cssText = "opacity: 0"
      inputField.style.cssText = "opacity: 0"
      labelField.style.cssText = "opacity: 0"
      const editButton = document.createElement("button")
      editButton.className = "editBtn"
      editButton.textContent = "Edit"
      editButton.style.cssText = "background-color: grey"
      editButton.onclick = this.editsurname
      document.querySelector(".lastnameInput").append(editButton)
      this.props.getSurnameFunction(this.state.surname)
      this.setState({
        surname: ""
      })
    } else alert("Please insert your last name")

  }

  

  render() {
    
    return (
      <div className='identity'>
          <div className='firstnameInput'>
          <label htmlFor="firstname">First name</label>
          <input onChange={this.registerNameChange} value={this.state.name} type="text" id="firstname" placeholder="Your first name" required/>
          <button onClick={this.saveNameChange} id='saveFirstNameBtn' type='button'>Save</button>
          <p className='nameVisualizer'></p>
          
          </div>

          <div className='lastnameInput'>
          <label htmlFor="lastname">Last name</label>
          <input onChange={this.registerSurnameChange} value={this.state.surname} type="text" id="lastname" placeholder="Your last name" required/>
          <button onClick={this.saveSurnameChange} id="saveLastNameBtn" type='button'>Save</button>
          <p className='lastNameVisualizer'></p>
          </div>
        

      </div>
    )
  }
}
