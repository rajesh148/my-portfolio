import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminIntro = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  if (!portfolioData) return null;

  // console.log(portfolioData);

  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData?.intro._id,
      });

      console.log("ressss ", response);
      console.log("res.data ", response.data);

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
        initialValues={portfolioData?.intro}
      >
        <Form.Item label="welcomeTxt" name="welcomeTxt">
          <Input placeholder="Welcom Txt" />
        </Form.Item>

        <Form.Item label="fullName" name="fullName">
          <Input placeholder="fullName" />
        </Form.Item>

        <Form.Item label="caption" name="caption">
          <Input placeholder="caption" />
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
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminIntro;
