import Sidbar from "../../components/Sidbar/Sidbar";
import './style.css'



export default function Userdelete() {
  return (
    <div className=" flex   gap-16 items-center ">
    <Sidbar/>
    <div className="w-[75%] h-[650px]  ">





<div className="w-full bg-slate-300 rounded-t-3xl items-center pt-3 justify-between px-10  flex shadow-2xl  h-16">

<div>
    <h4 className=" text-xl font-bold">Users Tabl</h4>
</div>

</div>

<div

  className=" fontColor  bg-white  shadow-2xl  h-[440px] w-full"
>
  {[1,2,3,4,5,4].map((e) => {
    return (
      <div key={e} className=" flex items-center hover:shadow-2xl ">
        
        <div className=" w-1/4   flex  items-center pt-3">
          <img
            
            className=" ml-5 purpleColor rounded-full w-[40px] h-[40px] mb-[10px] mt-[11px] text-center  "
          />
          
          <p className=" ml-4 mt-[10px]     text-base">Email</p>


       
        </div>

        <div className=" w-3/4 items-center flex justify-between pt-3 ">
        <p className=" fontColor mt-[10px] font-bold text-base ">
         name
          </p>
       <p  className=" mt-[10px] buttons  font-bold text-base ">
          123456789
          </p>

        
          <p className=" fontColor mt-[10px] text-base ">
        JopTital
          </p>
          <p className=" fontColor mt-[10px] pr-16 text-base ">
        rool
          </p>

   

          
        </div>

      </div>
    );
  })}
</div>










</div>
    </div>
  )
}
