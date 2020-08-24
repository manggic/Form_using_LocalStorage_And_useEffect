import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name , setName  ] = useState('')
  const [ remem , setRemem  ] = useState(false)
   

   useEffect( () =>{    
    const user =   localStorage.getItem('user')
    const rememberMe = localStorage.getItem('rememberMe')
    
    if(rememberMe === "true"){
      setRemem(rememberMe)
      setName(user)
    }

   }, [] )

   const handleSubmit =(e)=>{
       e.preventDefault();
      //  console.log(`Name : ${ name } ` )
      //  console.log( `Remember : ${ remem } ` ) 
       localStorage.setItem( 'rememberMe' , remem );
       localStorage.setItem( 'user', remem? (name ): "" )
   }     
   
   const handleChange = (e)=>{
     
    //console.log(e.target);

     ( e.target.type === "checkbox" )?( 
        setRemem( remem ? false  : true)
      ) :( setName( e.target.value ) )

   }

  const handleRemove =() => {
       console.log("done")
       localStorage.removeItem('user')
       localStorage.removeItem('rememberMe')        
   }

  return ( 
    <div  style={{textAlign : "center" }}  >
      <form onSubmit={ handleSubmit } >
          Enter Your name
          <input  type="text"  id="name"  value={ name }   onChange={ handleChange  }    placeholder="Enter name" /><br />
          <input type="checkbox" id='remem' checked={ remem   }    onChange={  handleChange  }  />Remember me?? <br  /> 
          <button>SignIN</button>  <br />
          
     </form>
     <button onClick={ handleRemove  }  >RemoveItem</button>
     </div>
  );
}

export default App;
