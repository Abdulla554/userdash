// import { useParams } from "react-router-dom"
import Sidbar from "../../components/Sidbar/Sidbar";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


export default function User() {
    // const {id}=useParams()
    const them={
      fontColor: "#FFFFFF",
      mainBackGroundColor: "#1A0733",
      outColor: "ff6700",
      blackColor: "#111111",
      SidBar: "#211D52",
      SidBarfont: "#C1BBEB" ,
      OrngColor: "#FB7D5B",
      greenColor: "#4CBC9A",
      gray:"#F5F5F5",
      Navsheet:"#231E52 ",
      bgsheet:"#0E1563 ",
      purpleColor: "#C1BBEB",
      Darkblue: "#272A61",
      ylawoColor: "#FCC43E",
      button:"#867BFF",
      massg:"#3E3781",
      card:"#192A52",
      shadowColor: "#00171f",
      nav: "#223061"
    }
    const Arr=[{
      title:"Name:",
      suptitle:"Justin Hope",
      icon:<PermIdentityIcon fontSize="small"/>,
    },
  
    {
      title:"Jop Tital:",
      suptitle:"Jakarta, Indonesia",
      icon:<LocationOnOutlinedIcon fontSize="small"/>,
    },
    {
      title:"Phone:",
      suptitle:"+12 345 6789 0",
      icon:<CallOutlinedIcon fontSize="small"/>,
    },
    {
      title:"Email:",
      suptitle:"Hope@mail.com",
      icon:<MailOutlineIcon fontSize="small"/>,
    },
  ]
  return (
    <div className=" flex   gap-16 items-center ">
    <Sidbar/>
    


    <div style={{ color:them.fontColor , background:them.card}} className=" mb-6 h-[300px]  rounded-3xl w-[1140px]   ">

    <div style={{ background:them.purpleColor}} className=" bor absolute  top-56  right-[630px] w-28 h-28  rounded-full  "/>  

<div className=" mt-44 px-6 flex justify-between">
  {Arr.map((e)=>{
    return(
      // eslint-disable-next-line react/jsx-key
      <div>
      <h6 className=" ml-1">{e.title} </h6>
      <div className=" flex gap-2 mt-2">
        <div style={{ color:them.blackColor , background:them.OrngColor}}  className=" w-8 h-8  rounded-full">
        <div style={{ paddingLeft:6 }} >
          {e.icon}
        </div>
        </div>
      <p>{e.suptitle} </p>
      </div>
      
      
      </div>
    )
  })}

</div>



</div>

     </div>
  )
}
