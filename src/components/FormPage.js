import React from 'react'
import Navebar from './Navebar'

const FormPage = () => {
  return (
    <div className='formpage-bg py-20'>
                <Navebar/>

        <div className='max-w-[1200px] mx-auto flex justify-between mt-32 gap-20'>
            <div className=''>
      
<div className='max-w-[1300px] mx-auto flex justify-between  '>
      <div className='w-[35%] '>
        <h4 >What is Egyptian ERA ?</h4>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

        <button className='mt-5 text-[#E7DBC9]'>More +</button>
      </div>
      <div className='w-[35%] '>
        
        <h4>
        Why Baracs?
</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
<button className='mt-5 text-[#E7DBC9]'>More +</button>
</div>
</div>
<div className='max-w-[1300px] mx-auto flex justify-between mt-20 '>
      <div className='w-[35%] '>
        <h4>Egyptian ERA again</h4>
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        <button className='mt-5 text-[#E7DBC9]'>More +</button>
      </div>
      <div className='w-[35%] '>
        <h4>
        Egyptian ERA again
</h4>
<p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
<button className='mt-5 text-[#E7DBC9]'>More +</button>


</div>
</div>
</div>
<div className='  flex flex-col justify-center p-14 gap-8 text-center w-[400px] h-[450px]' style={{backgroundImage:'url("/images/form.png")',backgroundSize:"100% 100%"}}>
    <h5 className='text-[#32170B] text-[20px] font-medium font-[ MADE TOMMY] '>Get all great news</h5>
<input placeholder='Enter email address' className='bg-transparent p-2 border border-[#32170B] rounded-md placeholder:text-[#32170B] text-[#32170B] '/>
<button className='bg-[#55442E] text-[#E7DBC9] rounded-md py-2'>Submit</button>
<p className='text-[#52412B] text-sm'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
</p>
<div className='flex justify-between items-center '>
    <img  src="/images/twitter.png" alt="twitter"/>
    <img  src="/images/telegram.png" alt="telegram"/>
    <img  src="/images/raddid.png" alt="raddit"/>
    <img  src="/images/instagram.png" alt="instagram"/>

</div>
</div>
      </div>
    </div>
  )
}

export default FormPage
