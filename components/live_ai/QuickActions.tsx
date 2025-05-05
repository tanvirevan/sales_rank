
import { MdOutlineAutoGraph } from 'react-icons/md';
import { BsGraphUpArrow } from 'react-icons/bs';

export default function QuickActions()
 {
   return (
    <div className="bg-[#efefef] font-manrope rounded-2xl shadow-lg p-6">
      <h2 className="text-[32px] font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex flex-col justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <MdOutlineAutoGraph className="text-2xl mb-2" />
          <span className="text-[16px] font-semibold text-start">Generate Script</span>
        </button>
        <button className="flex flex-col justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <BsGraphUpArrow className="text-2xl mb-2" />
          <span className="text-[16px] font-semibold text-start">Practice Pitch</span>
        </button>
      </div>
    </div>
   );
 };
