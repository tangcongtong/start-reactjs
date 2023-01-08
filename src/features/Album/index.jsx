import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";
import "./styles.scss";
AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const list = [
    {
      id: 1,
      name: "Nhạc abc",
      url: "	https://photo-zmp3.zmdcdn.me/banner/4/d/1/7/4d179650bad82f76ac45b9c74c0517cb.jpg",
    },
    {
      id: 2,
      name: "sbkjd",
      url: "https://photo-zmp3.zmdcdn.me/banner/9/0/5/6/9056aa6b2ac3e006bba718ed9dc57257.jpg",
    },
  ];

  return <div>
    <h2>Nhạc</h2>
    <AlbumList albumList={list}></AlbumList>
  </div>;
}

export default AlbumFeature;
