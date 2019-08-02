import React, { Component } from 'react'
import { withRouter , Link } from 'react-router-dom'

import {findAll,destroy, create} from './api'
import './Memories.css'

class Memories extends Component {
state ={
    memories1: [],
    title: '',
    image:'',
    date:'',
    description:''
    
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
    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value

        })
    }


    handleSubmit = event =>{
        event.preventDefault()
        const newMemory = this.state
        create(this.props.user,newMemory)

        .then(res=>this.componentDidMount())
        .catch(error=>console.error(error))
    }



render(){
// console.log(this.state.memories1)
return(
<div>
    <br/>
        <details>
            <summary className="badge badge-secondary badge-pill badge-info">
                <h4>Add new memory</h4> 
            </summary>
            
            <div className="container">
                <br></br>
                <form onSubmit={this.handleSubmit}>
                <div className="">
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
                    /></div>
                    <br/>
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
        <br/><br/>

 {this.state.memories1.map(memory=>(

            
        // <div key={memory._id}>

        //     <img src={memory.image}/>
        //     <h1>{memory.title}</h1>
        //     <h3>{memory.date}</h3>
        //     <h3>{memory.description}</h3>

        //         <button 
        //       className="btn  btn-lg btn-block btn-info" 
        //       onClick={() => this.destroy(memory._id)}>
        //         delete
        //         </button>

        //         <button 
        //       className="btn  btn-lg btn-block btn-info" 
        //       onClick={() => this.props.history.push(`/memories/${memory._id}`)}>
        //         Edit the memory
        //         </button>

<div  key={memory._id} className="card-columns">
        <div className="card">
        <img src={memory.image} className="card-img-top"/>
             <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
            <div className="card-body">
            <h1 className="card-title">{memory.title}</h1>
           <h3 className="card-text">{memory.date}</h3>
            
            <p className="card-text">{memory.description}</p>
            
            <br/>

            <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => this.destroy(memory._id)}>
                delete
                </button>

                <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => {
                return this.props.history.push(`/memories/${memory._id}`);
            }}>
                Edit the memory
                </button>
            </div></div>
            <div className="card p-3">
    <blockquote className="blockquote mb-0 card-body">
    <img src={memory.image} className="card-img-top"/>
            <div className="card-body"> 
            <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
          
            <h1 className="card-title">{memory.title}</h1>
             <h3 className="card-text">{memory.date}</h3>
           
            <p className="card-text">{memory.description}</p>
           
            <br/>

            <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => this.destroy(memory._id)}>
                delete
                </button>

                <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => {
                return this.props.history.push(`/memories/${memory._id}`);
            }}>
                Edit the memory
                </button>
      </div>
    </blockquote>
    </div>
  
  <div className="card">
    <div className="card-body">
    <span className=" rotate75m"><img src={memory.image} className="card-img-top"/></span>
            <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
              <h1 className="card-title">{memory.title}</h1>
         <div className="card-body">
            
          <h3 className="card-text">{memory.date}</h3>
            
            <p className="card-text">{memory.description}</p>
            
            <br/>

            <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => this.destroy(memory._id)}>
                delete
                </button>

                <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => {
                return this.props.history.push(`/memories/${memory._id}`);
            }}>
                Edit the memory
                </button>
         </div>
    </div>
  </div>
  <div className="card p-3">
   <blockquote className="blockquote mb-0 card-body">
   <img src={memory.image} className="card-img-top"/>
           <div className="card-body"> 
           <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
         
           <h1 className="card-title">{memory.title}</h1>
            <h3 className="card-text">{memory.date}</h3>
          
           <p className="card-text">{memory.description}</p>
          
           <br/>

           <button 
           className="btn  btn-lg btn-block btn-info" 
           onClick={() => this.destroy(memory._id)}>
               delete
               </button>

               <button 
           className="btn  btn-lg btn-block btn-info" 
           onClick={() => {
            return this.props.history.push(`/memories/${memory._id}`);
        }}>
               Edit the memory
               </button>
     </div>
   </blockquote>
   </div>
  <div className="card bg-dark text-white text-center p-3">
    <blockquote className="blockquote mb-0">
    
            <span className=" rotate75 "><img src={memory.image} className="card-img-top rotate75" /></span> 
             <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29" /> <font size="3" color="darkred">Like it</font>
            <div className="card-body">
               
            <h1 className="card-title">{memory.title}</h1>
           <h3 className="card-text">{memory.date}</h3>
            
            <p className="card-text">{memory.description}</p>
            
            <br/>

            <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => this.destroy(memory._id)}>
                delete
                </button>

                <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => {
                return this.props.history.push(`/memories/${memory._id}`);
            }}>
                Edit the memory
                </button>
     </div>
    </blockquote>
  </div>
  
   <div className="card p-3">
   <blockquote className="blockquote mb-0 card-body">
   <img src={memory.image} className="card-img-top"/>
           <div className="card-body"> 
           <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
         
           <h1 className="card-title">{memory.title}</h1>
            <h3 className="card-text">{memory.date}</h3>
          
           <p className="card-text">{memory.description}</p>
          
           <br/>

           <button 
           className="btn  btn-lg btn-block btn-info" 
           onClick={() => this.destroy(memory._id)}>
               delete
               </button>

               <button 
           className="btn  btn-lg btn-block btn-info" 
           onClick={() => {
            return this.props.history.push(`/memories/${memory._id}`);
        }}>
               Edit the memory
               </button>
     </div>
   </blockquote>
   </div>
 <div className="card p-3">
 <blockquote className="blockquote mb-0 card-body">
 <img src={memory.image} className="card-img-top"/>
         <div className="card-body"> 
         <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
       
         <h1 className="card-title">{memory.title}</h1>
          <h3 className="card-text">{memory.date}</h3>
        
         <p className="card-text">{memory.description}</p>
        
         <br/>

         <button 
         className="btn  btn-lg btn-block btn-info" 
         onClick={() => this.destroy(memory._id)}>
             delete
             </button>

             <button 
         className="btn  btn-lg btn-block btn-info" 
         onClick={() => {
            return this.props.history.push(`/memories/${memory._id}`);
        }}>
             Edit the memory
             </button>
   </div>
 </blockquote>
 </div>
  <div className="card text-center">
    <div className="card-body">
    <img src={memory.image} className="card-img-top"/>
             <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
           
            <h1 className="card-title">{memory.title}</h1>
            <h3 className="card-text">{memory.date}</h3>
            <div className="card-body">
            <p className="card-text">{memory.description}</p>
            </div>
           
            <br/>

            <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => this.destroy(memory._id)}>
                delete
                </button>

                <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => {
                return this.props.history.push(`/memories/${memory._id}`);
            }}>
                Edit the memory
                </button>
  </div></div> 
  <div className="card">
  <div className="card-body">
      <h1 className="card-title">{memory.title}</h1>
  <img src={memory.image} className="card-img-top"/>
  
          <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>

         <h3 className="card-text">{memory.date}</h3>
          <p className="card-text">{memory.description}</p>
          
          <br/>

          <button 
          className="btn  btn-lg btn-block btn-info" 
          onClick={() => this.destroy(memory._id)}>
              delete
              </button>

              <button 
          className="btn  btn-lg btn-block btn-info" 
          onClick={() => {
            return this.props.history.push(`/memories/${memory._id}`);
        }}>
              Edit the memory
              </button></div>
     </div>
<div className="card">

  <div className="card p-3 text-right">
    <blockquote className="blockquote mb-0">
    <img src={memory.image} className="card-img-top"/>
<img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
           
            <h1 className="card-title">{memory.title}</h1>
            <div className="card-body">
                <h3 className="card-text">{memory.date}</h3>
            
            <p className="card-text">{memory.description}</p>
            </div>
            
            <br/>

            <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => this.destroy(memory._id)}>
                delete
                </button>

                <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => {
                return this.props.history.push(`/memories/${memory._id}`);
            }}>
                Edit the memory
                </button>
    </blockquote>
  </div></div>

       
  <div className="card">
    <div className="card-body">
        <h1 className="card-title">{memory.title}</h1>
    <img src={memory.image} className="card-img-top"/>
    
            <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>

           <h3 className="card-text">{memory.date}</h3>
            <p className="card-text">{memory.description}</p>
            
            <br/>

            <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => this.destroy(memory._id)}>
                delete
                </button>

                <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => {
                return this.props.history.push(`/memories/${memory._id}`);
            }}>
                Edit the memory
                </button></div>
       </div>
  

  <div className="card bg-primary text-white text-center p-3">
  <blockquote className="blockquote mb-0">
  <img src={memory.image} className="card-img-top"/>
            <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
          <div className="card-body">
             
          <h1 className="card-title">{memory.title}</h1>
         <h3 className="card-text">{memory.date}</h3>
          
          <p className="card-text">{memory.description}</p>
          
          <br/>

          <button 
          className="btn  btn-lg btn-block btn-info" 
          onClick={() => this.destroy(memory._id)}>
              delete
              </button>

              <button 
          className="btn  btn-lg btn-block btn-info" 
          onClick={() => {
            return this.props.history.push(`/memories/${memory._id}`);
        }}>
              Edit the memory
              </button>
   </div>
  </blockquote>
</div>
 <div className="card">
 <div className="card-body">
     <h1 className="card-title">{memory.title}</h1>
 <img src={memory.image} className="card-img-top"/>
 
         <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>

        <h3 className="card-text">{memory.date}</h3>
         <p className="card-text">{memory.description}</p>
         
         <br/>

         <button 
         className="btn  btn-lg btn-block btn-info" 
         onClick={() => this.destroy(memory._id)}>
             delete
             </button>

             <button 
         className="btn  btn-lg btn-block btn-info" 
         onClick={() => {
            return this.props.history.push(`/memories/${memory._id}`);
        }}>
             Edit the memory
             </button></div>
    </div>
  <div className="card bg-danger text-white text-center p-3">
    <blockquote className="blockquote mb-0">
    <img src={memory.image} className="card-img-top"/>
              <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
            <div className="card-body">
               
            <h1 className="card-title">{memory.title}</h1>
           <h3 className="card-text">{memory.date}</h3>
            
            <p className="card-text">{memory.description}</p>
            
            <br/>

            <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => this.destroy(memory._id)}>
                delete
                </button>

                <button 
            className="btn  btn-lg btn-block btn-info" 
            onClick={() => {
                return this.props.history.push(`/memories/${memory._id}`);
            }}>
                Edit the memory
                </button>
     </div>
    </blockquote>
  </div>
   <div className="card">
   <div className="card-body">
       <h1 className="card-title">{memory.title}</h1>
   <img src={memory.image} className="card-img-top"/>
   
           <img src="https://img.icons8.com/cotton/2x/like--v1.png" height="29" width="29"/> <font size="3" color="darkred">Like it</font>
 
          <h3 className="card-text">{memory.date}</h3>
           <p className="card-text">{memory.description}</p>
           
           <br/>
 
           <button 
           className="btn  btn-lg btn-block btn-info" 
           onClick={() => this.destroy(memory._id)}>
               delete
               </button>
 
               <button 
           className="btn  btn-lg btn-block btn-info" 
           onClick={() => {
            return this.props.history.push(`/memories/${memory._id}`);
        }}>
               Edit the memory
               </button></div>
      </div>
       </div>
 ))}
 </div>

 
)}}


export default withRouter(Memories)