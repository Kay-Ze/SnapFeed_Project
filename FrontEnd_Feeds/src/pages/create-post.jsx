import axios from "axios"
import { useNavigate } from "react-router-dom"



const CreatePost = () => {
  
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post('http://localhost:3000/create-post', formData)
    .then(() => {
      alert("Post Created Successfully")
      e.target.reset()
    })
    .catch((err) => {
      console.log(err)
      alert("Error Creating Post")
    })
  }

  return (
    <div className="flex items-center mt-40 justify-center flex-col gap-10">

        <h1 className="text-5xl font-extrabold w-3/4 text-center text-white">Create Post</h1>

      <div className="flex items-center justify-center w-6/7 h-1/2 shadow-lg rounded-xl bg-white ">

        <form onSubmit={handelSubmit} className="flex items-center justify-center flex-col gap-5 w-full text-center px-5 py-8">

            <input className=" file:bg-gray-200 hover:file:bg-gray-300 file:px-3 file:border-2 flex items-center justify-center text-center px-4 py-2 border border-gray-400 rounded w-full" type="file" name="image" accept="image/*"/>

            <input className="bg-gray-100 border textarea:border textarea:border-black rounded border-gray-400 px-4 py-2 w-full" type="text" name="caption" required placeholder="Write A Caption..."/>

            <button className = "py-1  px-7 bg-amber-600 text-white font-bold text-xl rounded hover:scale-105 hover:bg-amber-700 flex justify-center items-center" type="submit"> Post </button>
        </form>
      </div>
      <button onClick={() => navigate('/feeds')} className="py-1 px-3 text-black font-bold text-m rounded hover:scale-105 hover:bg-black/10 flex justify-center items-center bg-white border-black border"> My Feed </button>
    </div>
  )
}

export default CreatePost
