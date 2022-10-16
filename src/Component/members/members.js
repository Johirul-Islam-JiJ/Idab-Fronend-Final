// import React, { useState } from "react";
import React from 'react'
import "../bootstrap_4/css/bootstrap-grid.min.css"
import "../Style/members/members.css"


const Member = () => {
    return (
        <div className="member">
            <div className='img_slider col-lg-12'>
            {/* <img src="../Style/about_idab/idab_profile.jpg"/> */}
                <div className='banner-content '>
                <div className='banner_text'>
                    <h1>Members Group</h1>
                    <h4>Interior designer’s association Of Bangladesh</h4>
                </div>
                </div>
            </div>
            <div className="container main_form">
                <h2 className='h2'>IDAB Member Group</h2>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2>PROFESSIONAL MEMBERS</h2>
                    <p>
                        Professional Membership under this category will be granted to individuals who meet the following criteria: Completion of a degree course in Architecture (approved by a recognized University/IAB) or a Degree Course in Interior Design (approved by a recognized University or National Education Board), or an Interior Design Course approved by IDAB, with not less than three years of full time work experience in the field Interior Design OR Completion of a Diploma Course in Interior Design (approved by a recognized University or National Education Board/IDAB) with not less than five years of full time work experience in the field of Interior Design.
                    </p>
                    <form action="./form/associate_member.js" method="post">
                    <button className='btn btn_style'>Professional Members Form</button>
                    </form>
                </div>

                <div className='col-lg-6'>
                    <h2>CANDIDATE MEMBERS</h2>
                    <p>
                        Candidate Membership under this category will be granted to individuals who meet the following criteria: Completion of a degree course in Architecture (approved by a recognized University/IAB) or a Degree Course in Interior Design (approved by a recognized University or National Education Board), or an Interior Design Course approved by IDAB, with not less than three years of full time work experience in the field Interior Design OR Completion of a Diploma Course in Interior Design (approved by a recognized University or National Education Board/IDAB) with not less than five years of full time work experience in the field of Interior Design.
                    </p>
                    <form action="./form/candidate_member.js" method="post">
                        <button className='btn btn_style'>Candidate Members Form</button>
                    </form>
                </div>

                <div className='col-lg-6'>
                    <h2>ASSOCIATE MEMBERS</h2>
                    <p>
                        Membership under this category will be accorded to individuals not necessarily qualified to be as general member or engaged in the practice of Interior Design but who are involved in Interior Design field, such as: Landscape Designers, Industrial Designers, Designers of Decorative Fine Arts and Crafts, Graphic Artists, Civil/Mechanical/Electrical Engineers must involve with interior design sector. And company who engages interior designers or architect can become a trade member of the association.
                    </p>
                    <form action="./form/professional_member.js" methode="post">
                        <button className='btn btn_style'>Associate Members Form</button>
                    </form>
                </div>

                <div className='col-lg-6'>
                    <h2>STUDENT MEMBERS</h2>
                    <p>
                        Student membership shall be confined to bona students of recognized training Institutes engaged in Interior design. Civil/Mechanical/Electrical Engineers must involve with interior design sector. And company who engages interior designers or architect can become a trade member of the association.
                    </p>
                    <form action="./form/student_member.js" method="post">
                    <button className='btn btn_style'>Student Members Form</button>
                    </form>
                </div>
            </div>
            </div>
        </div>  
        
    )
  }
  
  export default Member;

    
