import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm'
import ViewCourses from '../components/ViewCourses'

function Contact() {
   useEffect(() => {
           document.title = "Flavour Theory | Contact";
         }, []);
  return (
     <div className="min-h-screen bg-[#fff7f1] ">
        <ContactForm />
        <ViewCourses />
     </div>
  )
}

export default Contact