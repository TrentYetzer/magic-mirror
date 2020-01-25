import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
  },
  input: {
    color: 'white',
    width: 250,
  },
  button: {
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: 'gray',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
  },
  card: {
    maxWidth: 380,
    margin: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const addItem = event => {
    setTodos([...todos, { id: Date.now(), text: todoInput }]);
    event.preventDefault();
    document.getElementById('textbox').value = '';
  };

  const handleChange = event => {
    setTodoInput(event.target.value);
    event.preventDefault();
  };

  const removeItem = id => {
    setTodos(todos.filter(element => element.id !== id));
  };

  return (
    <div>
      <div className="todo-container">
        <form onSubmit={addItem} noValidate autoComplete="off">
          <TextField
            label="Task"
            id="textbox"
            className={classes.root}
            multiline
            rowsMax="4"
            InputProps={{
              className: classes.input,
            }}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            id="submit"
            type="submit"
            className={classes.button}
          >
            Add
          </Button>
        </form>
      </div>
      <div className="list">
        {todos.map(element => {
          return (
            <Grid container spaceing={1} alignItems="center">
              <Grid item xs={10} sm={8}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography display="block" variant="h6">
                      {bull}
                      {element.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={10} sm={2}>
                <IconButton
                  onClick={() => removeItem(element.id)}
                  className={classes.button}
                >
                  <DeleteIcon fonstSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
