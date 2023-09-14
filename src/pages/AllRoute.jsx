import { Routes, Route } from "react-router-dom";

import { Course } from "./Course";
import { AddCourse } from "./AddCourse";
import { Home } from "./Home";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
          <Route>
            <Route path='/course' element={<Course />} />
            <Route path='/' element={<Home />} />
            <Route path='/addcourse' element={<AddCourse />} />
          </Route>

      </Routes>
    </div>
  );
};
