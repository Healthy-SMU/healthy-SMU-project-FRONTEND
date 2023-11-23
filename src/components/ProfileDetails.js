import React from "react";
import "./ProfileDetails.css";
import avatar from "./Assets/avatar.jpg";

export default function ProfileDetails() {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src={avatar}
            alt="avatar"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
}
