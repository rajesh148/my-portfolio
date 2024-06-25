import React from "react";

const LeftSider = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10 lg:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-4 lg:mb-10">
          <a href="/" target="_blank">
            <i className="ri-mail-line text-gray-600 text-xl"></i>
          </a>
          <a href="/" target="_blank">
            <i className="ri-linkedin-box-fill text-gray-600 text-xl"></i>
          </a>
          <a href="https://github.com/rajesh148" target="_blank">
            <i className="ri-github-fill text-gray-600 text-xl"></i>
          </a>
          <a href="/" target="_blank">
            <i className="ri-instagram-line text-gray-600 text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] lg:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSider;
