/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CloseCircleOutlined,
  FilterOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Popover, Select } from "antd";
import { useState } from "react";
import Loading from "../../components/Loading";
import CustomPagination from "../../components/Pagination";
import UsersList from "../../components/UsersList";
import { useUsersQuery } from "../../redux/api/userApi";
import { useDebounced } from "../../redux/hooks";

const Users = () => {
  const query: Record<string, any> = {};
  const [form] = Form.useForm();
  const { Option } = Select;

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [visible, setVisible] = useState(false);

  query["page"] = page;
  query["limit"] = size;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useUsersQuery({
    ...query,
  });

  if (isLoading) {
    return <Loading />;
  }
  const allUsers = data?.users || [];
  const meta = data?.meta;

  const handleSearch = (value: any) => {
    setSearchTerm(value);
  };

  const handleSortByChange = (value: any) => {
    setSortBy(value);
    setSortOrder(value === "ascend" ? "asc" : "desc");
  };

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value);
  };

  const handlePaginationChange = (current: number) => {
    setPage(current);
  };

  const handleClose = () => {
    setVisible(false); // Close the popover
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setPage(1); // Reset the page to 1
    form.setFieldsValue({
      sortBy: "",
      sortOrder: "",
    });
  };

  const filterButton = (
    <Popover
      content={
        <div style={{ padding: "16px" }}>
          <Button
            type="default"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            onClick={handleClose}
          >
            <CloseCircleOutlined />
          </Button>
          <p>Select Sort By</p>
          <Select
            style={{ width: "100%", margin: "8px 0" }}
            placeholder="Sort By"
            onChange={handleSortByChange}
            value={sortBy}
          >
            <Option value="first_name">First Name</Option>
            <Option value="last_name">Last Name</Option>
          </Select>
          <p>Select Sort Order</p>
          <Select
            style={{ width: "100%", margin: "8px 0" }}
            placeholder="Sort Order"
            onChange={handleSortOrderChange}
            value={sortOrder}
          >
            <Option value="asc">Ascending</Option>
            <Option value="desc">Descending</Option>
          </Select>
          <Button
            type="primary"
            style={{ width: "100%", margin: "8px 0" }}
            onClick={resetFilters}
          >
            <ReloadOutlined /> Reset Filters
          </Button>
        </div>
      }
      title="Filter Options"
      trigger="click"
      visible={visible} // Control the visibility of the popover
      onVisibleChange={(newVisible) => setVisible(newVisible)} // Update the state when the popover visibility changes
    >
      <Button
        type="primary"
        icon={<FilterOutlined />}
        style={{ margin: "0 8px" }}
        size="large"
        onClick={() => setVisible(!visible)} // Toggle the visibility of the popover
      >
        Filter
      </Button>
    </Popover>
  );

  return (
    <div className="m-10">
      {/* <UmBreadCrumb
        items={[
          {
            label: "Home",
            link: "/",
          },
        ]}
      /> */}
      <h1 className="mb-2 text-center">All Users</h1>
      <div className="flex flex-wrap items-center m-5">
        <Input.Search
          className="w-full sm:w-1/2 md:w-3/4 lg:w-5/6 mb-3 sm:mb-0"
          size="large"
          placeholder="Searching..........."
          onChange={(e) => handleSearch(e.target.value)}
        />
        {filterButton}
      </div>
      <hr />
      <div className="my-5">
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <UsersList users={allUsers} />
        )}
        <div className="flex justify-center mt-4">
          <CustomPagination
            current={page}
            total={meta?.total || 0}
            pageSize={size}
            onPageChange={handlePaginationChange}
            onPageSizeChange={(pageSize, page) => {
              setSize(pageSize);
              setPage(page);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
