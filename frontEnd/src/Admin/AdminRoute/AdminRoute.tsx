/* eslint-disable jsx-a11y/anchor-is-valid */
// AdminRoute.js
import React from "react";

const AdminRoute = ({ children }) => {
  const profile = localStorage.getItem("profile");

  if (profile) {
    const parsedProfile = JSON.parse(profile);
    if (parsedProfile.isAdmin) {
      return children;
    }
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            Lỗi xác minh
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Có một vài sự cố nhầm lẫn
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Xin lỗi chúng tôi không tìm kiếm được trang! Quay lại trang truy cập
          </p>
          <a
            href="/home"
            className="inline-flex bg-slate-500 text-black bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdminRoute;
