import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import swal from "sweetalert";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/all-users")
      .then((res) => setData(res.data.users))
      .catch((err) => swal(err.data.message + "Account not created", "danger"));
  }, [0]);

  const deleteProduct = (_id) => {
    axios
      .delete(`/deleteuser/${_id}`, {
        method: "DELETE",
      })
      .then((res) => swal(`${res.data.message}`))
      .catch((err) => swal(err));
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>email</th>
          <th>Create </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.createdAt}</td>
            <td>
              <div>
                <Button
                  variant="danger"
                  onClick={() => deleteProduct(item._id)}
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;
