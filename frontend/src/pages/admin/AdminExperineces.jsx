import { Button, Form, Input, Modal, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

const AdminExperineces = () => {
  const [showEditAddModal, setShowEditAddModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const { experiences } = portfolioData;

  if (!portfolioData) return null;

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      dispatch(ShowLoading());
      let response;

      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
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
      const response = await axios.post("/api/portfolio/delete-experience", {
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
          Add Experience
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-5 md:grid-cols-1 lg:grid-cols-2">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="shadow border p-5 border-gray-500 flex flex-col gap-2"
          >
            <h1 className="text-primary text-2xl font-bold">{exp.period}</h1>
            <hr />
            <h1 className="text-tertiary text-xl font-semibold">
              {exp.company}
            </h1>
            <h1 className="text-gray-900 text-xl"> {exp.role}</h1>
            <p>{exp.description}</p>
            <div className="flex gap-4 justify-end">
              <button
                className="bg-secondary text-white px-5 py-2 rounded-md"
                onClick={() => onClickDelete(exp)}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setShowEditAddModal(true);
                  setSelectedItemForEdit(exp);
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
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
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
            initialValues={{ ...selectedItemForEdit }}
          >
            <Form.Item label="role" name="role">
              <Input placeholder="role" />
            </Form.Item>

            <Form.Item label="period" name="period">
              <Input placeholder="period" />
            </Form.Item>

            <Form.Item label="company" name="company">
              <Input placeholder="company" />
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

export default AdminExperineces;
