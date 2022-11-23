import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <>

      <div className="my-5">
        <h2> our Service</h2>
         {/* <Card image="https://th.bing.com/th/id/OIP.mWbBO8fPh79qq2bSP0EADgHaE8?pid=ImgDet&rs=1"/>
          <Card image="https://usawebdesignexpress.com/wp-content/uploads/2020/04/team-building.jpg"/>
          <Card image="https://th.bing.com/th/id/OIP._hd7SRsmXnjUWg2eh_UDjQHaE8?pid=ImgDet&w=183&h=122&c=7"/>
          <Card image="https://th.bing.com/th/id/OIP.IBuJCQZy1VNXuoFzLxdQJAHaFj?pid=ImgDet&w=183&h=137&c=7"/>
          */}
          {
            Sdata.map((val,index)=>{
              return <Card
              image={val.imag}
              />
            })
          }
      </div>
    </>
  );
}

export default Service;