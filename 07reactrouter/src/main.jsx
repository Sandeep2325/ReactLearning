import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import USer from './components/User/USer.jsx'
import Polotno from './components/Polotno/Polotno.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import { createDemoApp } from 'polotno/polotno-app';
import '@blueprintjs/core/lib/css/blueprint.css';

const { store } = createDemoApp({
  container: document.getElementById('root'),
  key: import.meta.env.VITE_POLOTNO_API_KEY, 
  showCredit: false,
});
const page = store.addPage();
page.set({
  background: 'grey',
  custom: { "SessionUserId": 'my_key' },
  bleed: 10, 
  width: 1000, 
  height: 1000, 
});
console.log(page.id)
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}>
      <Route path="sandeep" element={<About/>}/>
      </Route>
      <Route path="contact" element={<Contact/>}/>
      <Route path="polotno" element={<Polotno store={store}/>}/>
      <Route 
      loader={githubInfoLoader}
      path="github" 
      element={<Github/>}/>
      <Route path="user" element={<USer/>}>
      <Route path=":userid" element={<USer/>}/>

        </Route>
       
        <Route path="*" element={<div>Not found</div>}/>

      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   <RouterProvider router={router}/>
  // </React.StrictMode>,
)
