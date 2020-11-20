import React from "react";
import { Error } from "../components";
const ErrorPage = () => {
  return (
    <div
      className="bg-black flex w-full justify-center items-center"
      style={{ height: "300px" }}
    >
      <div className="text-center">
        <Error />
        <p>Error !!</p>
      </div>
    </div>
  );
};

export default ErrorPage;
