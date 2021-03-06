import React from "react";

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: "100%", height: "360px" }}
    >
      <div className="text-center">
        <svg
          width="144"
          height="147"
          viewBox="0 0 144 147"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo 2">
            <g id="Layer 1 1">
              <path
                id="Vector"
                d="M34.56 79.38C17.0928 79.38 2.88 93.8889 2.88 111.72C2.88 129.551 17.0928 144.06 34.56 144.06C45.2448 144.06 55.2586 138.468 61.0819 129.36H82.9152C88.7414 138.468 98.7552 144.06 109.437 144.06C126.904 144.06 141.117 129.551 141.117 111.72C141.117 93.8889 126.904 79.38 109.437 79.38H74.88V73.4999C74.88 67.0143 69.7133 61.7399 63.36 61.7399H51.84C48.6634 61.7399 46.08 59.1028 46.08 55.8599C46.08 52.6171 48.6634 49.9799 51.84 49.9799H92.16C98.5133 49.9799 103.68 44.7056 103.68 38.2199C103.68 31.7343 98.5133 26.4599 92.16 26.4599H80.64C77.4634 26.4599 74.88 23.8228 74.88 20.5799V2.93994H69.12V20.5799C69.12 27.0656 74.2867 32.3399 80.64 32.3399H92.16C95.3367 32.3399 97.92 34.9771 97.92 38.2199C97.92 41.4628 95.3367 44.0999 92.16 44.0999H51.84C45.4867 44.0999 40.32 49.3743 40.32 55.8599C40.32 62.3456 45.4867 67.6199 51.84 67.6199H63.36C66.5366 67.6199 69.12 70.2571 69.12 73.4999V79.38H34.56ZM135.36 111.72C135.36 126.308 123.731 138.18 109.44 138.18C100.241 138.18 91.6474 133.108 87.0163 124.947L86.1869 123.48H57.8189L56.9866 124.947C52.3555 133.108 43.7587 138.18 34.56 138.18C20.2694 138.18 8.64001 126.308 8.64001 111.72C8.64001 97.1317 20.2694 85.2599 34.56 85.2599H109.44C123.731 85.2599 135.36 97.1317 135.36 111.72Z"
                fill="white"
              />
              <g id="plus">
                <path
                  id="Vector_2"
                  d="M31.68 99.96V108.78H23.04V114.66H31.68V123.48H37.44V114.66H46.08V108.78H37.44V99.96H31.68Z"
                  fill="white"
                />
              </g>
              <path
                id="Vector_3"
                d="M69.1201 111.72H60.4801V117.6H69.1201V111.72Z"
                fill="white"
              />
              <path
                id="Vector_4"
                d="M83.52 111.72H74.88V117.6H83.52V111.72Z"
                fill="white"
              />
              <g id="buttons">
                <path
                  id="Vector_5"
                  d="M106.56 99.96H100.8V105.84H106.56V99.96Z"
                  fill="white"
                />
                <path
                  id="Vector_6"
                  d="M120.96 97.02H115.2V102.9H120.96V97.02Z"
                  fill="white"
                />
                <path
                  id="Vector_7"
                  d="M106.56 114.66H100.8V120.54H106.56V114.66Z"
                  fill="white"
                />
                <path
                  id="Vector_8"
                  d="M120.96 111.72H115.2V117.6H120.96V111.72Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
        </svg>
        <p className="mt-4">Loading ...</p>
      </div>
    </div>
  );
};

export default Loading;
