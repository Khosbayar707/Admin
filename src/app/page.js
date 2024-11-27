"user client";
import userData from "./userData";
import { Component } from "./component.js";
import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div className="cardContainer">
      {userData.map((employer) => {
        return <Component props={employer} />;
      })}
    </div>
  );
}
