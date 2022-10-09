import React from "react";
import { signOut } from "next-auth/react";
import { MdOutlineInventory } from "react-icons/md";
import { MdPendingActions } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { GrFormAdd } from "react-icons/gr";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import DropdownLink from "../../DropdownLink";
import useSWR from "swr";
import Spinner from "../../spinner/Spinner";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AsideMenu = () => {
  const handleLogOut = (e) => {
    e.preventDefault();

    signOut({ callbackUrl: "/auth/login" });
  };
  const { data, error } = useSWR("/api/dashboard/comenzi/nr-comenzi", fetcher);
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error) return "no data....";
  const iconStyle = { fontSize: "30px" };
  return (
    <aside className="h-fit w-64 " aria-label="Sidebar">
      <div className=" py-4 px-3 bg-gray-50 rounded h-fit ">
        <ul className="space-y-4 relative">
          <li>
            <Link href="/dashboard/comenzi">
              <a className="">
                <div className="flex flex-row justify-between align-center  text-left w-full relative hover:bg-gray-200 pt-4 pb-4 pl-1 pr-3 ">
                  <div className="flex flex-row justify-between align-center items-center h-auto w-full pl-1">
                    <span className="flex-1  whitespace-nowrap">Comenzi</span>
                    <MdPendingActions style={iconStyle} />
                  </div>

                  <span className="absolute font-serif bg-red-400  rounded-full text-xs top-0 right-0 p-1">
                    {data}
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <div className="flex flex-row justify-between items-center w-full hover:bg-gray-200 p-4 pl-1 pr-1">
                  <span>Site Principal</span>
                  <AiOutlineHome style={iconStyle} />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Menu as="div" className="">
              <Menu.Button className="flex w-full  items-center">
                <div className="flex flex-row justify-between items-center w-full hover:bg-gray-200 p-4 pl-1 pr-1">
                  <span>Produse</span>
                  <MdProductionQuantityLimits style={iconStyle} />
                </div>
              </Menu.Button>
              <Menu.Items className="absolute  bg-white origin-top-right shadow-lg w-full overflow-visible">
                <Menu.Item>
                  <DropdownLink
                    className="dropdown-link "
                    href="/dashboard/inventar"
                  >
                    <div className="flex flex-row justify-between items-center w-full">
                      <MdOutlineInventory style={iconStyle} />

                      <span> Inventar</span>
                    </div>
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <DropdownLink
                    href="/dashboard/produse/adauga-produse"
                    className="dropdown-link"
                  >
                    <div className="flex flex-row justify-between items-center w-full">
                      <GrFormAdd style={iconStyle} />
                      <span>Adauga un produs nou</span>
                    </div>
                  </DropdownLink>
                </Menu.Item>
                <Menu.Item>
                  <DropdownLink href="/" className="dropdown-link">
                    lorem
                  </DropdownLink>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </li>
          <li>
            <Link href="/dashboard/utilizatori">
              <a>
                <div className="flex flex-row justify-between items-center w-full hover:bg-gray-200 p-4 pl-1 pr-1 ">
                  <span className="flex-1  whitespace-nowrap">Utilizatori</span>
                  <BiUser style={iconStyle} />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="flex flex-row justify-between items-center w-full hover:bg-gray-200 p-4 pl-1 pr-1"
            >
              LogOut
              <RiLogoutCircleRLine style={iconStyle} />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideMenu;
