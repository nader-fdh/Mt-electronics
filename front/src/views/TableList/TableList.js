import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDevis, postDevis } from "../../actions/devisActions";

// core components
import "./style.css";

export default function TableList() {
  const devis = useSelector((state) => state.devis.devis);
  console.log(devis);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDevis());
  }, []);
  return (
    <div style={{ justifyContent: "center" }}>
      {devis
        ? devis.map((el) => (
            <div class="card">
              <div class="image"></div>
              <div class="content">
                <h2 class="movie-title">Devis</h2>

                <div class="features">
                  <p class="info">
                    Company:
                    <span>{el.company}</span>
                  </p>
                  <p class="info">
                    Full name:
                    <span>
                      {el.fname}___{el.lname}
                    </span>
                  </p>
                  <p class="info">
                    E-mail:
                    <span>{el.email}</span>
                  </p>
                  <p class="info">
                    Phone number:
                    <span>{el.phone}</span>
                  </p>
                </div>

                <div class="synopsis">{el.description}</div>
              </div>
              <div class="card__logo">
                {el.file.map((img) => (
                  <img class="logo" src={img} alt="logo godfather" />
                ))}
              </div>
            </div>
          ))
        : true}
    </div>
  );
}
