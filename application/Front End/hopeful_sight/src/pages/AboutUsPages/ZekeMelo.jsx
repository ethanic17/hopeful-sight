import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import zeke from "../../pages/AboutUsImages/78.png";

const styles = {
    body: {
        backgroundColor: '#2F3E4A',
        color: 'white'
    },
}

export function ZekeMelo() {
  return (
    <>
      
      <body style={styles.body}>

      <div class="container">
        <div class="div row">
            <div class="col">
                <h2 style={{ fontSize: '26px', padding: '20px 0px 0px 0px' }}>Zeke Melo</h2><br />
                <h5 style={{ fontSize: '20px' }}>Role: Team Member/Intern</h5> 
                <h3>Student ID: 921212731</h3><br />
                <hr /><br />

                <div>
                    <h5 style={{ fontSize: '19px' }}>Experience</h5> <br />
                    <p>Ubuntu: <span>2</span></p>
                    <p>AWS: <span>1</span></p>
                    <p>SQL: <span>2</span></p>
                    <p>Vercel <span>1</span></p>
                    <p>Express: <span>3</span></p>
                    <p>React: <span>3</span></p>
                </div>

                <br />

            </div>

            <div class="padding col">
                <img style={{ width: '60%', height: 'auto', padding: '20px' }} src={zeke} />
            </div>
        </div>
    </div>

      </body>
    </>
  );
}