import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Table from './Table';
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  state = {
    data: [
      {
        firstName: "joe",
        lastName: "james",
        age: 18,
        status: "real",
        visits: 14
      },
      {
        firstName: "tom",
        lastName: "smith",
        age: 15,
        status: "okay",
        visits: 24
      },
      {
        firstName: "tom",
        lastName: "smith",
        age: 15,
        status: "okay",
        visits: 24
      },
      {
        firstName: "tom",
        lastName: "smith",
        age: 15,
        status: "okay",
        visits: 24
      },
      {
        firstName: "tom",
        lastName: "smith",
        age: 15,
        status: "okay",
        visits: 24
      }
    ]
  };
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <ReactTable
          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
              minWidth: 300
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              minWidth: 300
            },
            {
              Header: "Age",
              accessor: "age",
              minWidth: 300
            },
            {
              Header: "Status",
              accessor: "status",
              minWidth: 300
            },
            {
              Header: "Visits",
              accessor: "visits",
              minWidth: 300
            }
          ]}
          defaultPageSize={10}
          showPagination={false}
          style={{
            height: "200px"
          }}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default App;
