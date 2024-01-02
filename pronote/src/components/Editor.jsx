import React, { Component } from 'react'
import './Editor.css'

export default class Editor extends Component {
constructor(){
    super()
    this.state={
        value : " "
    }
    this.text = this.text.bind(this) 
}
text(e){
    this.setState({
        value : e.target.value
    });
}

  render() {
    return (
      <div className='flix'>
        <div>
            <h1 className='input'>Input</h1>
            <div className='inputbox'>
                <textarea onChange={this.text} className='text'/></div>
                <img src="" alt="" />

        </div>
        <div>
            <h1 className='proNote'>Por Note</h1>
            <div className='copeText'>
                <p>{this.state.value}</p>
            </div>
        </div>
      </div>
    )
  }
}
