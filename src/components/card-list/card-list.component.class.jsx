import { Component } from "react";

import Card from "../card/card.component.jsx";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props);
    const time = new Date().getMilliseconds();
    console.log(`CardList - ${time}`);
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
