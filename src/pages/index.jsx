import React from 'react'
import { graphql } from 'gatsby'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import {graphql ,// Link } from 'gatsby'

const imageLink = 'http://localhost:8055/assets/'

export default function ({ data: { directus } }) {


  return <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Student IMG</TableCell>
            <TableCell align="right">Student ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Subject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {directus.students.map((student) => (
            <TableRow
              key={student.id_number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right"><img
                src={`${imageLink}${student.profile_image.filename_disk}`}
                alt="student"
                width="50" height="50"
                border-radius="50%"
              /></TableCell>
              <TableCell align="right">{student.id_number}</TableCell>
              <TableCell align="right">{student.firstname}</TableCell>
              <TableCell align="right">{student.lastname}</TableCell>
              <TableCell align="right">{student.year}</TableCell>
              <TableCell align="right">{student.subject.map((course) => {
                return (<div>

                  <div> Course: {course.subjects_id.id_subject} {course.subjects_id.subject_name}  sec : {course.subjects_id.section}</div>
                  <div> Teacher : Dr. {course.subjects_id.teacher} </div>
                </div>
                )
              })}</TableCell>
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
            students {
              id
              id_number
              lastname
              firstname
              year
              profile_image{
                filename_disk
              }
              subject {
                subjects_id {
                  id_subject
                  subject_name
                  section
                  teacher
                }
              }
            }
          }
    }
`