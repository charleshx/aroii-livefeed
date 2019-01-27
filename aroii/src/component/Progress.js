import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: "#00695c"
  }
});

function CustomizedProgress(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} size={30} thickness={5} />
    </div>
  );
}

CustomizedProgress.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedProgress);
