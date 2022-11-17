import React from "react";
import { Spinner } from "./LoadingSpinner.styled";

export default function LoadingSpinner() {
  return (
    <Spinner>
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </Spinner>
  );
}
