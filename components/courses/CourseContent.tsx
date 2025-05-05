export default function CourseContent() {
  return (
    <div className="max-w-sm mx-auto mt-10 mb-10">
      <div className="bg-[#efefef] p-6 font-manrope rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-48">
          <img 
            src="/our_course/course1.png" 
            alt="Course Preview" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="pt-6">
          <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
            <span>4 Weeks</span>
            <span>Beginner</span>
            <span className="ml-auto">By John Smith</span>
          </div>

          <h2 className="text-xl font-bold mb-3">Web Design Fundamentals</h2>
          
          <p className="text-gray-600 text-sm mb-4">
            Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. 
            Develop the skills to create visually appealing and user-friendly websites.
          </p>

          <button className="w-full bg-[#022969] text-white py-3 rounded-lg font-semibold hover:bg-[#ceb043] transition-colors">
            Get It Now
          </button>
        </div>
      </div>
    </div>
  );
};
