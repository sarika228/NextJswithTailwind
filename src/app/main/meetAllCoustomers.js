
import Image from "next/image";
import clientLogos from "./clientLogos";

export default function AllCustomers(){
    return(
        <div>
        <div className="flex flex-row justify-around mt-10 ml-20">
            <Image
            src='/DragonIcon.png'
            height={100}
            width={250}
            alt="dr-img"
            />

            <div className="ml-20 mr-10">
                <p >Maecenas dignissim justo eget nulla rutrum molestie. 
                    Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                     Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                      gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. 
                    Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h3 className="mt-3 text-[#4C4F4F]">Tim Smith</h3>
                    <p className="mt-2">British Dragon Boat Racing Association</p>

                    <div className="flex flex-row justify-around mt-3 -ml-13">
                    {clientLogos.map((item)=>{
                    return <div key={item?.id}>
                        <Image
                        src={item?.logo}
                        height={30}
                        width={30}
                        alt="clnt-alt"
                        />
                    </div>
                })}
            
                <p className="text-[#4CAF4F] font-medium">Meet all customers</p>
                <Image
                src="/Right.png"
                height={20}
                width={20}
                alt="rt-in"
                />
            </div>
            </div>
        </div>
            
        
        </div>
        
    )
}