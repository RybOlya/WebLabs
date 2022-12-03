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
import axios from "axios"

export const api = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

export const getPosts = async () => {
    const response = await api.get('/dwelling')
    return response.data
}