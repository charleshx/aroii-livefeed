import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuPic from "./MenuPic";
import FbImageGrid from "react-fb-image-grid";
import classNames from "classnames";
import Progress from "./Progress";
import CardActionArea from "@material-ui/core/CardActionArea";
import "./custom.css";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  pinkColor = pink[200];
  state = {
    expanded: false,
    test: this.props,
    likeColor: "",
    startTime: "",
    endTime: ""
  };

  handleExpandClick = () => {
    this.setState(state => ({
      expanded: !state.expanded,
      startTime: new Date()
    }));
    console.log(this.state);
  };

  handleLike() {
    this.setState({ likeColor: "secondary" });
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { classes } = this.props;
    const imgList = [
      "http://localhost:3000/image/grid/test.png",
      "http://localhost:3000/image/grid/test2.png",
      "http://localhost:3000/image/grid/test3.png",
      "http://localhost:3000/image/grid/test4.png"
    ];
    return (
      <div>
        {/* <Progress /> */}
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar aria-label="Recipe" src="image/profile.jpg" />}
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="CoCoICHIBANYA"
            subheader=" 64 m, @Siam Paragon, also at MBK 7th floor"
          />
          {/* <a href="#" onClick={() => this.handleClick()}> */}
          {/* <button onClick={() => this.props.OnHandleHide()}> */}
          <CardActionArea>
            <CardContent
              onClick={() => this.props.OnHandleHide(["test_data", new Date()])}
            >
              <Typography component="p">
                ข้าวแกงกะหรี่ญี่ปุ่นรสเลิศ น้ำแกงกะหรี่ข้น กลมกล่อม
                ด้วยสูตรลับพิเศษจากญี่ปุ่น ข้าวหอมนุ่ม
                <font color="#0058dd">Read more...</font>
              </Typography>
              <FbImageGrid
                images={imgList}
                height={80}
                countFrom={3}
                hideOverlay={true}
              />
              <img src="image/footer.jpg" width="100%" height="100%" />
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon
                color={this.state.likeColor}
                onClick={() => this.handleLike()}
              />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Card>
        <br />
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
