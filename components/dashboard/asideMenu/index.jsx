import React from "react";
import { signOut } from "next-auth/react";
import { MdOutlineInventory } from "react-icons/md";
import { GiMailbox } from "react-icons/gi";
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

  return (
    <aside className="h-fit w-64 " aria-label="Sidebar">
      <div className=" py-4 px-3 bg-gray-50 rounded h-fit ">
        <ul className="space-y-4 relative">
          <li>
            <Link href="/dashboard/comenzi">
              <a>
                <div className="flex flex-row justify-between align-center pt-6 pr-4 text-left w-full relative">
                  <div className="flex flex-row justify-between align-center items-center h-auto w-full">
                    <span className="flex-1  whitespace-nowrap">Comenzi</span>
                    <GiMailbox className="" />
                  </div>

                  <span className="absolute font-extrabold rounded-full  top-0 right-0">
                    {data}
                  </span>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <div className="flex flex-row justify-between items-center w-full">
                  <span className="">Site Principal</span>
                  <AiOutlineHome />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Menu as="div" className="">
              <Menu.Button className="flex w-full  items-center">
                <div className="flex flex-row justify-between items-center w-full">
                  <MdProductionQuantityLimits />
                  <span>Produse</span>
                </div>
              </Menu.Button>
              <Menu.Items className="absolute  bg-white origin-top-right shadow-lg w-full overflow-visible">
                <Menu.Item>
                  <DropdownLink
                    className="dropdown-link "
                    href="/dashboard/inventar"
                  >
                    <div className="flex flex-row justify-between items-center w-full">
                      <MdOutlineInventory />

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
                      <GrFormAdd />
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
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BiUser />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Utilizatori
                </span>
              </a>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiLogoutCircleRLine />
              <span
                onClick={handleLogOut}
                className="flex-1 ml-3 whitespace-nowrap"
              >
                LogOut
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideMenu;
