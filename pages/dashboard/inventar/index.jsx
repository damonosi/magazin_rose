import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PaginaInventar = () => {
  const { data, error } = useSWR("/api/dashboard/produse/acceptate", fetcher);
  return <div>PaginaInventar</div>;
};
PaginaInventar.Auth = true;
PaginaInventar.Admin = true;
export default PaginaInventar;
