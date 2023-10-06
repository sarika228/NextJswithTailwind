import Image from "next/image"
export default function Register(){
    return(
        <div className='flex flex-row justify-evenly mt-10 bg-[#F5F7FA]'>
            <div className="mt-10">
            <h1 className="mt-5 text-2xl">Lessons and insights <span className="text-[#4CAF4F]">from 8 years</span></h1>
            <p className="text-xs text-[
#717171] mt-5">Where to grow your business as a photographer: site or social media?</p>
            <button className="text-[#FFFFFF] bg-[#4CAF4F] rounded-sm text-xs px-3 py-1 mt-5">Register</button>
            </div>
            <div>
                <Image
                src='/Illustration.png'
                height={200}
                width={200}
                alt=""
                />
            </div>
        </div>
    )
}