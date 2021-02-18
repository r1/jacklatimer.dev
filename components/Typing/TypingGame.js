import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const TypingGameContainer = styled.div`
  font-size: 24px;
`;

const GameText = styled.div`
  line-height: 1.5;
  & .present {
    color: ${(props) => (props.ok ? "#4a3" : "#f00")};
    background: ${(props) => (props.ok ? "transparent" : "transparent")};
    text-decoration: underline;
  }
`;

const InputArea = styled.div`
  margin-top: 1em;
  & label {
    color: #888;
    font-size: 18px;
  }
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  font-size: 15px;
  border: 2px solid #9e9e9e;
  transition: border 0.2s linear;
  outline: none;
  padding: 10px;
  background: ${(props) => (props.ok ? "white" : "#000")};
  color: ${(props) => (props.ok ? "#333" : "#f00")};
`;

export default class TypingGame extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onProgress: PropTypes.func,
    onType: PropTypes.func,
  };
  state = { charactersCommitted: 0, inputText: "" };
  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      throw new Error(
        "Error! This component does not support receiving new text. Please unmount this component and mount a new component (using `key={text}`)"
      );
    }
  }
  onChange = (e) => {
    const { onProgress, onType, text } = this.props;
    if (onType) {
      onType();
    }

    const { charactersCommitted } = this.state;
    const nextInputText = e.target.value;
    if (
      nextInputText === text.substr(charactersCommitted) ||
      (nextInputText.endsWith(" ") &&
        text.substr(charactersCommitted, nextInputText.length) ===
          nextInputText)
    ) {
      const nextCharactersCommitted =
        charactersCommitted + nextInputText.length;
      this.setState({
        inputText: "",
        charactersCommitted: nextCharactersCommitted,
      });
      if (onProgress) {
        onProgress(nextCharactersCommitted, text.length);
      }
    } else {
      this.setState({ inputText: nextInputText.replace(/^\s+/, "") });
    }
  };

  render() {
    const { text } = this.props;
    const { charactersCommitted, inputText } = this.state;
    const ok = text.substr(charactersCommitted).startsWith(inputText);
    const past = text.substr(0, charactersCommitted);
    const present = (text.substr(charactersCommitted).match(/^\S+/) || [""])[0];
    const future = text.substr(charactersCommitted + present.length);
    const done = charactersCommitted === text.length;

    function refreshPage() {
      window.location.reload();
    }
    return (
      <TypingGameContainer>
        <button
          className="float-right px-2 py-1 text-sm text-black border border-gray-500 rounded-lg dark:text-gray-500"
          onClick={refreshPage}
        >
          Next Challenge
        </button>
        <br></br>
        <GameText ok={ok} className="GameText">
          <span className="past">{past}</span>
          <span className="present">{present}</span>
          <span className="future ">{future}</span>
        </GameText>
        <InputArea>
          <label htmlFor="text">Type the text:</label>
          <Input
            className="text-white bg-gray-700 rounded-md focus:outline-none dark:bg-gray-900 dark:text-white"
            ok={ok}
            id="text"
            autoFocus
            onChange={this.onChange}
            value={inputText}
            disabled={done}
          />
        </InputArea>
      </TypingGameContainer>
    );
  }
}
