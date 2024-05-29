import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminAbout = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  if (!portfolioData) return null;

  // console.log(portfolioData);

  const onFinish = async (values) => {
    console.log("Success:", values);

    const tempSkills = values.skills.split(",");

    values.skills = tempSkills;
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData?.about._id,
      });

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        initialValues={{
          ...portfolioData?.about,
          skills: portfolioData?.about?.skills.join(" ,"),
        }}
      >
        <Form.Item label="imgUrl" name="imgUrl">
          <Input placeholder="imgUrl" />
        </Form.Item>

        <Form.Item label="description1" name="description1">
          <Input placeholder="description1" />
        </Form.Item>

        <Form.Item label="description2" name="description2">
          <Input placeholder="description2" />
        </Form.Item>

        <Form.Item label="skills" name="skills">
          <Input.TextArea placeholder="skills" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminAbout;
