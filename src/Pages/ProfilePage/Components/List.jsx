import React from "react";
import useProfileStore from "../../../Store/ProfileStore";

const List = ({ type }) => {
  const { myPosts, scraps, reservations } = useProfileStore();

  let data = [];
  let columns = [];

  if (type === "myPosts") {
    data = myPosts;
    columns = ["NO", "타입", "제목", "모집"];
  } else if (type === "scraps") {
    data = scraps;
    columns = ["NO", "제목", "작성자", "작성일", "좋아요", "댓글"];
  } else if (type === "reservations") {
    data = reservations;
    columns = ["NO", "상태", "사유", "신청일", ""];
  }

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col, index) => (
              <th key={index} className="border p-2">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className="border">
              <td className="p-2">{index + 1}</td>
              {type === "myPosts" && (
                <>
                  <td className="p-2">{item.type}</td>
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">{item.status}</td>
                  {/* <td className="p-2">
                                        {item.isRecruiting ? "모집 중" : "마감"}
                                    </td> */}
                </>
              )}
              {type === "scraps" && (
                <>
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">{item.author}</td>
                  <td className="p-2">{item.createDate}</td>
                  <td className="p-2">{item.comments}</td>
                  <td className="p-2">{item.likes}</td>
                </>
              )}
              {type === "reservations" && (
                <>
                  <td className="p-2">{item.status}</td>
                  <td className="p-2">{item.reason}</td>
                  <td className="p-2">{item.requestDate}</td>
                  <td className="p-2">
                    {item.status === "대기중" && (
                      <button
                        onClick={() => cancelReservation(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        취소
                      </button>
                    )}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
