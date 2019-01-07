import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import { withStyles, css } from "withStyles";
import {
  arrayMove,
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";

import crossIcon from "common/assets/cross-icon.svg";
import DragHandle from "common/components/DragHandle";

import BaseInput from "./BaseInput";

const SortableDragHandle = SortableHandle(DragHandle);

class QuestionsInput extends Component {
  state = {
    inputValue: "",
    items: [],
    hoveringListItem: null,
  };

  static defaultProps = {
    placeholder: "Write your question here.",
  };

  handleKeyPress = e => {
    if (e.key === "Enter" && this.state.inputValue.length > 0) {
      const newItems = [...this.state.items, this.state.inputValue];
      this.setState({
        items: newItems,
        inputValue: "",
      });
      this.props.input.onChange(newItems);
      e.preventDefault();
    }
  };

  handleListItemMouseEntered = i => {
    this.setState({
      hoveringListItem: i,
    });
  };

  handleListItemMouseLeft = () => {
    this.setState({
      hoveringListItem: null,
    });
  };

  handleInputChange = ({ target: { value: inputValue } }) => {
    this.setState({
      inputValue,
    });
  };

  handleSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = arrayMove(this.state.items, oldIndex, newIndex);
    this.setState({
      items: newItems,
    });
    this.props.input.onChange(newItems);
  };

  handleDeleted = i => {
    const newItems = this.state.items.filter((_, ii) => ii !== i);
    this.setState({
      items: newItems,
    });
    this.props.input.onChange(newItems);
  };

  Element = SortableElement(({ item, styles, actualIndex }) => {
    return (
      <div
        {...css(styles.listItem)}
        onMouseEnter={() => this.handleListItemMouseEntered(actualIndex)}
        onMouseLeave={() => this.handleListItemMouseLeft()}
      >
        <SortableDragHandle
          visible={this.state.hoveringListItem === actualIndex}
        />
        <div style={{ flex: 1 }}>{item}</div>
        <img
          src={crossIcon}
          alt=""
          {...css(styles.deleteItemIcon)}
          style={{
            opacity: this.state.hoveringListItem === actualIndex ? 1 : 0,
          }}
          onClick={() => this.handleDeleted(actualIndex)}
        />
      </div>
    );
  });

  Container = SortableContainer(({ items }) => {
    const { Element } = this;
    return (
      <div>
        {items.map((item, i) => (
          <Element
            actualIndex={i}
            item={item}
            index={i}
            key={i}
            styles={this.props.styles}
          />
        ))}
      </div>
    );
  });

  render() {
    const { styles, placeholder } = this.props;
    const { Container } = this;
    return (
      <BaseInput {...this.props}>
        <Container
          items={this.state.items}
          onSortEnd={this.handleSortEnd}
          useDragHandle
          lockAxis="y"
        />
        <div {...css(styles.inputContainer)}>
          <Textarea
            rows="1"
            type="text"
            placeholder={placeholder}
            onKeyPress={this.handleKeyPress}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            inputRef={r => (this.inputRef = r)}
            {...css(styles.input)}
          />
        </div>
      </BaseInput>
    );
  }
}

const styled = withStyles(({ color, unit }) => ({
  input: {
    backgroundColor: "rgba(233, 233, 233, 0.56)",
    width: "100%",
    maxWidth: 500,
    minHeight: 17,
    padding: "10px 15px",
    border: "none",
    fontSize: unit.getRem(13),
    resize: "none",
    "-webkit-appearance": "none",
    ":focus": {
      outline: 0,
    },
    "@media (max-width: 575px)": {
      maxWidth: "calc(100% - 30px)",
    },
  },
  listItem: {
    marginBottom: 15,
    fontSize: unit.getRem(13),
    color: color.black,
    padding: "10px 0px",
    paddingLeft: 13,
    paddingRight: 17,
    display: "flex",
    alignItems: "center",
    width: "100%",
    wordBreak: "break-word",
    ":hover": {
      backgroundColor: "rgba(233, 233, 233, 0.56)",
    },
    ":first-child": {
      marginTop: 15,
    },
    ":last-child": {
      marginBottom: 15,
    },
  },
  inputContainer: {
    position: "relative",
  },
  deleteItemIcon: {
    cursor: "pointer",
  },
}));

export default styled(QuestionsInput);
