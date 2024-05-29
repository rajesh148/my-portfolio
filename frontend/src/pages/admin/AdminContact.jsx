import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

const AdminContact = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  if (!portfolioData) return null;

  // console.log(portfolioData);

  const onFinish = async (values) => {
    console.log("Success:", values);

    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData?.contact._id,
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
        initialValues={portfolioData?.contact}
      >
        <Form.Item label="name" name="name">
          <Input placeholder="name" />
        </Form.Item>

        <Form.Item label="gender" name="gender">
          <Input placeholder="gender" />
        </Form.Item>

        <Form.Item label="dob" name="dob">
          <Input placeholder="dob" />
        </Form.Item>

        <Form.Item label="address" name="address">
          <Input placeholder="address" />
        </Form.Item>

        <Form.Item label="email" name="email">
          <Input placeholder="email" />
        </Form.Item>

        <Form.Item label="mobile" name="mobile">
          <Input placeholder="mobile" />
        </Form.Item>

        <Form.Item label="country" name="country">
          <Input placeholder="country" />
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

export default AdminContact;
