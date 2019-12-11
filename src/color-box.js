import React, {Component} from 'react'

class Color extends Component {
    constructor() {
        super()
        this.state = {
            colorArray: ["red", "orange", "yellow", "green", "blue", "purple"],
            currentColor: 0
        }
    }

handleColorChange = () => {
    let randomNum = Math.floor(Math.random() + this.state.colorArray.length)
    this.setState({currentColor:randomNum})
}

render() {
    const{ colorArray, currentColor} = this.state
    return(
        <div>
            <div id= "color-box"
                on click = {this.handleColorChange}
                style = {{ backgroundColor : colorArray[currentColor]}}
            >
            </div>
    )
}

}


export default App;
