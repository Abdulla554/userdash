import Sidbar from "../../components/Sidbar/Sidbar";
import './style.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export default function Newuser() {
  return (
    <div className=" flex   gap-16 items-center ">
        <Sidbar/>
        
        



{/* --------------------------------------- */}
<div className="w-[75%] h-[650px]   relative  ">


<div className=" w-full h-14 mt-3 rounded-t-2xl  button"  >
<h4 className=" text-white  pt-4 pl-9 text-xl font-bold ">New User</h4>
</div>







{/* --------------------------- */}
<div className=" w-full h-[270px]  rounded-b-3xl text-white flex gap-6 Navsheet px-6 pt-3 "  >


<div className=" w-1/6 mt-8 " >
<h4 className=" mb-1" >image *</h4>
<input placeholder="  Drag and drop or 
click " className=" h-32 inputs  "/>
</div>





<div className=" w-5/12  pt-6 ">

<h5 className=" mt-2  " >Email *</h5>
<input type="texet" placeholder=" Email@mail.com" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-2  " > Name *</h5>
<input type="texet" placeholder="Mana William" className=" h-9 rounded-md w-full inputs  "/>



</div>

<div className=" w-5/12  pt-6 ">

<h5 className=" mt-2  " >Number *</h5>
<input type='number' placeholder="+964055005666" className=" h-9 rounded-md w-full inputs  "/>

<h5 className=" mt-2  " > Jop Tital *</h5>
<input type="texet" placeholder="Mana William" className=" h-9 rounded-md w-full inputs  "/>



</div>


<button className=" button text-white hover:scale-110 absolute top-[260px]  right-0 pl-10 gap-1 mr-6 mt-3  w-[166px] h-9 rounded-full flex items-center">
<AddCircleOutlineIcon/>
  <p className=" font-medium text-lg">ADD</p>

</button>



</div>






</div>   








        </div>)
}
