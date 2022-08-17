import React from 'react'
import { graphql } from 'gatsby'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ({ data: { directus } }) {


  return <>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Subject ID</TableCell>
            <TableCell align="right">Subject Name</TableCell>
            <TableCell align="right">Teacher</TableCell>
            <TableCell align="right">Members</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {directus.subjects.map((subject) => (
            <TableRow
              key={subject.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{subject.id_subject}</TableCell>
              <TableCell align="right">{subject.subject_name}</TableCell>
              <TableCell align="right">{subject.teacher}</TableCell>
              <TableCell align="right">{subject.member.map((member) =>
                (member.students_id && <div style={{}}> {member.students_id.firstname}  {member.students_id.lastname} </div>))} {/* check ว่า ถ้าเป็น null ไม่ต้องแสดง */}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    { }
  </>
}

export const query = graphql`
    query{
        directus {
          subjects {
            id_subject
            subject_name
            teacher
            member {
              students_id {
                firstname
                id_number
                lastname
              }
            }
          }
          }
    }
`


