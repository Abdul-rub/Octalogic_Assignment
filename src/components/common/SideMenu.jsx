import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import logo from "../../assets/Logo.png";
import logout from "../../assets/logout.png";
import { Link,  } from "react-router-dom";


export const SideMenu = () => {

  return (
    <main className='w-24 h-[100%] lg:h-auto xl:h-screen  flex flex-col justify-between items-center bg-white'>
      <div className='w-[80%] h-[30%] flex flex-col justify-between items-center'>
        <div className='w-[48px] h-[48px]'>
          <img src={logo} alt='' />
        </div>


        <div className=' h-[60%] w-full flex flex-col justify-between gap-4 items-center'>
          {" "}
          <div className='border border-red-200 rounded-md bg-red-200 h-2/4 w-full flex flex-col justify-center items-center'>
            <Link
              to='/'
              className='border border-red-200 rounded-md bg-red-200 h-full w-full flex flex-col justify-center items-center'
            >
              {" "}
              <AiOutlineAppstoreAdd className='h-[24px] w-[24px]' />
              <p>Home</p>{" "}
            </Link>
          </div>


          <div className=' bg-stone-200 rounded-md  h-2/4 w-full flex flex-col justify-center items-center'>
            <Link
              to='/course'
              className='border border-stone-200 rounded-md bg-stone-200 h-full w-full flex flex-col justify-center items-center'
            >
              {" "}
              <BsMusicNoteList className='h-[24px] w-[24px]' />
              <p>Courses</p>{" "}
            </Link>
          </div>
        </div>
      </div>


      <div className='h-[50px] w-full flex justify-center items-center'>
        <div className=' bg-gray-200 flex flex-col justify-center items-center'>
          <div className='h-[24px] w-[24px] '>
            <img src={logout} alt='' />
          </div>
          <button  className='text-stone-600'>
            Logout
          </button>
        </div>
      </div>
    </main>
  );
};
