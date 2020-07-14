import React from "react";


function Home() {
  return (
    <main class="container mt-3 sticky-footer ">

      <div class="card">
        <div class="row ">

         <div class="col-md-5">
           <figure class="figure">
            <div class="circle-container-large">
              <img src="./assets/images/port.jpg" class="circle-large" alt="Photo 1"/>
            </div>
           </figure>
          </div>
       
          <div class="col-md px-3">
              <h1 class="card-title mainh4 my-5 marker-font">I'm MARIUSZ BORUC</h1>
              <p class="mainp">SysAdmin/Devops and junior web developer</p>
              <p class="mainp">E-mail: mariuszbrc@gmail.com</p>
              <p class="mainp ">Location: Adelaide</p>
          </div>

        </div>
      </div>    
    </main>
  );
}

export default Home;
