import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useSelector } from 'react-redux';
import { addedTodoList } from '../features/todoSlice';
import { useDispatch } from 'react-redux';
import { setCompledStatus, setdeletedStatus } from '../features/todoSlice';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


const TodoTable = () => {

    const[timetaken, setTimetaken] = useState(0)
    const todoList = useSelector(addedTodoList)
    const dispatch = useDispatch()

    const handleComplete = (index) => {
        dispatch(setCompledStatus(index));

    };

    const deletetask = (index) => {
        dispatch(setdeletedStatus(index))

    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const filter = true;
    const isCompleted = (x) => (x.completed === filter && x.deletedstatus === false);

    const filterr = false;
    const Pending = (x) => (x.completed === filterr && x.deletedstatus === false);


    return (
        <div>
            <TableContainer component={Paper}  >
                <Table sx={{ minWidth: 600 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Task Name</TableCell>
                            {/* <TableCell align="right">Time Taken</TableCell> */}
                            <TableCell align="right">Completed</TableCell>
                            {/* <TableCell align="right">Updated On</TableCell> */}
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList.filter(Pending).map((raw) => (
                            <TableRow key={raw.id}>
                                <TableCell align="left">{raw.id}</TableCell>
                                <TableCell align="left"> {raw.task}</TableCell>
                                {/* <TableCell align="left"> {raw.timetaken}</TableCell>                                */}
                                <TableCell align="right">{raw.completed ? "Completed" : "Pending"}</TableCell>
                                {/* <TableCell align="right">{raw.updatedon}</TableCell> */}
                                <TableCell align="right">
                                    {!raw.completed && (
                                        <IconButton
                                            edge="end"
                                            aria-label="complete"
                                            style={{ margin: "5px 5px" }}
                                            onClick={() => handleComplete(raw.id)}
                                        >
                                            <TaskAltIcon />
                                        </IconButton>
                                    )}
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        style={{ margin: "15px 10px" }}
                                        onClick={() => { deletetask(raw.id) }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



            <TableContainer sx={{ minWidth: 700, mt: 15 }} component={Paper}>
                <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ mt: 3 }}>
                    Completed Tasks
                </Typography>
                <Table aria-label="customized table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="leftt">ID</StyledTableCell>
                            <StyledTableCell>Task Name</StyledTableCell>
                            {/* <StyledTableCell align="right">Time Taken</StyledTableCell> */}
                            <StyledTableCell align="right">Completed</StyledTableCell>
                            {/* <StyledTableCell align="right">Updated On</StyledTableCell> */}
                            <StyledTableCell align="right">Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList.filter(isCompleted).map((row) => (
                            <StyledTableRow key={row.id}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <StyledTableCell component="th" scope="row">{row.task} </StyledTableCell>
                                {/* <StyledTableCell align="right">{row.timetaken}</StyledTableCell> */}
                                <StyledTableCell align="right">{row.completed ? "Completed" : "Pending"}</StyledTableCell>
                                {/* <StyledTableCell align="right">{row.updatedon}</StyledTableCell> */}
                                <StyledTableCell align="right">
                                    <IconButton
                                        edge="end"
                                        aria-label="delete"
                                        style={{ margin: "15px 10px" }}
                                        onClick={() => { deletetask(row.id) }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>

    )
}

export default TodoTable