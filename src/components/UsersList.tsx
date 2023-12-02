import { IUser } from "../types";
import UserCard from "./UserCard";

interface UsersListProps {
  users: IUser[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="flex flex-wrap">
      {users.map((user) => (
        <div key={user.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <UserCard user={user} />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
