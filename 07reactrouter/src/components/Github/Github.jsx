import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    document.title = "Github";
//   const [data, setData] = React.us
const data =useLoaderData();
//   useEffect(() => {
//     fetch(`https://api.github.com/users/Sandeep2325`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <h1>Hey!! It's me {data.name}</h1>
      <h2>Github followers: {data.followers}</h2>
      <a className="text-red bg-blue-400" href={data.html_url} target="_blank">Click here to visit my Github account</a>
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader=async()=>{
    const response = await fetch(`https://api.github.com/users/Sandeep2325`)
    return response.json()
}
