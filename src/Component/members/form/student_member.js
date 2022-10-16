// import React, { useState } from "react";
import React from 'react'
// import "../bootstrap_4/css/bootstrap-grid.min.css"
// import "../Style/members/members.css"


const Student_Member = () => {
    return (
        <div>
            <section class="contact-area pt-80 pb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-xl12 mb-60">
                            <div class="section-title text-center">
                                <h4>Student Form</h4>
                                {/* <p>You Can Contact Me !!</p> */}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="row-input col-8">
                                <div class="contact-form">
                                    <form action="">
                                        <label for="fname">Full Name Of Applicant</label><br/>
                                        <input type="text" placeholder="Full Name" />

                                        <label for="fname">Present Address</label><br/>
                                        <input type="text" placeholder="Present Address" />

                                        <label for="fname">Permanent Address</label><br/>
                                        <input type="text" placeholder="Permanent Address" />

                                        <label for="fname">Phone Number</label><br/>
                                        <input type="number" placeholder="01XXXXXXXXX" />

                                        <label for="fname">Email Address</label><br/>
                                        <input type="gmail" placeholder="Email Address" /><br/>


                                        <br/><br/><h1>Introducer Details :</h1><br/>
                                        <label for="fname">Name Of Introducer</label><br/>
                                        <input type="text" placeholder="Name Of Introducer" />

                                        <label for="fname">Introducer Company Name</label><br/>
                                        <input type="text" placeholder="Introducer Company Name" />

                                        <label for="fname">IDAB Number</label><br/>
                                        <input type="text" placeholder="IDAB Number" /><br/>


                                        <br/><br/><h1>Upload Documents :</h1><br/>

                                        <label for="fname">Your Photo</label><br/>
                                        <input type="file" name="photo" />


                                        <label for="fname">Your NID</label><br/>
                                        <input type="file" name="nid" />

                                        <label for="fname">Student ID</label><br/>
                                        <input type="file" name="trade" />


                                        <p>I hereby apply for membership in the IDAB and attest that all information given in this application is true and accurate. ***</p><br/>
                                        <input type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </div>     
    )
  }
  
  export default Student_Member;