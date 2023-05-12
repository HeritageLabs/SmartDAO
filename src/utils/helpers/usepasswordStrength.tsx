      {/* {passwordInput && (
        <div>
          <div className="flex w-full justify-between text-sm items-center mt-2">
            <div className="flex w-1/2 items-center">
              <div
                className={`h-1 w-16 mt-2 mr-2 bg-poor rounded-md ${
                  level > 0 ? "block" : "hidden"
                } `}
              />
              <div
                className={`h-1 w-16 mt-2 mr-2 bg-fair rounded-md ${
                  level > 1 ? "flex" : "hidden"
                } `}
              />
              <div
                className={`h-1 w-16 mt-2 mr-2 bg-good rounded-md ${
                  length >= 8 && level == 4 ? "block" : "hidden"
                }`}
              />
              <div
                className={`h-1 w-16 mt-2 bg-excellent rounded-md ${
                  level == 4 && message == "Strong" && length >= 10
                    ? "block"
                    : "hidden"
                }`}
              />
            </div>
            <div
              className={`px-4 py-px text-neutral rounded-lg bg-${
                message == "Too weak"
                  ? "poor"
                  : message == "Weak"
                  ? "fair"
                  : message == "Medium"
                  ? "good"
                  : message == "Strong"
                  ? "excellent"
                  : "white"
              }`}
            >
              {message}
            </div>
          </div>
        </div>
      )} */}

//       import Spinners from "../../assets/svg/spinner";

// export default {
//   title: "Example/Spinners",
//   component: Spinners,
//   tags: ["autodocs"],
//   argsTypes: {
//     size: { control: "text" },
//   },
// };

// export const Small = {
//   args: {
//     size: "10",
//   },
// };

// export const Medium = {
//   args: {
//     size: "12",
//   },
// };

// export const Big = {
//   args: {
//     size: "18",
//   },
// };
