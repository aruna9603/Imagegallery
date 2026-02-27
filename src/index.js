import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Imagecard from "./components/image";
import img1 from "./assets/image/img1.jpg"
import img2 from "./assets/image/img2.jpg"
import img3 from "./assets/image/img3.jpg"
import img4 from "./assets/image/img4.jpg"
import img5 from "./assets/image/img5.jpg"
import img6 from "./assets/image/img6.jpg"
import img7 from "./assets/image/img7.jpg"


const root = ReactDOM.createRoot(document.getElementById("root"));

var arr = [img1, img2, img3, img4, img6, img7, img5,img1]
var disc = ["spiderman","batman","Spiderman","Captain America","Deadpool","Ironman","Superman","hulk"]


root.render(
  <div className="grid grid-cols-4 gap-4 p-5 m-5 bg-black">
    {
    arr.map(function(item,index)
    {
      return<Imagecard img={item} disc={disc[index]} />

    })
    }
  </div>
)



