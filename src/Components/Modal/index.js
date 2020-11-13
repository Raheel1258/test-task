import React from 'react';
import { FiSend } from 'react-icons/fi';
import { Modal } from 'antd';

import './styles.css';

const CustomModal = ({ isOpen, handleModal, handleChange,handleSubmit }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={isOpen}
      footer={false}
      title={false}
      // onOk={this.handleOk}
      onCancel={() => handleModal(false)}
    >
      <textarea name="comment" onChange={handleChange} rows="8" className="modal-textarea" />
      <div onClick={handleSubmit} className="send-btn" >
        <FiSend color="#192E61" />
      </div>
    </Modal>
  )
}

export default CustomModal;