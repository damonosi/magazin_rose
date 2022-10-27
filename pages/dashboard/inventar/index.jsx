import React from "react";
import useSWR from "swr";
import Spinner from "../../../components/spinner/Spinner";
import Image from "next/image";



const PaginaInventar = () => {
  const { data, error } = useSWR("/api/dashboard/produse/toate-produsele");
  if (!data)
    return <Spinner />;
  if (error) return "no data....";
  return (
    <div className=" pt-10 grid h-auto  gap-24 grid-cols-2">
      {data.map((produs) => (
        <div className="flex flex-col justify-center " key={produs._id}>
          {" "}
          <div className="block relative w-full h-72">
            <Image
              alt="imagine produs"
              src={produs.image}
              layout="fill"
            ></Image>
          </div>
          <span>{produs.name}</span>
          <span>Rating : {produs.rating}</span>
          <span>Numar review : {produs.numReviews}</span>
          <span>Pe stoc : {produs.countInStock}</span>
        </div>
      ))}
    </div>
  );
};
PaginaInventar.Auth = true;
PaginaInventar.Admin = true;
export default PaginaInventar;
