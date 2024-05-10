import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ReactPaginate from "react-paginate";

function Getapi() {
  const [pageNumber, setPageNumber] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState('');
  const limit = 5;

  useEffect(() => {
    const fetchInitialData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const totalItems = parseInt(res.headers.get("x-total-count"), 10);
      setPageCount(Math.ceil(totalItems / limit));
      setPageNumber(data);
      setRecords(pageNumber);
    };


    fetchInitialData();
  }, []);

    const handleSearch = (event) => {
      setSearch(event.target.value);
      setPageCount(limit);
    }


  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    const selectedPage = data.selected + 1;
    const newPageData = await fetchComments(selectedPage);
    setPageNumber(newPageData);
  };

  const Filter = pageNumber.filter((product) => {
    const matchDec = search.toLowerCase();
    return product.title.toLowerCase().includes(matchDec);
    // setPageNumber(records.filter((f => f.title.toLowerCase().includes(event.target.value)))
    // );
    // setPageNumber(records.filter((f => f.title.toLowerCase().includes(event.target.value)))
    // );
  });

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="App">
        <input
          type="text "
          style={{
            width: "38%",
            display: "inline",
            padding: "0.375rem",
            marginLeft: "785px",
          }}
          placeholder="Search By Title"
          class="form-control"
          onChange={handleSearch}
        />

        <h1 style={{marginBottom:"0.5rem",marginTop:"-45px"}} >GET API CALL</h1>
        <table style={{ width: "84%", marginLeft: "15%" }} border={1}>
          <thead>
            <tr>
              <th>Album ID</th>
              <th>Album</th>
              <th>Title</th>
              <th>URL</th>
              <th>Thumbnail URL</th>
            </tr>
          </thead>
          <tbody>
            {Filter.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.albumId}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>{item.thumbnailUrl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <ReactPaginate
          previousLabel={"PREVIOUS"}
          nextLabel={"NEXT"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </>
  );
}

export default Getapi;
