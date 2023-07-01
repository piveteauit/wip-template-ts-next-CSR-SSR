import React, { useState, useEffect } from "react";
// import { css } from "tailwindcss";

const TableComponent = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleFilter = (event) => {
    const filtered = data.filter((row) => {
      return row[event.target.name].toLowerCase().includes(
        event.target.value.toLowerCase()
      );
    });
    setFilteredData(filtered);
  };

  const handleSort = (event, property) => {
    const sorted = filteredData.slice();
    sorted.sort((a, b) => {
      if (property === "name") {
        return a[property].localeCompare(b[property]);
      } else {
        return a[property] - b[property];
      }
    });
    setSortedData(sorted);
  };

  const handlePagination = (event) => {
    setCurrentPage(event.target.value);
  };

  useEffect(() => {
    setFilteredData(data);
    setSortedData(data);
  }, [data]);

  return (
    <div>

      <h2 className={"ext-3xl font-bold underline"}> User </h2>

      <table
        className={`table-auto`}
      >
        <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
            >
              {column.name}
              {/*<input
                type="text"
                placeholder="Filter"
                name={column.id}
                onChange={handleFilter}
              />*/}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
          .map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td
                  key={column.id}
                >
                  {row[column.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
