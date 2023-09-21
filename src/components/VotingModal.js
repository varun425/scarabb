import React from 'react'

const VotingModal = ({setVotingModal}) => {
  return (
    <div className="absolute inset-0 backdrop-blur-md flex justify-center items-center ">
      <div className='image-border p-5 max-w-[320px]'>
        <h2 className='text-center'>Cast your Vote.</h2>
        <p className='my-5 text-justify'>Lorem ipsum dolor haroookisa sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
        <div className='flex gap-6 items-center w-full mt-10'>
        <button className='btn-border py-2 w-[50%] text-[#E7DBC9] '>Agree</button>
        <button onClick={()=>setVotingModal(false)} className='btn-border py-2 w-[50%]  text-[#E7DBC9]'>Disagree</button>
        </div>
        <button className='btn-border py-2 w-full mt-5  text-[#E7DBC9]'>Visit Proposal & Rethink</button>

      </div>
    </div>
  )
}

export default VotingModal
