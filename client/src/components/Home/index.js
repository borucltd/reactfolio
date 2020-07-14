import React from "react";


function Home() {
  return (
    <main className="container mt-3 sticky-footer ">

      <div className="card">
        <div className="row ">

         <div className="col-md-5">
           <figure className="figure">
            <div className="circle-container-large">
              <img src="./assets/images/port.jpg" className="circle-large" alt="Photo 1"/>
            </div>
           </figure>
          </div>
       
          <div className="col-md px-3">
              <h1 className="card-title mainh4 my-5 marker-font">I'm MARIUSZ BORUC</h1>
              <p className="mainp">SysAdmin/Devops and junior web developer</p>
              <p className="mainp">E-mail: mariuszbrc@gmail.com</p>
              <p className="mainp ">Location: Adelaide</p>
          </div>

        </div>
      </div>    
    </main>
  );
}

export default Home;
