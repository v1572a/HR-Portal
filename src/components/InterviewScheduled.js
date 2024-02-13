import React from 'react'
import "./InterviewScheduled.css";

export default function InterviewScheduled() {
  return (
   <>
   <div className="Interview_cointaner">
   <div className="Interview_navbar">
   </div>
   <div className="Interview_block">
   <svg className="Interview_block_svg"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" fill="#B3C6ED" />
            <path
              d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z"
              fill="#CFD8DC"
            />
            <path
              d="M17.25 8C15.7312 8 14.5 9.23123 14.5 10.75V12.125C14.5 12.8844 13.8844 13.5 13.125 13.5C10.8468 13.5 9 15.3468 9 17.625V25.875C9 28.1532 10.8468 30 13.125 30H26.875C29.1532 30 31 28.1532 31 25.875V17.625C31 15.3468 29.1532 13.5 26.875 13.5C26.1156 13.5 25.5 12.8844 25.5 12.125V10.75C25.5 9.23123 24.2688 8 22.75 8H17.25ZM22.75 12.125C22.75 12.8844 22.1344 13.5 21.375 13.5H18.625C17.8656 13.5 17.25 12.8844 17.25 12.125C17.25 11.3656 17.8656 10.75 18.625 10.75H21.375C22.1344 10.75 22.75 11.3656 22.75 12.125Z"
              fill="white"
            />
          </svg>
          <div className="Interview_block_name_email">
            <h2>Name of the Employee</h2>
            <p>email@gamil.com</p>
          </div>
          <div className="Interview-line">

          </div>
          <div className="Interview_position">
            Position
            <h3>Software Developer</h3>
          </div>
   </div>
   </div>
   </>
  )
}
