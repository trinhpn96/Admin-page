import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      {/* Container */}
      <div className="">
        {/* Layout */}
        <div className="flex flex-col gap-3 justify-center items-center fixed w-[80%] max-w-xs top-[20%] lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 bg-gray-800 dark:bg-gray-300/95 py-8 px-6 rounded-lg">
          {/* Content */}
          <div>
            <h2 className="text-center text-3xl font-bold text-teal-600 ">
              Sign in
            </h2>
          </div>
          <div className="w-full">
            {/* Username */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className=" text-teal-700 font-medium text-base tracking-wide">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* Password */}
            <div className="form-control w-full max-w-xs mb-3 relative">
              <label className="label">
                <span className=" text-teal-700 font-medium text-base tracking-wide">
                  Password
                </span>
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <button
                onClick={togglePassword}
                className="absolute bottom-3 right-4"
              >
                <AiOutlineEye hidden={passwordShown} />
                <AiOutlineEyeInvisible hidden={!passwordShown} />
              </button>
            </div>

            {/* Submit btn */}

            <button className=" w-full btn btn-square bg-teal-600 font-semibold text-white text-base tracking-wider hover:bg-slate-200  hover:text-teal-600 hover:font-bold px-10 border-none mt-4">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
