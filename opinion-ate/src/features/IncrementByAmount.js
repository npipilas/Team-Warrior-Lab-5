import React, {useState} from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { decrement, increment, incrementByAmount } from "./counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux'


export default function IncrementByAmount() {
   const counter = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();

   return(
   <div>
      <div>
         <div style={{marginTop: '30px'}}>
         <Typography>Please enter a number: </Typography>
        <TextField id="Input Box" label = 'Input Number' type={'number'}></TextField>
        </div>
        <div style={{marginTop: '30px' }}>
         <Button label="Button" variant='contained' onClick={() => dispatch(incrementByAmount(Number(document.getElementById('Input Box').value)))}> Button</Button>
         </div>
      </div>
      <div style={{marginTop: '30px'}}>
      <Typography>{"The count is: " + counter}</Typography>
      </div>
   </div>   
   )
}


