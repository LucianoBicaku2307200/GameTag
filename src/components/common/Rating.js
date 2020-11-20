import React from "react";

const Rating = ({ data }) => {
  return (
    <div className="inline-flex add-blur">
      <p className="font-medium text-lg ">{data}</p>
      <svg
        className="ml-1 flex items-center"
        width="13"
        height="11"
        viewBox="0 0 13 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1639 4.21955C12.0869 3.99681 11.8758 3.83861 11.6259 3.81754L8.23248 3.52926L6.89062 0.590776C6.79168 0.375423 6.56634 0.236023 6.31598 0.236023C6.06562 0.236023 5.84029 0.375423 5.74135 0.59128L4.39948 3.52926L1.00549 3.81754C0.756119 3.83911 0.545497 3.99681 0.468083 4.21955C0.39067 4.44228 0.462163 4.68659 0.650808 4.84059L3.21586 6.94528L2.45948 10.0625C2.40414 10.2917 2.49922 10.5286 2.70249 10.6661C2.81175 10.74 2.93957 10.7776 3.06847 10.7776C3.17962 10.7776 3.28986 10.7495 3.3888 10.6941L6.31598 9.05735L9.24208 10.6941C9.4562 10.8147 9.72612 10.8037 9.92894 10.6661C10.1323 10.5282 10.2273 10.2912 10.1719 10.0625L9.41557 6.94528L11.9806 4.84101C12.1693 4.68659 12.2413 4.4427 12.1639 4.21955Z"
          fill="#C9B92D"
        />
      </svg>
    </div>
  );
};

export default Rating;