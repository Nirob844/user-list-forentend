interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageItems = [];

  for (let i = 1; i <= totalPages; i++) {
    pageItems.push(
      <button
        key={i}
        className={`px-3 py-2 mx-1 focus:outline-none ${
          i === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return <div className="flex">{pageItems}</div>;
};

export default Pagination;
