import Sidbar from "../../components/Sidbar/Sidbar";
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css'
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className=" flex   gap-16 items-center ">
        <Sidbar/>
        






<div className="w-[75%] h-[650px]  ">





<div className="w-full bg-slate-300 rounded-t-3xl items-center pt-3 justify-between px-10  flex shadow-2xl  h-16">

<div>
    <h4 className=" text-xl font-bold">Users Tabl</h4>
</div>
<div className=" flex items-center gap-5">
  
  <Link  to="/newuser"
   className=" w-32 rounded-full h-8 flex items-center pl-2  bg-gray-50">
  
  <button className="flex items-center gap-1" >
        <AddIcon/>
        <p>New Users</p>
    </button>
  
  
  </Link>
 

  <Link  to="/userdelete"
   className=" w-32 rounded-full h-8 flex items-center pl-2  bg-gray-50">
  
  <button className="flex items-center gap-1" >
        <AddIcon/>
        <p>Users Delet</p>
    </button>
    </Link>


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
          <p className=" fontColor mt-[10px] text-base ">
        rool
          </p>

       <div className="  w-44  flex gap-8 ">
<Link to={`/user/${e}`}>

<button   className=" hover:text-emerald-600  ">
       <PersonIcon fontSize='medium' />
          </button>

</Link>
      


          <button   className=" hover:text-red-500  ">
       <DeleteIcon fontSize='medium' />
          </button>


          <button   className="  hover:text-white ">
       <EditIcon fontSize='medium' />
          </button>
       </div>

          
        </div>

      </div>
    );
  })}
</div>








<div className=" bg-slate-300 w-full h-14 rounded-b-3xl relative">

<div className=" flex items-center gap-4 mr-12  mt-3 absolute right-0 w-32">
<button className="  border-2  font-medium hover:text-white border-slate-950 rounded-full h-8 w-8">1</button>
<button className="  border-2  font-medium hover:text-white border-slate-950 rounded-full h-8 w-8">2</button>
<button className="  border-2  font-medium hover:text-white border-slate-950 rounded-full h-8 w-8">3</button>



</div>




</div>


</div>




    </div>
  )
}
