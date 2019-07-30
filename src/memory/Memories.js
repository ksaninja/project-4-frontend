import React, { Component } from 'react'
import { withRouter , Link } from 'react-router-dom'

import {findAll,destroy} from './api'


class Memories extends Component {
state ={
    memories1: [],
}
    componentDidMount = ()=> {

        findAll(this.props.user)
        .then(
            res=> {
                this.setState({
                    memories1: res.data
                })
            }
        )
        .catch(
            error=>console.error(error)
        )
    }

    destroy = ( id) =>{
        destroy(this.props.user,id)
        .then(
            res=> this.componentDidMount()
        )
        .catch(
            error=>console.error(error)
        )
    }

render()
{
// console.log(this.state.memories1)
return(
<div>
<details>
     <summary>
         Add new memory
     </summary>
     
     <div className="container">
         <br></br>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-auto">
            <input placeholder="Title" 
            type="text" 
            name='Title' 
            value={this.state.s} 
            onChange={this.handleChange}
            className="form-control mb-2"
            />
            </div>
            <span/>
            <div className="col-auto">
            <input 
            placeholder="a" 
            type="text" name='a' 
            value={this.state.a} 
            onChange={this.handleChange}
            className="form-control mb-2"
            />
            </div>
            <br/>
            <div className="col-auto">
            <input 
            placeholder="Cover Url" 
            type="text" name='image' 
            value={this.state.image} 
            onChange={this.handleChange}
            className="form-control mb-2"
            /></div>
<span/>
            <div className="col-auto">
            <input 
            placeholder="Cover Url" 
            type="text" name='image' 
            value={this.state.image} 
            onChange={this.handleChange}
            className="form-control mb-2"
            /></div>
            <input 
            type="submit" 
            value="Submit" 
            className="btn btn-secondary mb-2" />
          </div>
        </form>
      <br/>
      <br /><br />
      <div className="row">
      <button 
      type="button" 
      className="btn  btn-lg btn-block btn-info" 
      onClick={this.showClick}>
        User Albums
        </button>
      </div>
      <br /><br />
    </div>
 </details>

{this.state.memories1.map(memory=>

    
<div key={memory._id}>

    <img src={memory.image}/>
    <h1>{memory.title}</h1>
    <h3>{memory.date}</h3>
    <h3>{memory.description}</h3>

        <button 
      className="btn  btn-lg btn-block btn-info" 
      onClick={() => this.destroy(memory._id)}>
        delete
        </button>
</div>)}

</div>
)





}





}

export default withRouter (Memories)