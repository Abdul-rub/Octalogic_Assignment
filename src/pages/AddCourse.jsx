import { useState } from "react";
import { SideMenu } from "../Components/common/SideMenu";
import { useDispatch } from "react-redux";
import { postCourse } from "../redux/AppReducer/action";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    name: "",
    description: "",
    instructor: "",
    inst: "",
    week: "",
    std: "",
    price: "",
    status: ""
  });

  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);

    dispatch(postCourse(courseData))
      .then((res) => {
        if (res) {
          toast.success("Course Added Successfully");
          setCourseData({
            name: "",
            description: "",
            instructor: "",
            inst: "",
            week: "",
            std: "",
            price: "",
            status: ""
          });
        }
        setLoad(false);
        navigate("/course");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className='h-screen w-full flex'>
      {/* Side Menu */}
      <section className='grid grid-cols-12 gap-6'>
        <div className='bg-white'>
          <SideMenu />
        </div>

        <div className='col-span-10 w-[1320px] m-auto overflow-y-auto flex flex-col gap-4 mt-6'>
          <div className=' border border-stone-300 rounded-md drop-shadow-2x p-1 w-[45%] m-auto flex flex-col justify-center bg-white'>
            <h2 className='text-center text-xl font-sanss font-bold mt-2'>
              Add Course
            </h2>
            <div className=' w-[70%]  m-auto mt-6'>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-2">
                  <label className="text-slate-500 text-lg font-medium">Name</label>
                  <input
                    name="name"
                    value={courseData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Name"
                    className="w-full border border-stone-300 h-10 p-1 text-lg rounded-md outline-none"
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Descripton{" "}
                  </label>
                  <input
                    name="description"
                    value={courseData.description}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Description"
                    className="w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none"
                  />
                </div>

                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Instructor{" "}
                  </label>
                  <input
                    name="instructor"
                    type='text'
                    value={courseData.instructor}
                    onChange={handleChange}
                    placeholder='Enter Instructor'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Instrument{" "}
                  </label>
                  <input
                    name="inst"
                    type='text'
                    value={courseData.inst}
                    onChange={handleChange}
                    placeholder='Enter Instrument'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Day of Week{" "}
                  </label>
                  <input
                    name="week"
                    type='number'
                    value={courseData.week}
                    onChange={handleChange}
                    placeholder='Enter Day of Week'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    No of Students{" "}
                  </label>
                  <input
                    name="std"
                    type='number'
                    value={courseData.std}
                    onChange={handleChange}
                    placeholder='Enter No of Students'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Price{" "}
                  </label>
                  <input
                    name="price"
                    type='number'
                    value={courseData.price}
                    onChange={handleChange}
                    placeholder='Enter Price'
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  />
                </div>
                <div className='flex flex-col mb-2'>
                  <label className='text-slate-500 text-lg font-medium'>
                    Status{" "}
                  </label>
                  <select
                    name="status "
                    value={courseData.status}
                    onChange={handleChange}
                    className='w-full border border-stone-300 p-1 h-10 text-lg rounded-md outline-none'
                  >
                    <option value=''>Select</option>
                    <option value='Active'>Active</option>
                    <option value='Closed'>Closed</option>
                    <option value='Archived'>Archived</option>
                  </select>
                </div>
                <div className='flex items-center justify-center my-4 w-full'>
                  <button
                    className='w-full  h-10 font-bold text-lg bg-blue-500'
                    type={"submit"}
                  >
                    {load ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
