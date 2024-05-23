import React from "react";
import SectionTittle from "../../components/SectionTittle";

const Contact = () => {
  const user = {
    name: "Rajesh Bagguva",
    gender: "Male",
    "D.O.B": "14/12/1997",
    email: "rajeshbagguvaiiitn@gmail.com",
    mobile: "9949928648",
    country: "India",
  };
  return (
    <div>
      <SectionTittle title="About Me" />
      <div className="flex">
        <div className="flex flex-col">
          <p className="text-white">{"{"}</p>
          {Object.keys(user).map((key) => (
            <h1 className="ml-6 text-tertiary">
              <span>{'"' + key + '"'} :</span>
              <span className="text-white ml-1">{'"' + user[key] + '"'}</span>
            </h1>
          ))}
          <p className="text-white">{"}"}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
