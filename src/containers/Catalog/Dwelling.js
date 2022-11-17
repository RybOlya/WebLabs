import { useEffect, useState } from "react";
export default function Dwelling() {
  const [dwelling, setDwelling] = useState();
  useEffect(() => {
    console.log("Fetching...");
    fetch("http://localhost:8000/api/dwelling/")
      .then((response) => response.json())
      .then((data) =>{
        console.log(data)
        setDwelling(data);
      });
  },[]);
}
