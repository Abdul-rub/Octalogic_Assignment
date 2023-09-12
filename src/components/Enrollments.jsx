


import { latestEnrollmentData } from '../db.json';

const Enrollments = () => {
  return (
    <>
      <div className="self-stretch flex flex-row items-center justify-between">
        <b className="relative tracking-[0.4px] uppercase">
          Latest Enrolments
        </b>
        <div className="relative text-sm text-colours-secondary-800">
          View All Courses
        </div>
      </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] bg-white rounded-md">
      <div className="self-stretch rounded-md bg-colours-background-panel flex flex-col p-6 items-start justify-start text-sm text-colours-text-light-primary">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row pt-2 px-0 pb-4 items-start justify-between border-b-[1px] border-solid border-colours-gray-300">
            <b className="relative">Enr. No</b>
            <b className="relative">S. Name</b>
            <b className="relative">C. Name</b>
            <b className="relative">Fees</b>
            <b className="relative">Enr. Date</b>
          </div>
          {latestEnrollmentData.map((enrollment, index) => (
            <div
              key={index} // Make sure to use a unique key when rendering a list of elements
              className="self-stretch flex flex-row py-2 px-0 items-start justify-between border-b-[1px] border-solid border-colours-gray-200"
            >
              <div className="relative">{enrollment.enrollmentNumber}</div>
              <div className="relative">{enrollment.studentName}</div>
              <div className="relative">{enrollment.courseName}</div>
              <div className="relative">${enrollment.fees}</div>
              <div className="relative">{enrollment.enrollmentDate}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Enrollments;
