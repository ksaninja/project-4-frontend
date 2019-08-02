import React, { Component } from 'react'
import { withRouter , Link } from 'react-router-dom'

import {update, find} from './api'


class EditMemory extends Component {
state ={
    
    title: '',
    image:'',
    date:'',
    description:''
    
}
    componentDidMount = () =>{
        find(this.props.user, this.props.match.params.id)
        .then(
            // res=>console.log(res)
            res=>this.setState({
                title: res.data.title,
                image:res.data.image,
                date:res.data.data,
                description:res.data.description
            })
        )
        .catch(error=>console.error(error))
    }
    
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value

        })
    }


    handleSubmit = event =>{
        event.preventDefault()
        const updateMemory = this.state
        update(this.props.user, this.props.match.params.id,updateMemory)

        .then(()=>this.props.history.push('/memories'))
        .catch(error=>console.error(error))
    }



render()
{
// console.log(this.state.memories1)
return(
<div  c>

     <div className="container ">
         <br></br>
        <form onSubmit={this.handleSubmit}>
          <div >
            <div className="col-auto">
            <input placeholder="image link" 
            type="text" 
            name='image' 
            value={this.state.image} 
            onChange={this.handleChange}
            className="form-control mb-2"
            />
            </div>
            <span/>
            <div className="col-auto">
            <input 
            placeholder="Title" 
            type="text" name='title' 
            value={this.state.title} 
            onChange={this.handleChange}
            className="form-control mb-2"
            />
            </div>
            <br/>
            <div className="col-auto">
            <input 
            placeholder="Date" 
            type="date" name='date' 
            value={this.state.date} 
            onChange={this.handleChange}
            className="form-control mb-2"
            /></div>
<span/><br/>
            <div className="col-auto">
            <textarea 
            placeholder="Description" 
            name='description' 
            value={this.state.description} 
            onChange={this.handleChange}
            className="form-control mb-2"
            /></div> <br/>
            <div className="row">
               
      <button 
      type="submit" 
      className="btn  btn-lg btn-block btn-info" 
      onClick={this.showClick}>
       Update
        </button>
      </div>
          </div>
        </form>
      <br/>
      <br /><br />
      
      <br /><br />
    </div>




</div>
)





}





}

export default withRouter (EditMemory)