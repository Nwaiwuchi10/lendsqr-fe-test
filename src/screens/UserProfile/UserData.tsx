import axios from "axios";
import React, { useEffect, useState } from "react";
import filterIcon from "./imgs/filter-results-button.png";
import dots from "./imgs/dots.png";
import moment from "moment";
import "./style.scss";
import { HiDotsVertical } from "react-icons/hi";
import Pagination from "../../components/Pagination/Pagination";
import Filter from "../../components/filter/Filter";
import UserOptions from "./UserOptions";
const UserData = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);

  const [clickedIndex, setClickedIndex] = useState<any>({});
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        " https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users "
      );
      console.log(data);
      setData(data);
    };

    fetchPosts();
  }, []);
  const handleClick = (id: any) => () => {
    setClickedIndex((state: any) => ({
      ...state,
      [id]: !state[id],
    }));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPost);

  const paginate = (item: number) => setCurrentPage(item);
  return (
    <div>
      <section className="intro">
        <div className="bg-image h-100">
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card useInfo-border">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover mb-0">
                          <thead>
                            <tr>
                              <th scope="col">
                                ORGANIZATION
                                <img
                                  src={filterIcon}
                                  alt="img"
                                  onClick={() => {
                                    setFilter(!filter);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />{" "}
                              </th>

                              <th scope="col">
                                USERNAME
                                <img
                                  src={filterIcon}
                                  alt="img"
                                  onClick={() => {
                                    setFilter(!filter);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              </th>
                              <th scope="col">
                                EMAIL
                                <img
                                  src={filterIcon}
                                  alt="img"
                                  onClick={() => {
                                    setFilter(!filter);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              </th>
                              <th scope="col">
                                PHONE NUMBER
                                <img
                                  src={filterIcon}
                                  alt="img"
                                  onClick={() => {
                                    setFilter(!filter);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              </th>
                              <th scope="col">
                                DATE JOINED
                                <img
                                  src={filterIcon}
                                  alt="img"
                                  onClick={() => {
                                    setFilter(!filter);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              </th>
                              <th scope="col">
                                STATUS
                                <img
                                  src={filterIcon}
                                  alt="img"
                                  onClick={() => {
                                    setFilter(!filter);
                                  }}
                                  style={{ cursor: "pointer" }}
                                />
                              </th>
                            </tr>
                          </thead>
                          {filter ? (
                            <div className="filterComponent">
                              <Filter />
                            </div>
                          ) : null}
                          <tbody>
                            {currentPost?.map((users: any, i) => (
                              <tr key={i}>
                                <td>{users?.orgName}</td>
                                <td>{users.userName}</td>
                                <td>{users.email}</td>
                                <td>{users.phoneNumber}</td>
                                {/* <td>{users.createdAt}</td> */}
                                <td>
                                  {" "}
                                  {moment(users.createdAt).format("lll")}
                                </td>
                                <td className="status">
                                  <div className="dashboard-status">
                                    inactive
                                  </div>
                                  {clickedIndex[users.id] && (
                                    <div
                                      className="option"
                                      style={{ cursor: "pointer" }}
                                    >
                                      <UserOptions id={users.id} />
                                    </div>
                                  )}
                                </td>
                                <td>
                                  <div
                                    style={{ cursor: "pointer" }}
                                    onClick={handleClick(users.id)}
                                  >
                                    <HiDotsVertical />
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Pagination
                      postsPerPage={postsPerPage}
                      totalPosts={data.length}
                      paginate={paginate}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      setPostPerPage={setPostPerPage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserData;
