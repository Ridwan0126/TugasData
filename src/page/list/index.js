import React from "react";
// import "./App.css";
//Calling Bootstrap 4.5 css
import "bootstrap/dist/css/bootstrap.min.css";
//Calling Firebase config setting to call the data
import firebase from "../../firebase";
class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = { parkir: [] };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("parkir")
      .on("value", (snapshot) => {
        let parkir = [];
        snapshot.forEach((snap) => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          parkir.push(snap.val());
        });
        this.setState({ parkir: parkir });
      });
  }

  render() {
    return (
      <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
          <h3>How to show firebase data in reactjs?</h3>
        </div>

        <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
              <tr>
                <th>FirstName</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {this.state.parkir.map((data) => {
                return (
                  <tr>
                    <td>{data.nomorPlat}</td>
                    <td>{data.in}</td>
                    <td>{data.out}</td>
                    <td>{data.tarif}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default List;
