// import PostUpdatePopup from "./PostUpdatePopup";
// import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Modal } from "antd";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PostUpdateForm from "./PostUpdateForm";
// import { Link, NavLink } from "react-router-dom";

const { Meta } = Card;

const SampleCard = ({ title, description, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={title}
          description={description}
          category={category}
        />

        <div className="d-flex m-3 text-center justify-content-between">
          <Button>
            <NavLink to={title}>Learn More</NavLink>
          </Button>
          <>
            <Button type="primary" onClick={showModal}>
              Update
            </Button>
            <Modal
              title="Update Post"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <PostUpdateForm />
            </Modal>
          </>
        </div>
      </Card>
    </div>
  );
};

export default SampleCard;
