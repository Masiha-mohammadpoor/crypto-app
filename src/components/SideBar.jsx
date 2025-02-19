"use client";
import { IconButton } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useMenu from "@/hooks/useMenu";
import useMenuMobile from "@/hooks/useMenuMobile";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const { openMenu, setOpenMenu } = useMenu();
  const [menu, setMenu] = useState(true);
  const { setOpenMenuMobile } = useMenuMobile();

  useEffect(() => {
    setMenu(openMenu);
  }, [openMenu]);

  const itemsOfMenu = [
    {
      id: 1,
      title: "Dashboard",
      icon: <SpaceDashboardIcon />,
    },
    {
      id: 2,
      title: "Market",
      icon: <BarChartIcon />,
    },
    {
      id: 3,
      title: "Wallet",
      icon: <AccountBalanceWalletIcon />,
    },
    {
      id: 4,
      title: "Transaction",
      icon: <SwapHorizontalCircleIcon />,
    },
    {
      id: 5,
      title: "Community",
      icon: <PeopleIcon />,
    },
    {
      id: 6,
      title: "Setting",
      icon: <SettingsIcon />,
    },
  ];

  return (
    <section className="px-5 pt-5">
      <article
        className={`pl-5 overflow-hidden flex ${
          menu ? "justify-between" : "justify-center"
        } items-center`}
      >
        <h2 className="font-bold text-xl">
          hrypto<span className="text-primary-400">link</span>
        </h2>
      </article>
      <article className="mt-7">
        {itemsOfMenu.map((i) => {
          return (
            <Link
              key={i.id}
              onClick={() => setOpenMenuMobile(false)}
              href="/dashboard/statistics"
            >
              <IconButton
                variant="contained"
                className={`mx-auto transition w-full mb-1 flex ${
                  menu ? "pl-5 py-3 gap-x-4 justify-start" : "p-3"
                } ${
                  pathname === "/dashboard/statistics"
                    ? "bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100"
                    : "bg-transparent"
                } hover:bg-primary-100 hover:text-primary-800 dark:hover:bg-primary-800 dark:hover:text-primary-100 hover:shadow-none rounded-lg shadow-none text-black dark:text-white capitalize`}
              >
                {i.icon}
                <span className={`${!menu && "hidden"} text-sm font-semibold`}>
                  {i.title}
                </span>
              </IconButton>
            </Link>
          );
        })}
      </article>
    </section>
  );
};

export default Sidebar;
