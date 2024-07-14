import { BrowserRouter, Routes, Route} from "react-router-dom";
import BlogList from "./BlogList";
import Create from "./Create";

export default function App(){
  return(
    <>
    <div className="px-5">
    <div className="bg-slate-300 py-3 text-center rounded-lg">
<p className="font-bold text-slate-900">Laravel +React Blog App</p>
</div>

<BrowserRouter>
<Routes>
<Route path="/" element={<BlogList/>}/>

<Route path="/create" element={<Create/>}/>
</Routes>
</BrowserRouter>
  </div>
    </>
  )
}