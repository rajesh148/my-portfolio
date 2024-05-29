import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Button, Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminExperineces from "./AdminExperineces";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/admin-login");
    }
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Intro",
      children: <AdminIntro />,
    },
    {
      key: "2",
      label: "About",
      children: <AdminAbout />,
    },
    {
      key: "3",
      label: "Experience",
      children: <AdminExperineces />,
    },

    {
      key: "4",
      label: "Projects",
      children: <AdminProjects />,
    },

    {
      key: "5",
      label: "Contact",
      children: <AdminContact />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  return (
    <div>
      <Header />
      <div className="flex justify-between p-2 m-2">
        <h1 className="text-2xl px-2 ">Portfolio Admin</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      {portfolioData && (
        <div className=" p-5">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default Admin;
