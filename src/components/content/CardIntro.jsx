export default function CardIntro() {
  return (
    <div className='rounded-lg flex flex-col gap-[2rem] bg-white/10 p-6 hover:bg-white/5 hover:shadow-2xl transition-all'>
      <div className="w-full flex justify-between items-center">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.8} stroke="currentColor" className="size-12 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>
        </span>
        <button className="cursor-pointer group transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6 text-white group-hover:rotate-45 transition-all">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </button>
      </div>
      <div className="">
        <h2 className="text-2xl mb-1 outfit-regular text-white">Test Judul Card Intro</h2>
        <p className="text-sm outfit-thin text-neutral-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas obcaecati tempora nihil numquam facere nobis quisquam voluptatum reprehenderit perspiciatis.</p>
      </div>
    </div>
  )
}