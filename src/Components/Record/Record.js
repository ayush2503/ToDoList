import React, { useState } from 'react';
import css from './record.module.css'

function Record(props) {
  const data=JSON.parse(localStorage.getItem('data'))
  const render= data ? data :props.data
  return  <div className={css.rec}>
  <p>{render.length}Tasks</p>
  <p> {render.length-props.complete}remains</p>
</div>;
}

export default Record;
