import UsersList from "../pages/user/UsersList";
import { useUsersQuery } from "../redux/api/userApi";
import Loading from "./Loading";

const AvailableUser = () => {
  const { data, isLoading } = useUsersQuery({
    limit: 4,
    sortOrder: "desc",
    available: true,
  });
  const users = data?.users || [];

  return (
    <div className="m-10">
      <h1 className="mt-5 mb-5 text-center">Available User</h1>
      <div>
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <UsersList users={users} />
        )}
      </div>
    </div>
  );
};

export default AvailableUser;
