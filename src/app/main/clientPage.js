import Image from 'next/image';
import clientLogos  from "./clientLogos";
import communityData from "./communityData"


export default function OurClients(){

  
    return(
        <div className='text-center mt-10'>
            <h3 className='text-2xl text-[#717171]'>Our Clients</h3>
            <p>We have been working with some Fortune 500+ clients</p>

            <div className="flex flex-row justify-evenly mt-10">
                {clientLogos.map((item)=>{
                    return <div key={item?.id}>
                    <Image 
                    
                    src={item?.logo}
                    height={40}
                    width={40}
                    alt='client-logos'
                    />
                    </div>
                })}
            </div>
            <div className='mt-10'>
                <h1 className='text-2xl'>Manage your entire community in a single system</h1>
                <p className='text-[#717171]'>Who is Nextcent suitable for?</p>

                <div className="flex flex-row bg-[#FFFFFF]">
                    {communityData.map((item)=>{
                        return <div   key={item?.id} className='bg-[#ABBED1,#FFFFFF] h-280 w-299 rounded-md p-24 32 24 32'>
                            <Image
                           
                            src={item?.img}
                            height={60}
                             width={60}
                             style={{marginLeft:80}}
                            alt='client-logos'
                            />
                            <h1 className='text-[#4D4D4D] text-md font-bold'>{item?.title}</h1>
                            <p className='text-xs text-[#717171]'>{item?.subTitle}</p>
                        </div>
                    })}
                </div>
            </div>

            <div className='flex flex-row justify-evenly'>
                <Image
                src='/pixelGrade.png'
                height={250}
                width={250}
                alt='pixel'
                />
                <div>
                    <h1 className='text-xl font-bold text-[y
#4D4D4D]'>The unseen of spending three years at Pixelgrade</h1>
                    <p className='text-[
#717171] text-xs mt-5 flexWrap-wrap max-w-xl'>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit.Sed sit amet justo ipsum.
Sed accumsan quam vitae est varius fringilla.
 Pellentesque placerat vestibulum lorem sed porta.
  Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
   Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className="bg-[#4CAF4F] mt-5 rounded-sm text-sm text-[#FFFFFF] px-3 py-1">Learn More</button>
                </div>
            </div>
        </div>
    )
}