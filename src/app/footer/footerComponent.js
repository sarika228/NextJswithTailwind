import Image from 'next/image'

export default function FooterComponent(){
    return(
      <div className='bg-[#263238] flex flex-row justify-around pt-5'>
        <div>
            <Image
            src="/logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
      className='bg-white'
            />

            <p className='text-[#FFFFFF] mt-3 text-sm'>Copyright @ 2020 Nexcent ltd.</p>
           <p className='text-[#FFFFFF] text-sm'>All rights reserved</p>
           <div className='flex flex-row justify-evenly mt-5 -ml-10'>
            <Image 
             src="/Instagram.png"
      width={30}
      height={30}
      alt="Picture of the author"
            />
            <Image
             src="/threads.png"
      width={30}
      height={30}
      color='red'
      alt="Picture of the author"
            />
            <Image
             src="/twitter.png"
      width={30}
      height={30}
      alt="Picture of the author"
            />
            <Image
             src="/youtube.png"
      width={30}
      height={30}
      alt="Picture of the author"
            />
           </div>
        </div>

        <div className='text-[#F5F7FA]'>
            <h3 className='text-[#FFFFFF] font-medium'>Company</h3>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Testimonials</p>
        </div>

        <div className='text-[#F5F7FA] text-sm'>
            <h3 className='text-[#FFFFFF] font-medium'>Support</h3>
            <p>Help center</p>
            <p>Terms of service</p>
            <p>Legal</p>
            <p>Privacy policy</p>
            <p>Status</p>
        </div>

        <div >
            <h2 className='text-[#FFFFFF] font-medium'>Stay up to date</h2>

            <div className='flex flex-row text-[#FFFFFF] mt-3  bg-gray rounded-sm' >
                  <p className='text-sm pr-3'>Your email address</p>
                  <Image
             src="/send.png"
      width={20}
      height={20}
      alt="Picture of the author"
            />
            </div>
        </div>

        </div>
    )
}