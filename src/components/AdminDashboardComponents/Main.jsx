import React from "react";

import classes from "./Main.module.css";
import MainCard from "./MainCard";

const Main = ({ data, prevPage, nextPage, currentPage, moveCard }) => {
  return (
    <div>
      <div className={classes.main}>
        <p>Today's Leaderboard</p>
        <div>
          30 May 2022 • <span>SUBMISSIONS OPEN</span> • 11:34
        </div>
      </div>

      <div className={classes["table-parent"]}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th className={classes.right}>Most Liked</th>
            </tr>
          </thead>
          <tbody>
            {data.map((video, index) => (
              <MainCard video={video} index={index} moveCard={moveCard} />

              //   <tr>
              //     <td>0{index}</td>
              //     <td>
              //       <div className={classes.title}>
              //         <img src={video.photo} alt={video.title} />
              //         <p>{video.title}</p>
              //       </div>
              //     </td>
              //     <td>
              //       <div className={classes.author}>
              //         <img src={author} alt="author" />
              //         <p>Author</p>
              //       </div>
              //     </td>
              //     <td className={classes.right}>{video.like}</td>
              //   </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={classes.navigation}>
        <button onClick={prevPage} className="text-black font-bold py-4 px-6">
          Previous
        </button>
        <p>{currentPage}</p>
        <button onClick={nextPage} className="text-black font-bold py-4 px-6">
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
