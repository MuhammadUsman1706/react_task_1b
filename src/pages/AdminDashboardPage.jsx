import React, { useCallback, useContext, useEffect, useState } from "react";
import AppBar from "../components/AdminDashboardComponents/AppBar";
import Main from "../components/AdminDashboardComponents/Main";
import MkdSDK from "../utils/MkdSDK";
import update from "immutability-helper";
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router";

const AdminDashboardPage = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [limit, setLimit] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(null);
  const mkd = new MkdSDK();

  const nextPageHandler = () => {
    if (currentPage < limit) setCurrentPage((prevState) => prevState + 1);
  };

  const prevPageHandler = () => {
    if (currentPage > 1) setCurrentPage((prevState) => prevState - 1);
  };

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/admin/login");
  };

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setData((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  useEffect(() => {
    mkd
      .callRestAPI(
        { refurl: "/v1/api/rest/video/PAGINATE", limit: 10, page: currentPage },
        "PAGINATE"
      )
      .then((response) => {
        setData(response.list);
        setLimit(response.num_pages);
      });
  }, [currentPage]);

  return (
    <>
      {data ? (
        <div className="bg-black px-12 py-12 w-full h-full">
          <AppBar logout={logoutHandler} />
          <Main
            moveCard={moveCard}
            currentPage={currentPage}
            data={data}
            nextPage={nextPageHandler}
            prevPage={prevPageHandler}
          />
        </div>
      ) : (
        <div className="w-full flex justify-center items-center text-7xl h-screen text-gray-700">
          Loading, please wait
        </div>
      )}
    </>
  );
};

export default AdminDashboardPage;
