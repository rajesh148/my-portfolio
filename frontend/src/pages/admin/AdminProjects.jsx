import { Button, Form, Input, Modal, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

const AdminProjects = () => {
  const [showEditAddModal, setShowEditAddModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const { projects } = portfolioData;

  if (!portfolioData) return null;

  const onFinish = async (values) => {
    console.log("Success:", values);
    const tempTechs = values.technologies.split(",");
    console.log(tempTechs);
    values.technologies = tempTechs;
    try {
      dispatch(ShowLoading());
      let response;

      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowEditAddModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  const onClickDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end mb-3">
        <Button
          onClick={() => {
            setType("add");
            setSelectedItemForEdit(null);
            setShowEditAddModal(true);
          }}
          className="bg-primary text-white"
        >
          Add Project
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-5  md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project._id}
            className="shadow border p-5 border-gray-500 flex flex-col gap-2"
          >
            <h1 className="text-primary text-2xl font-bold">{project.title}</h1>
            <hr />
            <img
              src={project.imageUrl}
              alt="Project-img"
              className="h-60 w-80"
            />
            <p>{project.description}</p>
            <h1>Techs:</h1>
            <div className="flex flex-row gap-2 flex-wrap -mt-[10px] ">
              {project?.technologies?.map((tech) => (
                <div className="flex flex-row" key={tech}>
                  <span className="text-primary">{tech}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-end">
              <button
                className="bg-secondary text-white px-5 py-2 rounded-md"
                onClick={() => onClickDelete(project)}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setShowEditAddModal(true);
                  setSelectedItemForEdit(project);
                  setType("edit");
                }}
                className="bg-primary text-white px-5 py-2 rounded-md"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showEditAddModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => {
            setShowEditAddModal(false);
            setSelectedItemForEdit(null);
            setType("edit");
          }}
          maskClosable={false}
        >
          <Form
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            initialValues={{
              ...selectedItemForEdit,
              technologies: selectedItemForEdit?.technologies.join(" ,"),
            }}
          >
            <Form.Item label="title" name="title">
              <Input placeholder="title" />
            </Form.Item>

            <Form.Item label="imageUrl" name="imageUrl">
              <Input placeholder="imageUrl" />
            </Form.Item>

            <Form.Item label="link" name="link">
              <Input placeholder="link" />
            </Form.Item>

            <Form.Item label="technologies" name="technologies">
              <Input.TextArea placeholder="technologies" />
            </Form.Item>

            <Form.Item label="description" name="description">
              <Input.TextArea placeholder="description" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <div className="flex justify-end gap-3">
                <Button className="bg-primary" type="primary" htmlType="submit">
                  {selectedItemForEdit ? "update" : "Add"}
                </Button>
                <Button
                  type="default"
                  onClick={() => {
                    setShowEditAddModal(false);
                    setSelectedItemForEdit(null);
                    // setType("");
                    setType("edit");
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </div>
  );
};

export default AdminProjects;
