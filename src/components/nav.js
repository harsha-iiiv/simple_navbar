import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import Container from "react-bootstrap/Container";
import Table from "./table";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.veriFied = this.veriFied.bind(this);
    this.unVeriFied = this.unVeriFied.bind(this);
    this.state = {
      query: "",
      filteredData: [],
      city: " ",
      data: [
        {
          name: "Frozen yoghurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protien: 4.0
        },

        { name: "Milk", calories: 59, fat: 5.0, carbs: 4, protien: 40.0 },

        { name: "Curd", calories: 19, fat: 7.0, carbs: 84, protien: 41.0 }
      ],
      verified: false,
      unverified: false

    };
  }
  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  veriFied(){
     this.setState({
       verified: !this.state.verified
     });}
  unVeriFied(){
     this.setState({
       unVeriFied: !this.state.unVeriFied
     });

  };
  render() {
    return (
      <div>
        <Container className="navbar">
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <h3>Partners managemet</h3>
            </Grid>
            <Grid item xs={4}>
              <form className="fixsize">
                <input
                  placeholder="Search for..."
                  value={this.state.query}
                  onChange={this.handleInputChange}
                />
              </form>
            </Grid>
            <Grid item xs>
              <FormControl>
                <Select
                  native
                  value={this.state.city}
                  input={
                    <OutlinedInput
                      name="city"
                      id="outlined-age-native-simple"
                    />
                  }
                  className="fixsize"
                >
                  <option value={"Ahemdabad"}>Ahemdabad</option>
                  <option value={"Vizag"}>Vizag</option>
                  <option value={"Delhi"}>Delhi</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl>
                <Select
                  native
                  value={this.state.city}
                  input={
                    <OutlinedInput
                      name="city"
                      id="outlined-age-native-simple"
                    />
                  }
                  className="fixsize"
                >
                  <option value={"Approved"}>Approved</option>
                  <option value={"notapproved"}>Not Approved</option>
                </Select>
              </FormControl>{" "}
            </Grid>
            <Grid item xs>
              <Button className="fixsize" variant="contained" onClick={this.veriFied}>
                {" "}
                Verified
              </Button>
            </Grid>
            <Grid item xs>
              <Button className="fixsize" variant="contained" onClick={this.unVeriFied}>
                {" "}
                Unverified
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Table
          data={this.state.data}
          filter={this.state.filteredData}
          que={this.state.query}
          verify = {this.state.verified}
          unverify = {this.state.unverified}
        />
      </div>
    );
  }
}

export default Nav;
