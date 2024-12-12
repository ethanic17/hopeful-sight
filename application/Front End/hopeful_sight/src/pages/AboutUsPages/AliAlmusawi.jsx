import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ali from "../../pages/AboutUsImages/ali.png";

const styles = {
    body: {
        backgroundColor: '#2F3E4A',
        color: 'white'
    },
}

export function AliAlmusawi() {
  return (
    <>
      
      <body style={styles.body}>

      <div class="container">
        <div class="div row">
            <div class="col">
                <h2 style={{ fontSize: '26px', padding: '20px 0px 0px 0px' }}>Ali Almusawi</h2><br />
                <h5 style={{ fontSize: '20px' }}>Role: Front End</h5> 
                <h3>Student ID: 921040195</h3><br />
                <hr /><br />

                <p>
                    Hi I am Ali Almusawi. I enjoy working with front end and have a passion to make
                    websites look good. I am looking forward to look deep into several libraries to
                    make CSS a lot more appealing for it's users.
                </p>

                <br /><hr /><br />

                <div>
                <h5 style={{ fontSize: '19px' }}>Experience</h5> <br />
                <p> Ubuntu: 3 </p>
                <p> AWS: 3 </p>
                <p> mySQL: 3 </p>
                <p> Express: 1 </p>
                <p>React: 1</p>
                </div>
                <br />

            </div>

            <div class="padding col">
                <img style={{ width: '60%', height: 'auto', padding: '20px' }} src={ali} />
            </div>
        </div>
    </div>

      </body>
    </>
  );
}