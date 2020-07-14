import React from "react";
import ImageSection from "../ImageSection"


function Gallery() {

  const gallery = [
    {
      id: "#id007",
      nonce: "Shepherds Hill",
      label: "Shepherds Hill",
      src: "./assets/images/007.jpg"
     },
    {
     id: "#id008",
     nonce: "Princes Hwy",
     label: "Princes Hwy",
     src: "./assets/images/008.jpg"
    },
    {
      id: "#id009",
      nonce: "Para Wirra",
      label: "Para Wirra",
      src: "./assets/images/009.jpg"
     },
     {
      id: "#id010",
      nonce: "West Beach",
      label: "West Beach",
      src: "./assets/images/010.jpg"
     },
     {
      id: "#id011",
      nonce: "River Torrens",
      label: "River Torrens",
      src: "./assets/images/011.jpg"
     },
     {
      id: "#id012",
      nonce: "Morialta",
      label: "Morialta",
      src: "./assets/images/012.jpg"
     }
  ]

  
   

  return (
    <main className="container mt-3 sticky-footer">
      <section className="gallery row">
      {gallery.map((item,index) => 
        <ImageSection key={item.id} nonce={item.nonce} label={item.label} src={item.src}  />     
      )}
      </section>  
    </main>
  )
}

export default Gallery;
