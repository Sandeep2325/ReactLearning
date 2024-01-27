import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";
import ProductContext from "../Context/Products/ProductContext";


export default function Profile() {
  const { user, password } = useContext(UserContext);
  const {products}=useContext(ProductContext)
  if (!user) return <h1>Not logged in</h1>;
  console.log(user);
  console.log(password);
  console.log(products);
  return(
    
<div>
    <h1>Profile: {user.username}</h1>
    <h1>Password: {password.password}</h1>
   
    {Object.entries(products.obj).map(([key, value]) => (
          // Each property in the object is used to create a list item
          <li key={key}>
            {key}: {value}
          </li>
        ))}
    
  </div>
  ) 
}
