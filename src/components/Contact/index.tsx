import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import { InputField } from "../shared/FormFields";
import { FormProps, useForm } from "antd/es/form/Form";
import { Heading } from "../shared/Heading";

type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const Contact = () => {
  const [form] = useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="mb-[120px]">
      <Heading title="contact" />

      <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[20, 0]}>
          <Col xs={24} md={12}>
            <InputField
              labelProps={{
                name: "firstName",
                label: "first name",
                rules: [
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ],
              }}
              inputProps={{
                placeholder: "Enter your first name",
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <InputField
              labelProps={{
                name: "lastName",
                label: "last name",
                rules: [
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ],
              }}
              inputProps={{
                placeholder: "Enter your last name",
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <InputField
              labelProps={{
                name: "email",
                label: "Email",
                rules: [
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ],
              }}
              inputProps={{
                placeholder: "Enter your email",
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <InputField
              labelProps={{
                name: "phone",
                label: "phone",
                rules: [
                  {
                    required: true,
                    message: "Please input your phone!",
                  },
                ],
              }}
              inputProps={{
                placeholder: "Enter your phone",
              }}
            />
          </Col>

          <Col xs={24}>
            <Form.Item
              name="message"
              label="message"
              className={"sof-form-field-wrapper"}
              rules={[
                {
                  required: true,
                  message: "Please input your message!",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Enter your message"
                autoComplete="off"
              />
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item>
              <Button
                htmlType="submit"
                className="w-full rounded-[10px] !bg-[#F89222] !border-none h-12 !text-white text-[20px]"
              >
                Send message
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default Contact;
