import { IUser } from "../types";
import UserCard from "./UserCard";

interface UsersListProps {
  users: IUser[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-5 gap-y-5">
      {users?.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UsersList;
