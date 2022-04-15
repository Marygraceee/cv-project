import React, { Component } from 'react'

export default class Skills extends Component {
constructor(props){
  super(props)
  this.state = {
    description: ""
  }
}

makeTextReadOnly = (e) => {
  const textArea = e.target.parentElement.parentElement.firstChild.firstChild
  
  textArea.setAttribute('readonly', true);
  textArea.removeAttribute("placeholder")
  textArea.style.cssText = "outline: none"
  this.setState({
    description: textArea.textContent
  })
  console.log(textArea)
}

makeTextNotReadOnly = (e) => {
  const textArea = e.target.parentElement.parentElement.firstChild.firstChild
  textArea.removeAttribute("readonly")
  textArea.setAttribute("placeholder", "Talk about you...")
  textArea.style.cssText = "outline: auto"
  console.log(textArea)
}


  render() {
    return (
      <div className='skills'>
        <div>
          <textarea placeholder='Talk about you...'></textarea>
        </div>

        <div>
          <button onClick={this.makeTextReadOnly} className='saveDescriptionBtn'>Save</button>
          <button onClick={this.makeTextNotReadOnly} className='editDescriptionBtn'>Edit</button>
        </div>
      
      </div>
    )
  }
}
