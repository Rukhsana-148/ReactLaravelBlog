export default function Blog(){
    return(
        <>
        <div className="pb-3  w-[310px] bg-slate-300 mt-4 rounded-xl shadow-2xl shadow-gray-600">
       <img src="friend.jpg" width="310px" height="250px"/>
       <div className="px-3 py-2">
       <p className="text-lg pt-2 font-semibold text-gray-500 font-serif text-left">Friends For Ever</p>
       <p className="text-left py-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid est optio incidunt fuga neque sunt, non exercitationem dicta odio quasi, et minima dolorum. Tenetur at nemo, excepturi ut rerum sint....</p>
      <p className="text-left py-1 flex"> <a href="#" className="text-blue-800 font-medium text-sm pr-2">Read More..</a><span className="text-right text-sm text-gray-950 font-semibold">Rukhsana Khatun - 14.07.2024</span></p>
      </div>
       </div>
        </>
    )
}