import React, { useState, useEffect } from "react"

const TableComponent = ({ data, columns }) => {
  const [filteredData, setFilteredData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleFilter = event => {
    const filtered = data.filter(row => {
      try {
        row[event.target.name] = row[event.target.name]?.toString().toLowerCase()
      } catch (e) {}
      try {
        event.target.value = event.target.value?.toString()?.toLowerCase()

      } catch (e) {}

      console.log(row, event.target.name)

      return row[event.target.name]
        ?.includes(event.target.value)
    })
    setFilteredData(filtered)
    handleSort(filtered, event.target.name)
  }

  const handleSort = (d, property) => {
    const sorted = d.slice()

    sorted.sort((a, b) => {
      if (property === "name") {
        return a[property].localeCompare(b[property])
      } else {
        return a[property] - b[property]
      }
    })
    setSortedData(sorted)
  }

  const handlePagination = event => {
    setCurrentPage(event.target.value)
  }

  useEffect(() => {
    setFilteredData(data)
    setSortedData(data)
  }, [data])

  return (
    <div>
      <h2 className={"ext-3xl font-bold underline"}> User </h2>


      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map(column => (

              <th scope="col" className="px-3 py-2" key={column.id}>
                <div className="relative flex items-center">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <input type="text"
                         name={column.id}
                         className="w-100 bg-gray-50 border-none-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         placeholder={column.name}
                         onChange={handleFilter}
                  />
                  {/*{column.name}*/}
                  <button className={"absolute right-0"} onClick={() => handleSort(sortedData, column.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true"
                         fill="currentColor" viewBox="0 0 320 512">
                      <path
                        d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/>
                    </svg>
                  </button>
                </div>
              </th>
            ))}


            <th scope="col" className="p3-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="p3-6 py-3">
              <span className="sr-only">Remove</span>
            </th>
          </tr>
          </thead>
          <tbody>

          {sortedData
            .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
            .map((row) => (
              <tr key={row.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {columns.map(column => (
                  <td key={column.id} className={"px-2 py-2"} >
                    {row[column.id]}
                  </td>
                ))}

                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>

                <td className="px-6 py-4 text-right">
                  <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default TableComponent
