import React from "react";
import MaterialUICard from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import "./animation.css";

const styles = (theme) => ({
  root: {
    margin: theme.spacing(1),
    willChange: "transform" //浏览器会把该元素提取到单独图层
  },
  card: {
    width: 300
  },
  cardSpinning: {
    width: 300,
    animation: "3s linear 1s infinite running rotate"
  },
  media: {
    height: 200,
    width: 300,
    objectFit: "cover"
  }
});

class MyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: false
    };
    this.spin = this.spin.bind(this);
  }
  spin() {
    // this.setState({ spinning: true });
  }

  render() {
    /*根据Spinning进行判断决定是否旋转*/
    let cardClass = this.state.spinning
      ? this.props.classes.cardSpinning
      : this.props.classes.card;

    return (
      <div className={this.props.classes.root}>
        {/*添加点击事件，触发动画*/}
        <MaterialUICard className={cardClass} onClick={this.spin}>
          <CardMedia
            component="img"
            className={this.props.media}
            image={this.props.image}
            title={this.props.title}
            height="200"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">{this.props.description}</Typography>
          </CardContent>
          <CardActions className={this.props.classes.actions}>
            <Button size="small" color="primary" variant="outlined">
              联系方式：🐟🐡🐭🦆 Dereck
            </Button>
          </CardActions>
        </MaterialUICard>
      </div>
    );
  }
}

export default withStyles(styles)(MyCard);
