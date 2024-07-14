import  {useState} from 'react';
import Editor from 'react-simple-wysiwyg';

export default function Create(){
  const [html, setHtml] = useState('my <b>HTML</b>');
  function onChange(e) {
    setHtml(e.target.value);
  }
  return (
    <>
    <p className="text-gray-500 font-bold text-center text-2xl py-5">Create Blog Post</p>
      <p className="px-5 py-2 bg-black rounded-md sm:ml-[90%] text-white w-[70px]"><a href="/">Back</a></p>
   <div className="sm:flex sm:justify-center sm:items-center  font-medium">
    <form>
    <label className="mt-3">Title</label>
    <br/>
    <input type="text" name="tile" id="title" className="border-2 mt-2 mb-4 border-slate-600 sm:w-[400px] px-3 py-4 rounded-lg" placeholder="Enter blog title"/>
   <br/> <label htmlFor="" className="mt-3">Description</label>
    <br/>
    <Editor 
    containerProps={{ style: { height: '400px' } }}
    value={html}  onChange={onChange}/>
     <br/>
    <label htmlFor="" className="mt-3">Image</label>
    <br/>
    <input name="image" type="file"  className="border-2 border-slate-500 mb-4 rounded-md"/>
   <br/>
   <label className="mt-3">Author</label>
    <br/>
    <input type="text" name="author" id="author" className="border-2 mt-2 mb-4 border-slate-600 sm:w-[400px] px-3 py-4 rounded-lg" placeholder="Enter your name"/>
   <br/>
   <p className="px-5 py-2 w-[100px] rounded-lg bg-slate-600 text-white">Create</p>

   </form>
   </div>
    </>
  )
}

