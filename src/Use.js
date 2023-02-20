import React, { useState } from 'react'

const Use = () => {
  // 1
     const [name,setName] = useState("Hari")    
    //  2
    const [count,setCount]= useState(0)
    // 3
    const [my,setMy]=useState({firstname:"Hari",lastname:"Prasath"})
    // 4
    const [res,setRes] = useState("")
    // 5
    const [con,setCon] = useState(0)

    // 6
    const [text,setText]=useState("Hello please write here")

    // 7

    const[input,setInput]=useState("")
   
    // functions

    //  1
    function handleClick(){
      alert('heloo')
  }
  function updateName(){
    setName("Prasath")
    alert("Click ok to Change Name")
  }

  // 2
    function updatecount(){
       setCount(count +1)
    }

    // 3
    function changename(){
      setMy({firstname:"Prasath",lastname:"Hari"})
    }
    
    // 4
     function reset(){
      setRes("")
    }

  //  5
    function increment(){
      setCon(con + 1)
    }
    function decrement(){
      setCon (con - 1 )
    }
// 6
    function handlechange(event){
      setText(event.target.value)
    }

    function uppercase(){
      let newText= text.toUpperCase()
      setText(newText)
    }
    
    function lowercase(){
      let newText=text.toLowerCase()
      setText(newText)
    }
   
    // 7

    function inputname(event){
        setInput(event.target.value)
    }


  return (
    <div>

      {/* 1 */}
        <div>{name}</div>
    <button onClick={updateName}>Click to change</button>
    <button onClick={handleClick}>Alert message</button>
     
     {/* 2 */}

    <h1>Button is clicked {count} time</h1>
    <button onClick={updatecount}> click here</button>

    {/* 3 */}
    <h1>My firstname is {my.firstname} and last name is {my.lastname}</h1>
    <button onClick={changename}>Click here</button>

    {/* 4 */}
    <input type="text" value={res} onChange={(e)=>setRes(e.target.value)}></input>
    <button onClick={reset}>Reset</button>

    {/* 5 */}
    <h1>{con}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    
    {/* 6 */}
    <textarea value={text} onChange={handlechange}></textarea>
    <button onClick={uppercase}> click to change uppercase</button>
    <button onClick={lowercase}>click to changee lower case</button>

    {/* 7 */}

    <input type="text" onChange={inputname}></input>
     <h1>{input}</h1>


    </div>
  )
}

export default Use