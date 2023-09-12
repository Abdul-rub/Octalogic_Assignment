
import  { useCallback } from "react";
import Sidebar from "../components/Sidebar";
import Enrollments from "../components/Enrollments";
import BestStudents from "../components/BestStudents";
import Cards from "./cards";

// import { useNavigate } from "react-router-dom";

const AdminstratorOverview = () => {
  //   const navigate = useNavigate();

//   const onFrameContainerClick = useCallback(() => {
//     // navigate("/adminstrator-overview");
//   }, []);

//   const onFrameContainer1Click = useCallback(() => {
//     // Please sync "Adminstrator - Courses" to the project
//   }, []);

  return (
    <>
    
    <div className="relative bg-colours-background-body w-full flex flex-row items-start justify-start text-left text-xs text-colours-secondary-800 font-text-body-caption">
      <Sidebar
        // onFrameContainerClick={onFrameContainerClick}
        // onFrameContainer1Click={onFrameContainer1Click}
      />
       
  
      <div className="flex-1 h-[1024px] overflow-hidden flex flex-col py-6 px-9 box-border items-start justify-start gap-[32px] text-base text-colours-text-light-secondary">
      <div style={{display:"flex", justifyContent:"space-between", gap:"10px"}}>
      <Cards name={164} desc={'total number of student'}/>
      <Cards name={12} desc={'total number of courses'}/>
      <Cards name={'$2000'} desc={'total amount earned'}/>
      <Cards name={'Guitar'} desc={'best performing courses'}/>
      <Cards name={'Flute'} desc={'worst performing course'}/>

      </div>
     
        <Enrollments />
        <BestStudents />
      </div>
    </div>
    </>
  );
};

export default AdminstratorOverview;

