import React from "react";

class ProfileContent extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div className="mt-24">
          <h1 className="text-black text-m font-bold text-right mr-5 mb-20">
            Welcome! <span className="text-pinky-600">Admin</span>
          </h1>

          {/* Manage Account */}
          <div className="manage-profile flex flex-row w-[80%] mx-auto justify-between items-start gap-12 mb-24">
            <div className="basis-1/4 flex flex-col w-full h-full ">
              <div className="mb-5">
                <p className="text-black font-semibold">Manage Account</p>
                <ul className="text-slate-400 ml-8 my-2">
                  <li className="mb-2 text-pinky-600">My Profile</li>
                  <li className="mb-2">Address Book</li>
                  <li className="">My Payment Options</li>
                </ul>
              </div>

              <div className="mb-5">
                <p className="text-black font-semibold">My Orders</p>
                <ul className="text-slate-400 ml-8 my-2">
                  <li className="mb-2">My Returns</li>
                  <li className="">My Cancellations</li>
                </ul>
              </div>

              <div className="">
                <p className="text-black font-semibold">My wishlist</p>
              </div>
            </div>
            <div className="basis-3/4 flex flex-col h-full shadow-md px-5 py-3">
              {/* TEXT */}
              <p className="text-pinky-600 text-xl font-semibold">
                Edit Your Profile
              </p>

              {/* FORM */}
              <form>
                <div className="name flex flex-row gap-x-10">
                  <div className="basis-1/2 mb-4">
                    <label className="block text-gray-700">First Name</label>
                    <input
                      type="text"
                      className="mt-1 pl-3 text-slate-600  block w-full rounded-md bg-slate-200 h-10 border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                      placeholder="Md"
                    />
                  </div>
                  <div className="basis-1/2 mb-4">
                    <label className="block text-gray-700">Last Name</label>
                    <input
                      type="text"
                      className="mt-1 pl-3 text-slate-600  block w-full rounded-md bg-slate-200 h-10 border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                      placeholder="Rimel"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 pl-3 text-slate-600  block w-full rounded-md bg-slate-200 h-10 border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    placeholder="rimell111@gmail.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    className="mt-1 pl-3 text-slate-600  block w-full rounded-md bg-slate-200 h-10 border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    placeholder="Kingston, 5236, United State"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-4">
                  Password Changes
                </h3>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 pl-3 text-slate-600  block w-full rounded-md bg-slate-200 h-10 border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    placeholder="Current Password"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">New Password</label>
                  <input
                    type="password"
                    className="mt-1 pl-3 text-slate-600  block w-full rounded-md bg-slate-200 h-10 border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    placeholder="New Password"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="mt-1 pl-3 text-slate-600  block w-full rounded-md bg-slate-200 h-10 border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                    placeholder="Confirm New Password"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mr-4 py-2 px-4 bg-gray-300 text-gray-700 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-red-500 text-white rounded-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileContent;
