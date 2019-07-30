import React from "react";
import { Form, Button, Input } from "antd";
const { TextArea } = Input;

export const Editor = ({ onChange, onSubmit, submitting, values }) => (
  <div>
    <Form.Item>
      <Input
        placeholder="Name..."
        name="name"
        onChange={onChange}
        value={values.name}
      />
    </Form.Item>
    <Form.Item>
      <TextArea
        rows={4}
        onChange={onChange}
        value={values.message}
        name="message"
      />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);
