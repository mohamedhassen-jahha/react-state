import React, { Component } from "react";

let Style = {
  fontFamily: "Roboto",
  fontSize: "50px",
  textTransform: "uppercase",
  color: "cadetblue",
};

let bioTag = {
  fontFamily: "Roboto",
  fontSize: "18px",
  color: "rgb(226, 140, 60)",
  width: "70%",
  margin: "10px auto",
};
let prof = {
  width: "40%",
  fontFamily: "Roboto",
  fontSize: "15px",
  color: "rgb(87, 85, 85)",
  margin: "10px auto",
};
let pictureStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  marginTop: "20px",
};

export default class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      fullName: "Mohamed Hassen JAHHA",
      bio: "Hi 👋 So glad to have you around !! I'm a FULLSTACK JS student (MERN STACK) 😉 I love writing code and making things messy sometimes !! its just fun 🤷‍",
      imgSrc:
        "https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-1/s320x320/106402252_3060113080731153_5386606509973918673_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Vqzu4SQSdmYAX-PFVEP&_nc_ht=scontent.ftun16-1.fna&oh=a67369ec50c8780f3a235ee74508ba3a&oe=6198A76C",
      profession: "FULL STACK JS STUDENT",
      Time: 0,
      Shows: true,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ Time: this.state.Time + 1 });
    }, 1000);
  }
  Showing = () => {
    this.setState({ Shows: !this.state.Shows });
  };

  render() {
    return (
      <div>
        <img style={pictureStyle} src={this.state.imgSrc} alt="Img" />
        <h1 style={Style}>{this.state.fullName}</h1>
        <h2 style={bioTag}>{this.state.bio}</h2>
        <p style={prof}>{this.state.profession}</p>
        <br />
        <h2
          style={prof}
        >{`This component was last mounted ${this.state.Time}s ago`}</h2>
      </div>
    );
  }
}
