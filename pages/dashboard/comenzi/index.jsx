import React, { Fragment } from "react";
import useSWR from "swr";
import Spinner from "../../../components/spinner/Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const PaginaComenzi = () => {
  const { data, error } = useSWR("/api/orders/toate-comenzile", fetcher);
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error) return "no data....";
  const getDate = (data) => {
    const dataDeTransformat = new Date(data);
    const zi = dataDeTransformat.getDate();
    const luna = dataDeTransformat.getMonth();
    const an = dataDeTransformat.getFullYear();
    const dataTransformata = zi + "/" + luna + "/" + an;

    return dataTransformata;
  };
  return (
    <div id="pagina-comenzi" className="flex flex-col h-screen w-full">
      <div className="flex-grow overflow-x-scroll ">
        <table className="w-full text-sm text-left   relative">
          <thead className=" sticky top-0  uppercase  w-full ">
            <tr className="bg-gray-50">
              <th className="  px-6 py-3 text-red-900 border ">Index</th>
              <th className=" px-6 py-3 text-red-900 ">Metoda Plata</th>
              <th className="  px-6 py-3 text-red-900  ">Produse</th>
              <th className="  px-6 py-3 text-red-900 ">Nume</th>
              <th className="  px-6 py-3 text-red-900 ">Adresa</th>
              <th className="  px-6 py-3 text-red-900 ">Oras</th>
              <th className="  px-6 py-3 text-red-900 ">Cod Postal</th>
              <th className="  px-6 py-3 text-red-900 ">Tara</th>
              <th className="  px-6 py-3 text-red-900 ">Cost Transport</th>
              <th className="  px-6 py-3 text-red-900 ">Data</th>
              <th className="border-l  px-6 py-3 text-red-900 ">Total</th>
              <th className="border-l  px-6 py-3 text-red-900 ">Actiuni</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((comanda, index) => (
              <Fragment key={comanda._id}>
                <tr className="border-2  p-6">
                  <td className="py-4 px-6 border">#{index + 1}</td>

                  <td className="py-4 px-6 border">{comanda.paymentMethod}</td>
                  <td className="py-4 flex flex-col px-6 gap-2 border">
                    {comanda.orderItems.map((produs) => (
                      <div
                        key={produs._id}
                        className="flex flex-row justify-between pl-2 pr-4 gap-2 border-2 py-1"
                      >
                        <p>{produs.name}</p>
                        <p>{produs.quantity}</p>
                      </div>
                    ))}
                  </td>
                  <td className="py-4 px-6 border">
                    <p>{comanda.shippingAddress.fullName}</p>
                  </td>
                  <td className="py-4 px-6 border">
                    <p>{comanda.shippingAddress.address}</p>
                  </td>
                  <td className="py-4 px-6 border">
                    <p>{comanda.shippingAddress.city}</p>
                  </td>
                  <td className="py-4 px-6 border">
                    <p>{comanda.shippingAddress.postalCode}</p>
                  </td>
                  <td className="py-4 px-6 border">
                    <p>{comanda.shippingAddress.country}</p>
                  </td>
                  <td className="py-4 px-6 border">{comanda.shippingPrice}</td>
                  <td className="py-4 px-6 border">
                    {getDate(comanda.createdAt)}
                  </td>
                  <td className="py-4 px-6 border">{comanda.totalPrice}</td>
                  <td className="py-4 px-6 border">confirma</td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

PaginaComenzi.Auth = true;
PaginaComenzi.Admin = true;
export default PaginaComenzi;
