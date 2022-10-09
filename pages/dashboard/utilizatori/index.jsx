import axios from "axios";
import React, { Fragment } from "react";
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
  if (error) {
    return "No data...";
  }
  return (
    <div id="pagina Utilizatori" className="container">
      <table className="w-full text-sm text-left   relative">
        <thead className=" sticky top-0  uppercase  w-full ">
          <tr className="">
            <th className="  px-6 py-3 text-red-900 border">index</th>
            <th className="  px-6 py-3 text-red-900  border">email</th>
            <th className=" px-6 py-3 text-red-900 border">nume</th>
            <th className="  px-6 py-3 text-red-900  border"> Admin</th>
            <th className="  px-6 py-3 text-red-900  border"> Actiuni</th>
          </tr>
        </thead>

        <tbody className="">
          {data.map((utilizator, index) => {
            return (
              <Fragment key={utilizator._id}>
                <tr className="border-2  p-6">
                  <td className="py-4 px-6 border">#{index + 1}</td>
                  <td className="py-4 px-6 border">{utilizator.email}</td>
                  <td className="py-4 px-6 border">{utilizator.name}</td>

                  {utilizator.isAdmin === true ? (
                    <td className="py-4 w-16 px-6 border bg-green-500"> </td>
                  ) : (
                    <td className="py-4 w-16 px-6 border bg-red-500"> </td>
                  )}
                  <td className="py-4 px-6 border">
                    <button
                      onClick={async () => {
                        let idUtilizator = utilizator._id;
                        await axios.post(
                          "/api/dashboard/utilizatori/sterge-utilizator",
                          {
                            idUtilizator,
                          },
                        );
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>{" "}
    </div>
  );
};
PaginaUtilizatori.Auth = true;
PaginaUtilizatori.Admin = true;
export default PaginaUtilizatori;
