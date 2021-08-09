import React from "react";
import { db } from "../firebase";

class List extends React.Component {
  state = {
    parkir: null,
  };

  componentDidMount() {
    console.log("List");
    db.collection("parkir")
      .get()
      .then((snapshot) => {
        const parkir = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          parkir.push(data);
        });
        this.setState({ parkir: parkir });
        console.log(snapshot);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Data Parkir</h1>
        {this.state.parkir &&
          this.state.parkir.map((parkir, idx) => {
            return (
              <>
                <table className="table-list" border="1" cellPadding="10px">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>
                        Plat
                        <br />
                        Nomor
                      </th>
                      <th>Jenis</th>
                      <th>In</th>
                      <th>Out</th>
                      <th>Tarif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key={parkir.id}>
                      <td>{idx + 1}</td>
                      <td>{parkir.nomorPlat}</td>
                      <td>{parkir.Jenis}</td>
                      <td>{parkir.in}</td>
                      <td>{parkir.out}</td>
                      <td>Rp. {parkir.tarif}</td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
              </>
            );
          })}
      </div>
    );
  }
}

export default List;
