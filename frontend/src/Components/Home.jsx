import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4002/home/view');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


function handleDelete(_id){
    return(
      axios.delete(`http://localhost:4002/home/delete/${_id}`)
      .then((res)=>{
        setData(data.filter(item=>item._id!==_id));
        window.location.reload();

      })
      .catch((err)=>{
        console.log('Error deleting the data',err);
      })
    )
  };

  return (
    <div>
        <h3>Welcome to Todo!!</h3>
      <TableContainer>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <button onClick={() => handleEdit(row)}>Edit</button>
                  <button onClick={() => handleDelete(row._id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>

      </TableContainer>
    </div>
  );
};