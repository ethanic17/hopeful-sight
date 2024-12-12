import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jacob from "../../pages/AboutUsImages/Batman.jpeg";

const styles = {
    body: {
        backgroundColor: '#2F3E4A',
        color: 'white'
    },
}

export function JacobVazquez() {
  return (
    <>
      
      <body style={styles.body}>

      <div class="container">
        <div class="div row">
            <div class="col">
                <h2 style={{ fontSize: '26px', padding: '20px 0px 0px 0px' }}>Jacob Vazquez</h2><br />
                <h5 style={{ fontSize: '20px' }}>Role: Back End Lead</h5> 
                <h3>Student ID: 923077698</h3><br />
                <hr /><br />

                <div>
                <h5 style={{ fontSize: '19px' }}>Experience</h5> <br />
                  <p> Ubuntu: 4</p>
                  <p>AWS: 1</p>
                  <p>mySQL: 3</p>
                  <p>Express: 2</p>
                  <p>react: 1</p>
                </div>
                <br />

            </div>

            <div class="padding col">
                <img style={{ width: '60%', height: 'auto', padding: '20px' }} src={jacob} />
            </div>
        </div>
    </div>

      </body>
    </>
  );
}