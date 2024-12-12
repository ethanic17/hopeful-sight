import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import nate from "../../pages/AboutUsImages/Nate.jpg";

const styles = {
    body: {
        backgroundColor: '#2F3E4A',
        color: 'white'
    },
}

export function NateDavid() {
  return (
    <>
      
      <body style={styles.body}>

      <div class="container">
        <div class="div row">
            <div class="col">
                <h2 style={{ fontSize: '26px', padding: '20px 0px 0px 0px' }}>Nathan Gabriel David</h2><br />
                <h5 style={{ fontSize: '20px' }}>Role: Scrum Master</h5> 
                <h3>Student ID: 921824342</h3><br />
                <hr /><br />
                <br />

            </div>

            <div class="padding col">
                <img style={{ width: '60%', height: 'auto', padding: '20px' }} src={nate} />
            </div>
        </div>
    </div>

      </body>
    </>
  );
}