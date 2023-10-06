import Link from "next/Link";
import Image from 'next/image';
import Navbar from "./navbar";

export default function Page(){
    return(
        <div className='flex flex-row mt-10 justify-around'>
        
        <Image
      src="/logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
         
        
        
          <Link href="/">Home</Link>
        
       
          <Link href="/service">Service</Link>
      
        
          <Link href="/feature">Feature</Link>
        
        
          <Link href="/product">Product</Link>
        
        
          <Link href="/testimonial">Testimonial</Link>
        
      
          <Link href="/faq">FAQ</Link>
      
        
        
        <button className="text-[#4CAF4F] font-medium mr-5">Login</button>
        <button className="text-[#FFFFFF] bg-[#4CAF4F] text-sm rounded-sm px-3 py-1">Sign up</button>
     </div> 
        
        )
}


{/* <div className='flex flex-row mt-10 justify-around'>
<div>
<Image
src="/logo.png"
width={100}
height={100}
alt="Picture of the author"
/>
</div>
<div> 
   <Navbar/> 
</div>
<div>
<button className="text-[#4CAF4F] font-medium mr-5">Login</button>
<button className="text-[#FFFFFF] bg-[#4CAF4F] text-sm rounded-sm px-3 py-1">Sign up</button>
</div> 
</div> */}