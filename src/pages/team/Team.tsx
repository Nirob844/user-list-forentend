/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, List } from "antd";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { useTeamsQuery } from "../../redux/api/teamApi";

const Team = () => {
  const { data: teamsData } = useTeamsQuery({ limit: 100, page: 1 });

  if (!teamsData) {
    return <Loading />;
  }

  const teams = teamsData.teams;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-8">All Teams</h1>
        <Link to="/create-team">
          <Button type="primary" className="mr-20" icon={<PlusOutlined />}>
            Create Team
          </Button>
        </Link>
      </div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        dataSource={teams}
        renderItem={(team: any) => (
          <List.Item>
            <Link to={`/teams/${team._id}`}>
              <Card
                hoverable
                className="mx-10 w-64 h-80 border rounded-md overflow-hidden shadow-md transition-transform transform hover:scale-105"
                title={team.name}
                extra={<Link to={`/teams/${team._id}`}>Details</Link>}
              >
                <List
                  dataSource={team.users}
                  renderItem={(user: any) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={user.avatar} />}
                        title={`${user.first_name} ${user.last_name}`}
                        description={`Domain: ${user.domain}, Available: ${
                          user.available ? "Yes" : "No"
                        }`}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Team;
