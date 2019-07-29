import React from "react";
import { Modal } from "antd";

const ModalWindow = ({ children, title, visible, handleOk, handleCancel }) => (
  <div>
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  </div>
);

export default ModalWindow;
