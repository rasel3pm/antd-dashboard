import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const SampleCard = ({ title, description, category }) => {
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
        actions={[
          <Button>
            <Link to={title}>
              Learn More <ArrowRightOutlined />
            </Link>
          </Button>,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={title}
          description={description}
        />
      </Card>
    </div>
  );
};

export default SampleCard;
