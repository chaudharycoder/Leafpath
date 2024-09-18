import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../components/Home'
import Directory from '../components/Directory'
import Job from '../components/Job'
import Success from '../components/Success'
import Donation from '../components/Donation'
import Contact from '../components/Contact'
import Registration from '../components/Registration'
const Routerman = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/job_portal" element={<Job />} />
        <Route path="/success" element={<Success />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="contact" element={<Contact />} />
       <Route path="/register" element={<Registration />} />
    </Routes>

    </>
  )
}

export default Routerman