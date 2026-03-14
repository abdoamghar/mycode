
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/notfound";

export default function Apppage() {
  return (
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Layout />} >
              <Route path="blogs" element={<Blogs />} />
              <Route path="home" element={<Home />} />
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
           </Route>
       </Routes>
    </BrowserRouter>
  )
}