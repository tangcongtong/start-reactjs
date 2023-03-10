import PropTypes from "prop-types";
import React from "react";
import Album from "../Album";
import "./styles.scss";
AlbumList.propTypes = {
  albumList: PropTypes.array,
};
AlbumList.defaultPros = {
  albumList: [],
};
function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((album) => (
        <li key={album.id}>
          <Album album={album}></Album>
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
