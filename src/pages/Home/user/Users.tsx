import { SetStateAction, useState } from "react";
import Loading from "../../../components/Loading";
import Pagination from "../../../components/Pagination";
import UsersList from "../../../components/UsersList";
import { useUsersQuery } from "../../../redux/api/userApi";
import { useDebounced } from "../../../redux/hooks";

const Users = () => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  const { data, isLoading } = useUsersQuery({
    limit: size,
    page,
    sortBy,
    sortOrder,
    searchTerm: debouncedSearchTerm,
  });
  if (isLoading) {
    return <Loading />;
  }
  const allUsers = data?.users || [];
  const meta = data?.meta;

  const totalPages = Math.ceil(meta?.total || 0 / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToShow = allUsers.slice(startIndex, endIndex);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page when search term changes
  };

  const handlePageSizeChange = (event: { target: { value: string } }) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
    setPage(1); // Reset page when page size changes
  };

  const handleSortByChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
    setPage(1); // Reset page when sort by field changes
  };

  const handleSortOrderChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortOrder(event.target.value);
    setPage(1); // Reset page when sort order changes
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <div className="mb-4">
        <label className="mr-2">Search:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="mr-2">Page Size:</label>
        <select
          value={size}
          onChange={handlePageSizeChange}
          className="border p-2"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          {/* Add other page sizes as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">Sort By:</label>
        <select
          value={sortBy}
          onChange={handleSortByChange}
          className="border p-2"
        >
          <option value="">Select</option>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          {/* Add other fields as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2">Sort Order:</label>
        <select
          value={sortOrder}
          onChange={handleSortOrderChange}
          className="border p-2"
        >
          <option value="">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <UsersList users={usersToShow} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Users;
