import { Pagination as AntPagination } from "antd";
import React from "react";

interface CustomPaginationProps {
  current: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number, page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  current,
  total,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handlePageSizeChange = (current: number, size: number) => {
    onPageSizeChange(size, current);
  };

  return (
    <AntPagination
      current={current}
      total={total}
      pageSize={pageSize}
      onChange={handlePageChange}
      showSizeChanger={true}
      onShowSizeChange={handlePageSizeChange}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
    />
  );
};

export default CustomPagination;
