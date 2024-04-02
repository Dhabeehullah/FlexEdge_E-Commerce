import React,{useState} from 'react'
import {Button} from "@nextui-org/button";
   

const Contact = () => {

  const [details,setDetails] = useState({
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    message:"",
  })
  
let name,value

const postData = (event) => {
   name = event.target.name;
   value = event.target.value;
   setDetails({...details,[name]:value})
}

const handleSubmit = async (e) => {
  e.preventDefault();
  const {firstName, lastName, email, address, message} = details;
  if(firstName && lastName && email && address && message){
  const res = await fetch(
    "https://flexedge-9381f-default-rtdb.firebaseio.com/userRecords.json",
    {
    method : "POST",
    headers:{
      "Content-Type":"application/json",
     },
     body:JSON.stringify({
      firstName,
      lastName,email,
      address,
      message,
     }),
    }
   );
   setDetails({
    firstName:"",
    lastName:"",
    email:"",
    address:"",
    message:"",
   })
   if(res){
    alert("Data Stored")
    }else{
      alert("Data is not stored")
    }
}else{
  alert("Heyyy, Fill everything otherwise i will come after u🦇")
}

}

  return (
    <div className='flex justify-center my-24'>
      <form method='POST'>
       <section className='border-neutral-500 rounded-md border-2 flex flex-col p-10 gap-5 w-fit '>
        <h1 className='text-2xl underline underline-offset-2 font-bold '>Connect With us!</h1>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="contact">First Name</label>
            <input className='border-2 w-full rounded-md  placeholder-slate-300 focus:outline-none focus:border-slate-600 focus:ring-slate-600  border-slate-400 p-2' type="text" name="firstName" id="firstName" placeholder='First Name' value={details.firstName} onChange={postData} required />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="contact">Last Name</label>
            <input className='border-2 w-full rounded-md  placeholder-slate-300 focus:outline-none focus:border-slate-600 focus:ring-slate-600  border-slate-400 p-2' type="text" name="lastName" id="lastName" placeholder='Last Name' value={details.lastName} onChange={postData} required />
          </div>
        </div>
        <div className='flex flex-col gap-4 sm:flex-row'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="contact">Email</label>
            <input className='border-2 w-full rounded-md  placeholder-slate-300 focus:outline-none focus:border-slate-600 focus:ring-slate-600  border-slate-400 p-2' type="text" name="email" id="email" placeholder='Email' value={details.email} onChange={postData} required />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="contact">address</label>
            <input className='border-2 w-full rounded-md  placeholder-slate-300 focus:outline-none focus:border-slate-600 focus:ring-slate-600  border-slate-400 p-2' type="text" name="address" id="address" placeholder='Address' value={details.address} onChange={postData} required />
          </div>
          
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="contact">Message</label>
          <textarea className='border-2 w-full rounded-md  placeholder-slate-300 focus:outline-none focus:border-slate-600 focus:ring-slate-600  border-slate-400 p-2'  name="message" id="message" cols="30" rows="5" placeholder='Message' value={details.message} onChange={postData}></textarea>
        </div>
        <Button type='submit' onClick={handleSubmit} className='self-center border-2 text-black bg-slate-100 border-slate-400 w-24' color="primary" variant="light">
          Submit!
        </Button> 
       </section>
      </form>
       
    </div>
  )
}

export default Contact