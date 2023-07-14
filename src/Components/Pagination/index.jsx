import React from "react";
import { Link } from "react-router-dom";
import "./pagination.css";

const Pagination = () => {
  return (
    <ul className="pagination flex">
      <li>
        <Link>&lt;</Link>
      </li>
      <li>
        <Link>1</Link>
      </li>
      <li>
        <Link>2</Link>
      </li>
      <li>
        <Link>3</Link>
      </li>
      <li>
        <Link>...</Link>
      </li>
      <li>
        <Link>7</Link>
      </li>
      <li>
        <Link>&gt;</Link>
      </li>
    </ul>
  );
};

export default Pagination;
