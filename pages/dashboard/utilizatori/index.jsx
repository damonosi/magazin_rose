import React from "react";
import useSWR from "swr";
import Spinner from "./../../../components/spinner/Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PaginaUtilizatori = () => {
  const { data, error } = useSWR("/api/dashboard/utilizatori", fetcher);
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  return (
    <div id="pagina Utilizatori" className="container grid grid-cols-2">
      {data.map((utilizator, index) => {
        return (
          <div key={utilizator._id}>
            <p>{index}</p>
            <h1>Email {utilizator.email}</h1>
            <h1>Nume {utilizator.name}</h1>
            <h1>
              {utilizator.isAdmin === true ? "Este Admin" : "Nu Este Admin"}
            </h1>
          </div>
        );
      })}
    </div>
  );
};
PaginaUtilizatori.Auth = true;
PaginaUtilizatori.Admin = true;
export default PaginaUtilizatori;
