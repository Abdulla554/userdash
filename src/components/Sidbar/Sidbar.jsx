import { ImUsers } from "react-icons/im";
import { Link } from "react-router-dom";
export default function Sidbar() {
  return (

    <div className=" bg-slate-300  rounded-2xl shadow-2xl  w-64 h-[100vh]  flex flex-col items-center gap-5 pt-10   ">
        


        <Link to='/'  className="flex items-center gap-2" >
        <div className="  text-black flex items-center gap-2  text-xl font-bold hover:text-2xl    w-28">
      

        <ImUsers/>
<button > Users</button>

</div>
</Link> 


    </div>
  )
}
