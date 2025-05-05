import CourseContent from "./CourseContent";

export default function Courses()
 {
   return (
     <div className="bg-white">
      <div className="container font-manrope mx-auto mb-4">
        <h1 className="font-semibold text-[48px]">Our Courses</h1>
        <div className="relative flex justify-between">
          <p className="font-normal text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. <br /> Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#022969] text-white px-6 py-3 items-center rounded-lg hover:bg-[#ceb043] transition-colors disabled:bg-gray-300 disabled:text-gray-500 "
          > 
          View All
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 w-100%">
        <CourseContent />
        <CourseContent />
      </div>
     </div>
   );
 };
