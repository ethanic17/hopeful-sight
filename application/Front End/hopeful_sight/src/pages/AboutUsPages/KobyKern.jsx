import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import kobykern from "../../pages/AboutUsImages/kobykernheadshot.jpg";

const styles = {
    body: {
        backgroundColor: '#2F3E4A',
        color: 'white'
    },
}

export function KobyKern() {
  return (
    <>
      
      <body style={styles.body}>

      <div class="container">
        <div class="div row">
            <div class="col">
                <h2 style={{ fontSize: '26px', padding: '20px 0px 0px 0px' }}>Koby Kern</h2><br />
                <h5 style={{ fontSize: '20px' }}>Role: Team Lead</h5> 
                <h3>Student ID: 918451214</h3><br />
                <hr /><br />
                
                <div>
                    <h5 style={{ fontSize: '19px' }}>Experience</h5> <br />
                    <p>Ubuntu: <span>4</span></p>
                    <p>AWS: <span>2</span></p>
                    <p>SQL: <span>3</span></p>
                    <p>Vercel <span>3</span></p>
                    <p>Express: <span>3</span></p>
                    <p>React: <span>2</span></p>
                    <p>Javascript: <span>4</span></p>
                </div>
                
                <br />

            </div>

            <div class="padding col">
                <img style={{ width: '60%', height: 'auto', padding: '20px' }} src={kobykern} />
            </div>
        </div>
    </div>

      </body>
    </>
  );
}