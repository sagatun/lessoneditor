import React from "react";
import { Link, Redirect } from "react-router-dom";

const TITLE_ERROR = "Må skrive inn tittel";
const AUTHOR_ERROR = "Må skrive inn forfatter";

const PageButtons = props => {
  if (props.state.redirect) {
    return <Redirect to={props.state.redirect} />;
  }

  const validate = () => {
    let titleErr = "";
    let authorErr = "";

    if (!props.state.title) {
      titleErr = TITLE_ERROR;
    }
    if (!props.state.author) {
      authorErr = AUTHOR_ERROR;
    }

    if (titleErr && props.err === "title") {
      props.setErr(titleErr, "");
      return false;
    }
    if (authorErr && props.err === "author") {
      props.setErr("", authorErr);
      return false;
    }

    return true;
  };

  const onClickHandler = (input, event) => {
    let notErr = validate();

    if (notErr && props.state.pageNumber === 3) {
      props.submitHandler(event);
      return;
    }
    if (notErr || input < 1) {
      props.setPageNumber(props.state.pageNumber + input);
    } else {
      return;
    }
  };

  return (
    <div>
      {props.state.pageNumber === 1 || props.state.test === "test" ? (
        <Link to={props.prevValue}>
          <button className="" type="button" onClick={() => onClickHandler(-1)}>
            <i aria-hidden="true" className="" />
            {props.prevTitle}
          </button>
        </Link>
      ) : (
        <button className="" type="button" onClick={() => onClickHandler(-1)}>
          <i aria-hidden="true" className="" />
          {props.prevTitle}
        </button>
      )}

      <button
        className=""
        type="button"
        onClick={event => onClickHandler(1, event)}
      >
        <i aria-hidden="true" className="" />
        {props.nextTitle}
      </button>
    </div>
  );
};

export default PageButtons;
