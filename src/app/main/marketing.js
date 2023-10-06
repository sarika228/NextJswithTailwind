import Image from 'next/image';
import marketingData from './marketingData';


export default function Marketing(){
    return(
        <div className='mt-10 text-center justify-center bg-[#FFFFFF]'>
            <h1 className='text-[#4D4D4D] text-2xl font-medium'>Caring is the new marketing</h1>
            <p className='text-center'>The Nexcent blog is the best place to read about the latest membership insights,trends and more. See who's joining the community, 
            read about how our community are increasing their membership income and lot's more.
            ​</p>

            <div  className='flex flex-row justify-evenly mt-5 relative'>
                {marketingData.map((item)=>{
                   
                    return <div   key={item?.id} className=''>

                        <Image
                       
                        src={item?.img}
                        height={250}
                        width={250}
                        style={{borderRadius:4}}
                        alt="merk-alt"
                        />
                        
                        <div className='w-60 h-35 rounded-sm bg-[#F5F7FA]  absolute bottom-0 rigth-0  m-2 pt-2'>
                        <p className=' text-sm '>{item?.content}</p>
                        <div className='flex flex-row align-center justify-center pt-2'>
                        <button className='text-sm text-[#4C4F4F] '>{item?.btnText}</button>
                        <Image
                        src={item?.arrowIcon}
                        height={20}
                        width={20}
                        alt="arrow-icon"
                        />
                        </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}