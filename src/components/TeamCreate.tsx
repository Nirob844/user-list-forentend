/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row, message } from "antd";
import { useAddTeamMutation } from "../redux/api/teamApi";
import { useUsersQuery } from "../redux/api/userApi";
import Form from "./Form";
import FormInput from "./FormInput";
import FormMultiSelectField from "./FormMultiSelectField";
import Loading from "./Loading";

const TeamCreate = () => {
  const [addTeam] = useAddTeamMutation();
  const { data, isLoading } = useUsersQuery({
    limit: 100,
    page: 1,
  });
  if (isLoading) {
    return <Loading />;
  }
  const users = data?.users;
  const usersOptions = users?.map((user) => {
    return {
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={user?.avatar}
            alt={`${user?.first_name} ${user?.last_name}'s Avatar`}
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          <span>{`${user?.first_name} ${user?.last_name} - ${user?.domain} - ${user?.gender} - ${user?.available}`}</span>
        </div>
      ),
      value: user?._id,
    };
  });

  const onSubmit = async (data: any) => {
    message.loading("creating.............");
    console.log(data);
    try {
      const res = await addTeam({ ...data }).unwrap();
      console.log(res);
      if (res._id) {
        message.success(" create team in successfully");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div className="w-2/5 mx-auto my-20">
      <h1 className="my-5">create new team</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={24} style={{ margin: "10px 0" }}>
              <div style={{ margin: "10px 0px" }}>
                <FormInput name="name" label="Team Name" />
              </div>
              <div style={{ margin: "10px 0px" }}>
                <FormMultiSelectField
                  options={usersOptions as any[]}
                  name="userIds"
                  label="Select Users"
                />
              </div>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default TeamCreate;
