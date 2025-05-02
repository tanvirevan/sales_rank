import Image from 'next/image';

export default function Hero() 
  {
    return (
      <section className="font-manrope min-h-screen relative overflow-hidden">
        {/* Content */}
        <div className="container mx-auto px-4 lg:pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <h1 className="lg:leading-[109px] md:text-5xl lg:text-[80px] font-medium mb-6 leading-tight">
                Your AI- <br/> Powered<br/>Sales Coach
              </h1>
              <div className="lg:flex items-center lg:gap-10">
                <div className="lg:pl-4 lg:pt-10 lg:animate-bounce lg:duration-1000 flex items-center justify-center">
                  <Image
                    src="/hero/Robobot.png"
                    alt="Robot Assistant"
                    width={150}
                    height={150}
                    className="hover:rotate-12 transition-transform"
                  />
                </div>
                <p className="text-sm font-medium md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  Get real-time coaching, script <br /> suggestions, and deal-closing <br /> strategies powered by advanced AI <br /> technology.
                </p>
              </div>

                <div className='flex flex-col md:flex-row items-center justify-center md:gap-14 mt-10'>
                  <div className='flex items-center justify-center gap-4 w-full max-w-[300px] md:w-auto'>
                    <div className='flex items-center justify-center'>
                      <Image
                        src="/hero/protection.png"
                        alt="Robot Assistant"
                        width={120}
                        height={120}
                        className="hover:rotate-12 transition-transform mt-8"
                      />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                      <h2 className="font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-[#020407] leading-tight">2000+</h2>
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-gray-600">Your protection</p>
                    </div>
                  </div>
                  <div className='flex items-center justify-center gap-4 w-full max-w-[300px] md:w-auto'>
                    <div className='flex items-center justify-center'>
                      <Image
                        src="/hero/Dot.png"
                        alt="Robot Assistant"
                        width={120}
                        height={120}
                        className="hover:rotate-12 transition-transform mt-8"
                      />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                      <h2 className="font-semibold text-[30px] md:text-[35px] lg:text-[40px] text-[#020407] leading-tight">7001+</h2>
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-gray-600">Provide tailored</p>
                    </div>
                  </div>
                </div>

              </div>
            
            {/* Right Column - Images */}
              <div className="relative md:h-[500px] p-4 mt-8 lg:mr-6 lg:mt-0">
                <Image
                  src="/hero/BigRobobot.png"
                  alt="AI Sales Coach"
                  fill
                  className="object-contain scale-110 hover:scale-105 transition-transform duration-500 lg:object-right"
                  priority
                />
                <div className="relative inset-0 bg-gradient-to-r from-[#F9F9F9] to-[#FFFFFF] rounded-lg shadow-lg max-w-[470px] max-h-[360px] px-[25px] py-[50px] font-manrope mt-52">
                  <div className="flex items-center justify-between font-semibold text-[50px]">
                    <p>721+</p>
                    <p>1000+</p>
                  </div>
                  <h1 className='font-semibold text-[28px] mt-[25px]'>Growth is our priority.</h1>
                  <p className='font-medium text-[17px] mt-[40px]'>As a full-service business agency, we <br /> specialize in helping companies of all sizes <br /> optimize their operations</p>
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  }