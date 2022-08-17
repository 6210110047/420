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
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {directus.subjects.map((subject) => (
            <TableRow
              key={subject.id_subject}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{subject.id_subject}</TableCell>
              <TableCell align="right">{subject.subject_name}</TableCell>
              <TableCell align="right">{subject.teacher}</TableCell>
              <TableCell align="right">{subject.section}</TableCell>
              <TableCell align="right">{subject.time.map((times) =>
                <div>

                  <div style={{}}> day : {times.time_id.day}</div>
                  <div style={{}}>
                    start : {times.time_id.start} </div>
                  <div style={{}}> end: {times.time_id.end} </div>

                </div>
              )}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
}

export const query = graphql`
    query{
        directus {
          subjects(filter: {id_subject:{_eq:"240-420"}}) {
            id_subject
            subject_name
            teacher
            section
            member {
              students_id {
                firstname
                id_number
                lastname
              }
            } 
            time {
                time_id {
                  end
                  day
                  start
                }
              }
          }
          }
    }
`


