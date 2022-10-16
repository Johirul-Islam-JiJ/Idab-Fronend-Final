import React from 'react'
import Nav from './Component/navbar/navbar'
import Home from './Component/home/home'
import About from './Component/about/about_idab'
import Member from './Component/members/members'
import Constitution from './Component/constitution/constitution'
import Event from './Component/events/events'
import Notice from './Component/notice/notice'
import Publication from './Component/publication/publication'
import Contact from './Component/contact/contact'
import Footer from './Component/footer/footer'
import Test from './Component/test_file/test'
import Associate_Member from './Component/members/form/associate_member'
import Candidate_Member from './Component/members/form/candidate_member'
import Professional_Member from './Component/members/form/professional_member'
import Student_Member from './Component/members/form/student_member'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Constitution" element={<Constitution />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Notice" element={<Notice />} />
          <Route path="/Publication" element={<Publication />} />
          {/* <Route path="/Test" element={<Test />} /> */}
          {/* <Route path="/Associate_Member" element={<Associate_Member />} />
          <Route path="/Candidate_Member" element={<Candidate_Member />} />
          <Route path="/Professional_Member" element={<Professional_Member />} />
          <Route path="/Student_Member" element={<Student_Member />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      {/* <Test/> */}
      {/* <Associate_Member />
      <Candidate_Member />
      <Professional_Member />
      <Student_Member /> */}
      <Footer />
    </>
  );
}

export default App


