
// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import Data from "./Data";
// const [dwelling, setDwelling] = useState();
// axios.get("http://localhost:8000/api/dwelling/")
// .then(response => {
//   console.log(response.data.dwelling);
//   setDwelling(response.data.dwelling);
// }, error => {
//   console.log(error);
// });
// // const PostData = () => {

      
      
// //   return (
// //      response.data
// //   )
// // }

// export default dwelling
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:8000/api/dwelling/";

const GetData = async () =>  {
  const [dwelling, setDwelling] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDwelling(response.data.dwelling);
      return dwelling;
    });
  }, []);

  if (!dwelling) return null;

};
export default GetData;