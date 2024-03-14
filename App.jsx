import React, { useState } from "react";
import Navbar from "./components/Navbar";
import All from "./components/All";
import FullStackDevelopment from "./components/FullStackDevelopment";
import DataScience from "./components/DataScience";
import CyberSecurity from "./components/CyberSecurity";
import Career from "./components/Career";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  let data=[
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      content:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      content2:"When your are hiring a full-stack developer, what are the most important things you look for?",
      date:"29 September 2023"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      content:"Top Differences: Full Stack Developer vs Software Engineer 2024",
      content2:"A Full Stack Developer is a tech all-rounder. They work on both the front end and back end",
      date:"30 September 2023"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      content:"Horizontal vs Vertical Scaling for Efficient System Design",
      content2:"In the world of system design, envision a digital skyscraper a multifaceted structure built",
      date:"23 November 2023"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      content:"Best Books to Learn Full-Stack Development",
      content2:"Are you interested in becoming a full-stack developer but not sure where to start? In ",
      date:"29 October 2023"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      content:"7 Best Full-Stack Development Online Courses [2024]",
      content2:"Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand",
      date:"30 September 2023"
    },
    {
      type:"FSD",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      content:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      content2:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      date:"29 August 2023"
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      content2:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date:"01 January 2024"
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Install-Miro-on-Windows-A-2-Step-Comprehensive-Guide.webp",
      content:"Install Miro on Windows: A 2-Step Comprehensive Guide",
      content2:"Post-Covid, everything is becoming digital and even companies prefer remote working as it helps them",
      date:"31 January 2024"
    },
    {
      type:"CyberSecurity",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      content:"What Is Hacking? Types of Hacking & More",
      content2:"Have you ever wondered what hacking is all about? It’s a big deal in today’s ",
      date:"21 January 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      content:"Top 5 IT Jobs for Economics Students",
      content2:"In today's digital age, the intersection of economics and technology offers exciting career opportunities for",
      date:"04 June 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      content:"Automation Test Engineer Resume: 10 Important Things To Consider",
      content2:"The world is moving towards automating the testing of products in order to increase work",
      date:"21 March 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      content:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
      content2:"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date:"02 April 2024"
    },
    {
      type:"Career",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
      content:"9 Best Product-Based Companies for Project Management",
      content2:"In today's tech-driven world, the demand for project managers is higher than before. The workload",
      date:"02 June 2023"
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      content:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      content2:"Are you someone who's not interested in coding, but wants to get placed in tech",
      date:"20 October 2023"
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      content:"Best Data Science Books to Learn in 2024",
      content2:"Today, we’re going to talk about something really cool: data science. It’s all about using",
      date:"10 October 2023"
    },
    {
      type:"DataScience",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      content:"Best Data Science Books to Learn in 2024",
      content2:"Today, we’re going to talk about something really cool: data science. It’s all about using",
      date:"10 October 2023"
    },
    
  ]
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/all" element={<All data={data}/>}></Route>
          <Route
            path="/fullstackdevelopment"
            element={<FullStackDevelopment data={data}/>}
          ></Route>
          <Route path="/datascience" element={<DataScience data={data}/>}></Route>
          <Route path="/cybersecurity" element={<CyberSecurity data={data}/>}></Route>
          <Route path="/career" element={<Career data={data}/>}></Route>
          <Route path="*" element={<Navigate to="/all" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
