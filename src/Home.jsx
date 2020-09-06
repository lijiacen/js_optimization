import React, { Suspense, lazy } from "react";
import { withStyles } from "@material-ui/core/styles";
import model from "./model.js";
const Card = lazy(() => import("./Card.jsx")); //动态引入
// import Card from "./Card.jsx";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    marginTop: "2rem"
  }
});

class Home extends React.Component {
  render() {
    let cards = [];
    for (let index = 0; index < 100; index++) {
      cards.push(
        model.map((panel) => (
          <Suspense fallback={<div>loading</div>}>
            <Card
              key={panel.name}
              image={panel.image + "?random=" + Math.random() * 10000000}
              title={panel.name}
              route={panel.route}
              description={panel.body}
            />
          </Suspense>
        ))
      );
    }
    return <main className={this.props.classes.root}>{cards}</main>;
  }
}

export default withStyles(styles)(Home);
