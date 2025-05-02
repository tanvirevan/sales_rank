'use client';
interface NavButtonProps 
  {
    text: string;
  }

export default function NavButton({ text }: NavButtonProps) {
  return (
    <button className="font-plusjakarta relative text-[#020407] hover:text-[#ceb043] font-semibold text-sm transition-colors group">
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ceb043] group-hover:w-full transition-all duration-300"></span>
    </button>
  );
}