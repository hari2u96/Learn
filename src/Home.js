import React from 'react'

const Home = () => {

    const handleclick = () =>{
     console.log('Button has beeen clicked')
    } 
    const handleclickagain = (name) =>{
    console.log('Hello'+name)
    }
  return (
    <div>
        <button onClick={handleclick}>click me</button>
       <button onClick={() => handleclickagain('Hari')}>click me again</button> 
    </div>
  )
}

export default Home