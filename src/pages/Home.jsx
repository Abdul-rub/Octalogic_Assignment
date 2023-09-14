import { SideMenu } from "../Components/common/SideMenu";
import "../App.css";
// import user from "../assets/user.png";

import { useState } from "react";
import { EnrolTable } from "../components/Table/EnrolTable";
import { StudentTable } from "../components/Table/StudentTable";
import InfoCard from "../components/InfoCards"


export const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [stdshow, setStdShow] = useState(false);
  return (
    <main className='h-screen w-full flex'>


      <section className='grid grid-cols-12 gap-6'>
        <div className='bg-white'>
          <SideMenu />
        </div>

        <div className='col-span-10 w-[1360px] flex flex-col gap-10 border-black mt-6'>

          <div className='flex flex-col gap-6'>
            <h1 className='font-bold text-xl text-light leading-normal '>
              Overview
            </h1>
            <div className=' flex h-[98px] justify-between'>

              <InfoCard name="34" description="Total number of students" />
              <InfoCard name="3" description="Total number of courses" />
              <InfoCard name="$2000" description="Total amount earned" />
              <InfoCard name="Guitar" description="Best performing course" />
              <InfoCard name="Flute" description="Worst performing course" />

            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center justify-between'>
              <h1 className='font-sanss font-bold text-light text-sm tracking-[0.4px]'>
                LATEST ENROLMENTS
              </h1>
              <div
                onClick={() => setShowAll(!showAll)}
                className=' text-sm text-secondary cursor-pointer'
              >
                View All Courses
              </div>
            </div>
            <EnrolTable showAll={showAll} />
          </div>


          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center justify-between'>
              <h1 className='font-sanss font-bold text-light text-sm tracking-[0.4px]'>
                BEST STUDENTS
              </h1>
              <div
                onClick={() => setStdShow(!stdshow)}
                className=' text-sm text-secondary cursor-pointer'
              >
                View All Courses
              </div>
            </div>
            <StudentTable stdshow={stdshow} />
          </div>
        </div>
      </section>
    </main>
  );
};
