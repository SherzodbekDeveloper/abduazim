function Banner({ title }: { title: string }) {
     return (
       <div className="relative bg-gray-50 border-b border-primary/10">
         <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]" />
         <div className="special-container relative mx-auto px-4 py-16">
          <div className="w-full h-[1px] bg-gray-200 mb-10"></div>
           <div className="special-container text-center"> 
             <h1 className="text-3xl md:text-4xl lg:text-5xl ">
               {title.toUpperCase()}
             </h1>
           </div>
         </div>
       </div>
     )
   }
   
   export default Banner
   
   