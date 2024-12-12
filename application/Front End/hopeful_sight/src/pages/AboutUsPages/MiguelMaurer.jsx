import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import miguel from "../../pages/AboutUsImages/cool-pic.jpg";

const styles = {
    body: {
        backgroundColor: '#2F3E4A',
        color: 'white'
    },
}

export function MiguelMaurer() {
  return (
    <>
      
      <body style={styles.body}>

      <div class="container">
        <div class="div row">
            <div class="col">
                <h2 style={{ fontSize: '26px', padding: '20px 0px 0px 0px' }}>Miguel Maurer</h2><br />
                <h5 style={{ fontSize: '20px' }}>Role: Front End Lead</h5> 
                <h3>Student ID: 922097199</h3><br />
                <hr /><br />
                <br />

            </div>

            <div class="padding col">
                <img style={{ width: '60%', height: 'auto', padding: '20px' }} src={miguel} />
            </div>
        </div>
    </div>

      </body>
    </>
  );
}