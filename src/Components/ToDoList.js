// this component is a reminder checklist for the user to write list of notes to remind them of things they need to do for their monthly budget, such as paying bills, paying rent, etc.
// implement drag and drop feature to allow user to drag and drop items in the list
// delete button to delete items in the list
// checkbox to mark items as completed
//edit button to edit items in the list

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ToDoList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [items, setItems] = useState([
    { id: 1, value: "Pay Rent" },
    { id: 2, value: "Pay Bills" },
    { id: 3, value: "Buy Groceries" },
    { id: 4, value: "Buy Clothes" },
    { id: 5, value: "Buy Shoes" },
  ]);
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const submitUpdate = (value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === edit.id ? value : item))
    );
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ItemEdit edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <List className={classes.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListItem
                        key={item.id}
                        role={undefined}
                        dense
                        button
                        onClick={handleToggle(item.id)}
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(item.id) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": item.id }}
                          />
                        </ListItemIcon>
                        <ListItemText id={item.id} primary={item.value} />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            onClick={() => setEdit({ id: item.id, value: item.value })}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => setItems(items.filter((item) => item.id !== item.id))}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </List>
  );
}

function ItemEdit(props) {
  const [value, setValue] = useState(props.edit.value);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: props.edit.id,
      value: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Edit Item"
        value={value}
        onChange={onChange}
        margin="normal"
        fullWidth
      />
      <Button type="submit">Update</Button>
    </form>
  );
}

function onDragEnd(result) {
  if (!result.destination) return;
  const items = Array.from(this.state.items);
  const [reorderedItem] = items.splice(result.source.index, 1);
  items.splice(result.destination.index, 0, reorderedItem);
  this.setState({
    items,
  });
}

// Path: myplanwise-website/src/Components/ToDoList.js

// this component is a reminder checklist for the user to write list of notes to remind them of things they need to do for their monthly budget, such as paying bills, paying rent, etc.