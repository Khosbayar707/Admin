"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Table() {
  const [data, setData] = useState();
  const param = useParams();
  console.log(param);
  useEffect(() => {
    fetch(`/api/users/${param.more}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data?.data);
      });
  }, [param.more]);
  console.log(data);

  return (
    <div>
      <div>firstname : {data?.firstname}</div>
      <div>lastname : {data?.lastname}</div>
    </div>
  );
}
