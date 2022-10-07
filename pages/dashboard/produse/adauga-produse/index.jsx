import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getError } from "../../../../utils/error";
const PaginaProduse = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
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
      toast.error(getError(err));
    }
    reset();
  };
  return (
    <div>
      {" "}
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <ul>
          <li>
            <input {...register("name")} type="text" />
            <span>denumire produs</span>
          </li>
          <li>
            <input {...register("slug")} type="text" />
            <span>denumire slug produs</span>
          </li>
          <li>
            <input {...register("category")} type="text" />
            <span>categorie produs</span>
          </li>
          <li>
            <input {...register("image")} type="text" />
            <span>path denumire imagine(/images/)</span>
          </li>
          <li>
            <input {...register("price")} type="text" />
            <span>pret</span>
          </li>
          <li>
            <input {...register("cantitate")} type="text" />
            <span>cantitate</span>
          </li>

          <li>
            <input {...register("countInStock")} type="text" />
            <span>numar pe stoc</span>
          </li>
          <li>
            <input {...register("description")} type="text" />
            <span>descriere produs</span>
          </li>
        </ul>
        <button className="">submit</button>
      </form>
    </div>
  );
};
PaginaProduse.Auth = true;
PaginaProduse.Admin = true;
export default PaginaProduse;
