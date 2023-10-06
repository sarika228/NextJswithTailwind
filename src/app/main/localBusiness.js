import Image from 'next/image'
import businessData from './businessData'
export default function LocalBusiness(){
    return(
        <div>
        <div className='flex flex-row justify-around bg-[#F5F7FA]'>
            <div className='mt-5'>
            <h1 className='text-2xl max-w-lg'>Helping a local <span className='text-[#4CAF4F] text-2xl pt-10'>business reinvent itself</span></h1>
            <p>We reached here with our hard work and dedication</p>
            </div>

            <div className='flex flex-row grid grid-cols-2 justify-around'>
                {businessData.map((item)=>{
                    return <div  key={item?.id} className='flex flex-row pr-20'>
                        <Image
                        
                        src={item?.icon}
                        height={20}
                        width={20}
                        alt="alt-img"
                        />
                        <div className='mt-2 ml-3 pb-4'>
                        <p className='text-xs'>{item?.count}</p>
                        <p className='text-xs'>{item?.text}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
        <div className='flex flex-row justify-around mt-3'>
            <Image
            src='/pana.png'
            height={250}
            width={250}
            alt="pana-img"
            />
            <div className='mt-5'>
                <h1 className='text-2xl'>How to design your site footer like we did</h1>
                <p className='text-xs max-w-xl mt-2 text-[#717171]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                     massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. 
                     In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. 
                     In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
                      Praesent felis est, 
                    finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='bg-[#4CAF4F] px-3 py-1 text-[#FFFFFF] text-xs mt-3 rounded-sm'>Learn More</button>
            </div>
        </div>
        </div>
    )
}