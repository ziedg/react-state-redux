import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Navbar from './components/navbar/navbar';
import ComponentState from './components/state_component/state-component';
import Clock from './components/clock/clock';



      
      
       

 class App extends React.Component  {
       constructor(props){
         super(props)
          this.state = {
           count:0,
           modalIsOpen: false,
           inputValue:'',
           change:''
         }
        }
   
   
       openModal= () =>{
        this.setState(()=> ({modalIsOpen: true}));
      }
    
      afterOpenModal=()=> {
        // references are now sync'd and can be accessed.
       
      }
    
      closeModal=() =>{
        this.setState({modalIsOpen: false});
      }




       handleAdd= ()=> {  
          this.setState((prevState)=>({count:prevState.count + +prevState.inputValue})
       )

       }
       handleMinus= ()=> {
        this.setState((prevState)=>({count:prevState.count - +prevState.inputValue})
        )
 
        }
        handleReset=()=>{
          this.setState(()=>({count:0})

          )
   
          }
          handleChange=(event) => {
         
            this.setState({inputValue:event.target.value})
            

          }
    
    render (){

      return (
        <div>
        <Navbar />
       <div className="container" >
     
       
       <ComponentState 
       
        
        />
        <Clock />

    </div>
    </div>
      

       
       
      )
  }



   }






ReactDOM.render(<App />,document.getElementById('app'));
