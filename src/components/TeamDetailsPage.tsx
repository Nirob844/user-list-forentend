/* eslint-disable @typescript-eslint/no-explicit-any */
// TeamDetailsPage.tsx

import { Avatar, Card, List } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTeamQuery } from "../redux/api/teamApi";

const TeamDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: teamData } = useTeamQuery(id);
  const [team, setTeam] = useState<any | null>(null);

  useEffect(() => {
    if (teamData) {
      setTeam(teamData);
    }
  }, [teamData]);

  if (!team) {
    // You can add loading or error handling here
    return null;
  }

  return (
    <div className="w-[50%] mx-auto my-20">
      <h1>Team Details: {team.name}</h1>
      <Card>
        <List
          dataSource={team.users}
          renderItem={(user: any) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={user.avatar} />}
                title={`${user.first_name} ${user.last_name}`}
                description={`Email: ${user.email}, Gender: ${
                  user.gender
                }, Domain: ${user.domain}, Available: ${
                  user.available ? "Yes" : "No"
                }`}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default TeamDetailsPage;
