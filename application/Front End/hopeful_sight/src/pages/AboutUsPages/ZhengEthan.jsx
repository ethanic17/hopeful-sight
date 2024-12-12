import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ethan from "../../pages/AboutUsImages/imgA.jpg";

const styles = {
    body: {
        backgroundColor: '#2F3E4A',
        color: 'white'
    },
}

export function ZhengEthan() {
  return (
    <>
      
      <body style={styles.body}>

      <div class="container">
        <div class="div row">
            <div class="col">
                <h2 style={{ fontSize: '26px', padding: '20px 0px 0px 0px' }}>Ethan Zheng</h2><br />
                <h5 style={{ fontSize: '20px' }}>Role: Github Master</h5> 
                <h3>Student ID: 922474550</h3><br />
                <hr /><br />
                <p>Hi! My name is Ethan and I am currently working on my Bachelor's degree in Computer Science at
                San Francisco State University and plan to graduate in the Spring of 2026.

                I also currently work as an Instructional Student Assistant (ISA) for students enrolled in CSC 101
                at SFSU.

                Some of my passions include photography & videography, building custom keyboards,
                and traveling/exploring.
                </p>
                <br />

            </div>

            <div class="padding col">
                <img style={{ width: '60%', height: 'auto', padding: '20px' }} src={ethan} />
            </div>
        </div>
    </div>

      </body>
    </>
  );
}