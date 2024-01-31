import React from "react";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import ProductContext from "../Context/Products/ProductContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [product3, setProduct3] = useState("");

  const { setUser, setPassword } = useContext(UserContext);
  const { setProducts } = useContext(ProductContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    setUser({ username });
    setPassword({ password });
    var prod = [product1, product2, product3];
    const obj=insertarr(prod)
  
    // var obj = {};
    // for (let i = 0; i < prod.length; i++) {
    //   console.log(prod[i]);
    //   obj[prod[i]] = prod[i];
    // }

    setProducts({ obj });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      {""}

      <input
        type="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      {""}

      <input
        type="text"
        value={product1}
        onChange={(e) => setProduct1(e.target.value)}
        placeholder="Product 1"
      />
      {""}

      <input
        type="text"
        value={product2}
        onChange={(e) => setProduct2(e.target.value)}
        placeholder="Product 2"
      />
      {""}

      <input
        type="text"
        value={product3}
        onChange={(e) => setProduct3(e.target.value)}
        placeholder="Product 3"
      />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}

function insertarr(prod){
    var obj = {};
    for (let i = 0; i < prod.length; i++) {
      console.log(prod[i]);
      obj[prod[i]] = prod[i];
    }
    return obj
}
export default Login;
