import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function SimpleTable(props) {
  const classes = useStyles();

  const rows = [
    createData(
      props.data[0].name,
      props.data[0].calories,
      props.data[0].fat,
      props.data[0].carbs,
      props.data[0].protien
    ),
    createData(
      props.data[1].name,
      props.data[1].calories,
      props.data[1].fat,
      props.data[1].carbs,
      props.data[1].protien
    ),
    createData(
      props.data[2].name,
      props.data[2].calories,
      props.data[2].fat,
      props.data[2].carbs,
      props.data[2].protien
    )
  ];

  var rowf = (
    <div>
      {" "}
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        {props.filter.map(i => (
          <TableRow>
            <TableCell>{i.name} </TableCell>
            <TableCell align="right">{i.calories}</TableCell>
            <TableCell align="right">{i.fat}</TableCell>
            <TableCell align="right">{i.carbs}</TableCell>
            <TableCell align="right">{i.protien}</TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
 

  var show = (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
  return (
    <Paper className={classes.root}>
    {props.verify ? <h1>Verified</h1> : props.que != "" ? rowf : show}    
     </Paper>
  );
}
