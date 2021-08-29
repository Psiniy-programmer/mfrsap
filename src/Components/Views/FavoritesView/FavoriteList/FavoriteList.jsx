/* eslint-disable no-loop-func */
import React, { Component } from "react";
import { generateUniqKey } from "../../../../helpers/helpers";
import remove from "../img/remove.svg";
import remove_white from "../img/white_remove.svg";
import { connect } from "react-redux";
import { removeFromFavorite } from "../../../../actions/favoriteStorage";
import { Link } from "react-router-dom";
import {
  DARK_THEME,
  LIGHT_THEME,
  SYSTEM_THEME,
} from "../../../../reducers/theme";
import "./style.css";

class FavoriteList extends Component {
  findLink(item) {
    const { list } = this.props;
    let properties = {
      name: "",
      id: "",
    };
    let link;
    switch (item.type) {
      case "group":
        properties.name = "groupname";
        properties.id = "groupid";
        break;
      case "teacher":
        properties.name = "teacher";
        properties.id = "teacherid";
        break;
      case "aud":
        properties.name = "aud";
        properties.id = "audid";
        break;
      default:
        break;
    }
    link = `${properties.id}=`;

    if (item.type === "group") {
      for (let key in list) {
        for (let type in list[key]) {
          list[key][type].map((elem) => {
            return item.name === elem[properties.name]
              ? (link += elem[properties.id])
              : null;
          });
        }
      }
    } else {
      list.map((elem) => {
        return item.name === elem[properties.name]
          ? (link += elem[properties.id])
          : null;
      });
    }

    return link;
  }

  getIcon() {
    const { theme } = this.props;
    switch (theme) {
      case LIGHT_THEME:
        return remove_white;
      case DARK_THEME:
        return remove;
      case SYSTEM_THEME:
        return matchMedia("(prefers-color-scheme: dark)").matches
          ? remove
          : remove_white;
      default:
        break;
    }
  }

  createList() {
    const { data } = this.props;
    const list = [];

    data.map((item) => {
      let info = {
        type: localStorage.getItem(item),
        name: item,
      };

      let link = this.findLink(info);
      let temp = (
        <div
          key={generateUniqKey("favItem_", item)}
          className={"FavoriteList_item"}
        >
          <Link className={"fullWidth"} to={`/list/${link}`}>
            <p
              className={
                "FavoriteList_item__context text-medium--small raspTextColor"
              }
            >
              {item}
            </p>
          </Link>
          <button 
            className={"FavoriteList_item__context"}
            onClick={() => this.props.removeFromFavorites(info)}
            title="Удалить из избранного"
          >
            <img
              src={this.getIcon()}
              alt="remove"
            /> 
          </button>
        </div>
      );

      return list.push(temp);
    });
    return list;
  }

  render() {
    if (this.props.data.length !== 0) {
      return <div className={"FavoriteList"}>{this.createList()}</div>;
    } else return null;
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteStorage: state.favoriteStorage,
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (item) => {
      dispatch(removeFromFavorite(item));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
