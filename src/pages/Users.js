import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import swal from "sweetalert";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/all-users")
      .then((res) => setData(res.data.users))
      .catch((err) => swal(err.data.message + "Account not created", "danger"));
  }, [0]);

  console.log(data);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>email</th>
          <th>Create </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
