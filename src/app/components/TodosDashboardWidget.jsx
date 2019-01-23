import React, { useReducer} from "react";
import styled, { css } from "styled-components";
import Checkbox from "../../common/components/form/Checkbox";
import { getColor } from "../../common/utils/themeHelpers";
import toaster from "../../common/components/Toaster";

const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

const initialState = {
  list: [
    {
      title: "Call with Jane",
      completed: true,
    },
    {
      title: "Lunch meeting",
      completed: false,
    },
    {
      title: "Read and respond to email",
      completed: false,
    },
    {
      title: "Launch new campaign",
      completed: false,
    },
    {
      title: "Interview with developer",
      completed: true,
    },
  ],
};

const todosReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_COMPLETED: {
      const list = state.list;
      list[action.index].completed = !list[action.index].completed;
      toaster.success("Todo has been updated", { id: "todo", duration: 2 });
      return Object.assign({}, state, { list });
    }
    default:
      return state;
  }
};


const TodosDashboardWidget = () => {
  const [state, dispatch] = useReducer(todosReducer, initialState);
  return (
    <List>
      {state.list.map((item, index) => (
        <ListItem key={`${item.title}-${index}`} done={item.completed}>
          <Status  color={item.completed ? "green" : "primary"} />
          <Checkbox
            onChange={() => dispatch({ type: TOGGLE_COMPLETED, index })}
            label={item.title}
            checked={item.completed}
          />
        </ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px -27px 0;
`;

const ListItem = styled.li`
  padding: 1rem 27px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${getColor("scales", "N4")};
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
  &:last-child {
    border: none;
  }
  &:first-child {
    border-top: 1px solid ${getColor("scales", "N4")};
  }
`;

const Status = styled.div`
  width: 4px;
  height: 55px;
  margin-right: 15px;
  background-color: ${props => getColor(props.color || "red", "base")};
  border-radius: 3px;
`;

export default TodosDashboardWidget;
