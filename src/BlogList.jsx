import Blog from "./Blog";
import { FaPencilAlt } from "react-icons/fa";
export default function BlogList(){
    return(
        <>
        <div className="sm:ml-[90%] ml-[30%] py-5 "><a href="/create"><FaPencilAlt /></a></div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 ">
        
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        <Blog></Blog>
        </div>
        
        </>
    )
}