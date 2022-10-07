import React from "react";
import { signOut } from "next-auth/react";
import { MdOutlineInventory } from "react-icons/md";
import { GiMailbox } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import DropdownLink from "../../DropdownLink";

const AsideMenu = () => {
  const handleLogOut = (e) => {
    e.preventDefault();

    signOut({ callbackUrl: "/auth/login" });
  };
  return (
    <div>
      <aside className="w-64 " aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 absolute top-0 bottom-0">
          <ul className="space-y-2 relative">
            <li>
              <Link href="/dashboard/inventar">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <MdOutlineInventory />

                  <span className="ml-3">Inventar</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/comenzi">
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <GiMailbox />
                  <span className="flex-1 ml-3 whitespace-nowrap">Comenzi</span>
                  <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    5
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Menu as="div" className="z-40  inline-block">
                <Menu.Button className="flex justify-center items-center">
                  <MdProductionQuantityLimits />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Manageriaza Produsele
                  </span>
                </Menu.Button>
                <Menu.Items className="absolute  w-56 bg-white origin-top-right shadow-lg">
                  {" "}
                  <Menu.Item>
                    <DropdownLink
                      href="/dashboard/produse/adauga-produse"
                      className="dropdown-link"
                    >
                      Adauga un produs nou
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
    </div>
  );
};

export default AsideMenu;
