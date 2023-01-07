import React from 'react'
import "./home.css"


function sayhi(){
  return(
      alert("Your NFT will now be used for fundraising purpose and all the profit earned will be used for good cause")
  )
}


function Home() {

  return (
    <div className='homee'>
        <br></br>
        <h1 className='header'><center>Your Small Donation can make a Big Change</center></h1>
        <br></br>
        <div className='card-grid'>
          <div></div>
          <div className = "card">
              <div className='top'>WOMEN EMPOWERMENT</div>
              <div><img alt="img"></img></div>
              <div className='bottom'>Receiver's Address:</div>
          </div>
          <div></div>
          <div className = "card">
              <div className='top'>CANCER</div>
              <div><img alt="img"></img></div>
              <div className='bottom'>Receiver's Address:</div>
          </div>
          <div></div>
        </div>
        <br></br>
        <div className='card-grid'>
          <div></div>
          <div className = "card">
              <div className='top'>HUNGER</div>
              <div><img alt="img"></img></div>
              <div className='bottom'>Receiver's Address:</div>
          </div>
          <div></div>
          <div className = "card">
              <div className='top'>CHILD ABUSE</div>
              <div><img alt="img"></img></div>
              <div className='bottom'>Receiver's Address:</div>
          </div>
          <div></div>
        </div>

        <button className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] btn ' onClick={sayhi} >ADD YOUR OWN CAMPAIGN</button>
      
    </div>
  )
}

export default Home
