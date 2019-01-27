import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import CallIcon from "@material-ui/icons/Call";
import DoneIcon from "@material-ui/icons/Done";
import Star from "@material-ui/icons/Star";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};
// const colorT = red[800];
const accent = red[500];

function MediaCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <IconButton
        aria-label="Delete"
        className={classes.margin}
        onClick={() => props.OnHandleBack(["Coco", new Date()])}
      >
        <ArrowBack fontSize="small" />
      </IconButton>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="image/selectedPic.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Coco Ichibanya{" "}
          </Typography>
          <Typography component="p">
            {" "}
            ข้าวแกงกะหรี่ญี่ปุ่นรสเลิศที่มีชื่อเสียงมายาวนานกว่า 36 ปี
            โดดเด่นด้านอาหารประเภทแกงกระหรี่ญี่ปุ่น
            ที่มีความหลากหลายในรูปแบบการนำเสนออันสร้างสรรค์และเป็นเอกลักษณ์
            ผนวกกับการคัดสรรวัตถุดิบที่มี คุณภาพ
            ทำให้ได้รสชาติแกงกระหรี่ที่หอมอร่อย ด้วยสูตรลับพิเศษจากญี่ปุ่น
            เมนูแนะนำ: ข้าวแกงกะหรี่่หน้าไข่ ทงคัตสึ่ ราคาต่อหัวต่อมื้อ: 159 -
            339 บาท
          </Typography>
        </CardContent>
      </CardActionArea>
      <br />
      <div>
        <Star color="primary" />
        <Star color="primary" />
        <Star color="primary" />
        <Star color="primary" />
        <p>4.5 จาก 5 จากผู้ช้ 254 คน</p>{" "}
      </div>
      <br />
      <Chip
        color={accent}
        avatar={
          <Avatar>
            <CallIcon />
          </Avatar>
        }
        label="02-636-1050"
      />
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
