import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputTodo from './input';
import TodoTable from './TodoTable';


const CardData = () => {
  return (
    <div>

      <Card >
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{mt:3}}>
          React-Redux Todo App
        </Typography>
        <CardContent >


          {/* input */}
          <InputTodo />

          {/* todolist */}
          <TodoTable />

        </CardContent>
      </Card>

    </div>



  )
}

export default CardData