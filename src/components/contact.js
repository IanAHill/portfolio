import React, { useState } from "react";
// import "./contact.css"

export const Contact = () => {

    return (
        <div id = "contact-form">
            <form>
                <label for="fname">Name:</label>
                <input type="text" id="fname" name="fname" /><br></br>
                <label for="lname">Email Address:</label>
                <input type="text" id="lname" name="lname" />
            </form>
            
            
        </div>
    )
}