import React from 'react'
import  {useParams} from "react-router-dom"
function USer() {
    const {userid}=useParams()
    document.title = userid? userid: "user";

  return (
    <div className="bg-orange-100 text-black text-3xl text-center py-5">
        User {userid}
        
        </div>
  )
}

export default USer