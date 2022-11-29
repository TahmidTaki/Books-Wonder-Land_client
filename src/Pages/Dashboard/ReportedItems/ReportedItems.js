import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ReportedItems = () => {
  const [reportedItems, setReportedItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reporteditems", {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((data) => {
        setReportedItems(data.data);
        console.log(data);
      });
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/reportedbook/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item Deletion was successful");
          reloadData();
        }
      });
  };
  function reloadData() {
    window.location.reload(false);
  }

  return (
    <div>
      <h3>Reported Items: {reportedItems.length}</h3>
      {reportedItems.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <h3>{item.status}</h3>
          <h3>{item.seller}</h3>
          <button onClick={() => deleteItem(item._id)}>Delete Item</button>
        </div>
      ))}
    </div>
  );
};

export default ReportedItems;
