import { Card, Tag, Typography } from "antd";
import React from "react";
import { IUser } from "../types";

interface UserCardProps {
  user: IUser;
}

const { Meta } = Card;
const { Text } = Typography;

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card
      hoverable
      style={{ width: 250, height: 350 }}
      cover={
        <img
          alt="User Image"
          src={user.avatar}
          style={{ borderRadius: "10px 10px 0 0", height: "200px" }}
        />
      }
    >
      <Meta
        title={
          <span
            style={{ textDecoration: "none" }}
          >{`${user.first_name} ${user.last_name}`}</span>
        }
        description={
          <>
            <Text strong style={{ textDecoration: "none" }}>
              Email:
            </Text>{" "}
            {user.email}
            <br />
            <Text strong style={{ textDecoration: "none" }}>
              Gender:
            </Text>{" "}
            {user.gender}
            <br />
            <Text strong style={{ textDecoration: "none" }}>
              Availability:
            </Text>
            <Tag color={user.available ? "success" : "error"}>
              {user.available ? "Available" : "Not Available"}
            </Tag>
          </>
        }
      />
    </Card>
  );
};

export default UserCard;
