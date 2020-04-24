import React from "react";
import FormPage from "./FormPage";
import axios from "axios";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "Micro:it",
      title: "",
      author: "",
      translator: "",
      language: "nb",
      level: 1,
      license: "",
      tags: { topic: [], subject: [], grade: [] }
    };
  }

  YMLstateToString = state => {
    return (
      "level: " +
      state.level +
      (state.license ? "\nlicense: " + state.license : "") +
      "\ntags:\n    topic: [" +
      state.tags.topic +
      "]\n    subject: [" +
      state.tags.subject +
      "]\n    grade: [" +
      state.tags.grade +
      "]"
    );
  };

  YAMLstateToString = state => {
    return (
      "---\ntitle: " +
      state.title +
      "\nauthor: " +
      state.author +
      (state.translator ? "\ntranslator: " + state.translator : "") +
      "\nlanguage: " +
      state.language +
      "\n---"
    );
  };

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  mySubmitHandler = event => {
    event.preventDefault();

    const lesson = {
      course: this.state.course,
      title: this.state.title,
      author: this.state.author,
      level: this.state.level,
      translator: this.state.translator,
      topic: this.state.topic,
      subject: this.state.subject,
      grade: this.state.grade,
      submitted: false
    };

    axios
      .post("http://localhost:5000/lessons/add", lesson)
      .then(res => console.log(res.data));

    console.log("YAML header: \n" + this.YAMLstateToString(this.state));
    console.log("\nYML-file: \n" + this.YMLstateToString(this.state));
  };

  myCheckboxHandler = event => {
    let name = event.target.name;
    let value = event.target.value;

    let i = this.state.tags;
    if (i[name].includes(value)) {
      i[name].splice(i[name].indexOf(value), 1);
    } else {
      i[name].push(value);
    }
    this.setState({ tags: i });
  };

  render() {
    return (
      <div className="FromComponent">
        <FormPage
          mySubmitHandler={this.mySubmitHandler}
          myChangeHandler={this.myChangeHandler}
          myCheckboxHandler={this.myCheckboxHandler}
          state={this.state}
        />
      </div>
    );
  }
}

export default FormComponent;
