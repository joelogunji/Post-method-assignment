import React,{useState} from "react";
import './App.css';



function App (){
// A State Capturing Inputs 
  const [text, setText] = useState("");

//A state holding our datas
  const [lsetf, setLsetf] = useState([
    {
      id: 1,
      comment: "great!!!"
    }
  ]);

// Function for Posting
  const Post = () => {
    const items = {
      id : lsetf.length + 1,
      comment: text,
    };
    setLsetf([...lsetf, items]);
  // Responsible for Removing items in our input
    setText("");
  }

  const Delete = () => {
  const items = {
  id: "",
  comment: "",
  };
  setLsetf([]);
  setText("");
  };

  console.log(lsetf)
  console.log(text)

  return(
    <div className="CardHolder">
      <br/>
{/* OUR INPUT */}
      <input className="comment" value={text} onChange={(e)=>{setText(e.target.value)
         console.log(text)
      }} placeholder="Comment"/>
      <br />

{/* BUTTON FOR CALLING OUR POST FUNCTION */}
      <button onClick={()=>{
        Post()
        console.log('Have Posted')
      }}>Post</button>

{/* This is where our Datas are being Mapped */}
      {lsetf.map((props)=>(
        <div className="Card">
          <div>{props.id} .</div>
          <div>Comment:  {props.comment}   <button className="" onClick={()=>{Delete()}}>Delete</button></div>
        </div>
      ))}


    </div>
  )
}

export default App











  // <div className="Main_Container">
    //   <div className="Holder">
    //     <button onClick={Minus}>-</button>
    //     <h2>{add}</h2>
    //     <button onClick={Plus}>+</button>
    //   </div>
    // </div>




  //   const [add, setAdd]= useState(0)

//   function Plus(){
//     setAdd(add +1)
//   }

//   const Minus = () => {
//     setAdd(add -1)
//   }
