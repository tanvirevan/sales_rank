import { BsGraphUpArrow } from 'react-icons/bs';
import { FaCheckCircle } from "react-icons/fa";


export default function RealTimeAnalysis()
 {
   return (
     <div>
        <div className="bg-[#efefef] font-manrope rounded-2xl shadow-lg p-6">
          <h2 className="text-[32px] font-bold mb-4">Real-time Analysis</h2>
          
          <div className="space-y-4">
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <div className="flex justify-between items-center mb-2">
                <div className='flex items-center gap-2 text-gray-600'>
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-[18px] font-semibold">Confidence Level</span>
                </div>
                <span className="text-sm text-gray-600">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
  
            <div className='bg-white p-4 rounded-lg shadow-md'>
              <div className=" items-center gap-2 text-gray-600">
                <div className='flex items-center gap-2 font-semibold text-[18px]'>
                  <BsGraphUpArrow />
                  <p>Confidence Level</p>
                </div>
                <span>85% improvement in objection handling</span>
              </div>
            </div>
          </div>
        </div>
     </div>
   );
 };
