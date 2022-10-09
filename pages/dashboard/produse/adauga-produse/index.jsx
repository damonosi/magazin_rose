import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-toastify";
import { getError } from "../../../../utils/error";
import Select from "react-select";

const PaginaProduse = () => {
  const { handleSubmit, register, reset, control } = useForm();
  const submitHandler = async ({
    name,
    slug,
    category,
    image,
    price,
    cantitate,

    countInStock,
    description,
  }) => {
    try {
      await axios.post("/api/dashboard/produse/adauga-produs", {
        name,
        slug,
        category,
        image,
        price,
        cantitate,
        countInStock,
        description,
      });
      toast.success("Ai adaugat un produs nou");
    } catch (err) {
      console.log(getError(err));
    }
    reset();
  };

  const options = [
    { value: "produse apicole", label: "produse apicole" },
    { value: "produse trandafiri", label: "produse trandafiri" },
  ];

  return (
    <div className="text-center">
      <h1>Adauga Produs Nou</h1>{" "}
      <form
        className="mx-auto max-w-screen-md p-16 flex flex-col items-center gap-6 bg-roz text-left"
        onSubmit={handleSubmit(submitHandler)}
      >
        <ul className="grid grid-cols-2 gap-20">
          <li className="flex flex-col">
            <input
              {...register("name")}
              type="text"
              placeholder="denumire produs"
            />
          </li>

          <li className="flex flex-col">
            <input
              {...register("slug")}
              type="text"
              placeholder="denumire slug"
            />
          </li>

          <li className="flex flex-col">
            <Controller
              control={control}
              name={"category"}
              render={({ field: { onChange, value } }) => (
                <Select
                  value={options.find((c) => c.value === value)}
                  onChange={(val) => {
                    onChange(val.value);
                  }}
                  options={options}
                  placeholder={<div>categorie</div>}
                />
              )}
            />
          </li>

          <li className="flex flex-col">
            <input
              {...register("image")}
              type="text"
              placeholder="cloudinary link"
            />
          </li>

          <li className="flex flex-col">
            <input {...register("price")} type="text" placeholder="pret" />
          </li>

          <li className="flex flex-col">
            <input
              {...register("cantitate")}
              type="text"
              placeholder="cantitate"
            />
          </li>

          <li className="flex flex-col">
            <input
              {...register("countInStock")}
              type="text"
              placeholder="nr pe stoc"
            />
          </li>

          <li className="flex flex-col">
            <input
              {...register("description")}
              type="text"
              placeholder="descriere produs"
            />
          </li>
        </ul>
        <button className="bg-white max-w-xs p-6 py-1 rounded">adauga</button>
      </form>
    </div>
  );
};
PaginaProduse.Auth = true;
PaginaProduse.Admin = true;
export default PaginaProduse;
