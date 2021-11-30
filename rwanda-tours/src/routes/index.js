import React from "react";
import { Routes, Route } from "react-router";
import Aboutus from "../views/aboutus";
import Contactus from "../views/contactus";
import Gallery from "../views/gallery";
import Home from "../views/home";
import Signin from "../views/signin";
import Signup from "../views/signup";
import Newtour from "../views/dashboard/Newtour";

const Index=()=>{
return(
<Routes>
<Route path="/home" element={<Home/>}></Route>
<Route path="/aboutus" element={<Aboutus/>}></Route>
<Route path="/contactus" element={<Contactus/>}></Route>
<Route path="/signin" element={<Signin/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/gallery" element={<Gallery/>}></Route>
<Route path="/dash/Newtour" element={<Newtour/>}></Route>


</Routes>




)





}
export default Index;