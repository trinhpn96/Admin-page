const Login = () => {
  return (
    <div>
      {/* Container */}
      <div className="">
        {/* Layout */}
        <div className="flex flex-col gap-3 justify-center items-center fixed w-[80%] max-w-xs top-[20%] lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 ">
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
            <div className="form-control w-full max-w-xs mb-3">
              <label className="label">
                <span className=" text-teal-700 font-medium text-base tracking-wide">
                  Password
                </span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            {/* Submit btn */}

            <button className=" w-full btn btn-square bg-teal-600 font-semibold text-base tracking-wider hover:bg-slate-200  hover:text-teal-600 hover:font-bold px-10 border-none mt-4">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
