import React, { Component } from 'react'
import "./App.css";
 class App extends Component {
  state = {
    fullName: "Dale Carnegie",
    profession: "Writer, lecturer",
    bio: "American writer and lecturer, and the developer of courses in self-improvement, salesmanship, corporate training, public speaking, and interpersonal skills",
    image: "https://th.bing.com/th/id/R.dfdf87e181997a6e6dd0e8f88e40a016?rik=NZ53M2B7IuZGUw&riu=http%3a%2f%2fbaybusinesshelp.com%2fwp-content%2fuploads%2f2015%2f05%2fDale-Carnegie-GQ-12May14_rex_b.jpg&ehk=CLzFqANWWGGgrOX54i1RdRe2%2fAThDhv70LUmG2iTR9k%3d&risl=&pid=ImgRaw&r=0",
    show: true,
    cnt: 0,
  };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((count) => ({
        cnt: count.cnt + 1,
      }));
    },1000);
  }
  render() {
    return (
      <div className="App">
        <div className="box">
          {this.state.show && (
            <div className="inf">
              <div className="pos profImg">
                <img src={this.state.image} alt="" />
              </div>
              <section className="pos">
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p>{this.state.bio}</p>
                <div className="count">
                  Count: {this.state.cnt}  sec
                </div>
              </section>
            </div>
          )}
          <button type="button" className="btn" onClick={()=> this.handleClick()}>
            Show Me
          </button>
        </div>
        </div>
    )
  }
}




export default App;
