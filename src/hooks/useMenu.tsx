import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { MenuProps } from "antd";

import { RouteMap, SidebarName } from "@/constants/routeMap";

type MenuItem = Required<MenuProps>["items"][number];

type GetItem = {
  label: React.ReactNode;
  key?: React.Key | null;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: "group" | "divider";
  path?: string;
};
const getItem = ({
  label,
  key,
  icon,
  path,
  children,
  type,
}: GetItem): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  } as MenuItem;
};
export const useMenu = () => {
  const { pathname } = useRouter();
  const pathSplit = pathname.split("/");

  const selectedKeys = [pathSplit[1]];
  const defaultSelectedKeys = [pathSplit[1]];

  const items = useMemo(
    () =>
      RouteMap.map((parent) => {
        const Icon = parent.icon as React.ElementType<unknown> | undefined;
        // const SolidIcon = ParentIcon?.fill as React.ElementType;
        // const OutlinedIcon = ParentIcon?.outline as React.ElementType;

        const children = parent?.children?.map((item) =>
          getItem({
            label: (
              <Link passHref legacyBehavior href={`/${parent.key}/${item.key}`}>
                {item.key}
              </Link>
            ),
            key: item.key,
          })
        );
        // const Icon = OutlinedIcon ? (
        //   <OutlinedIcon />
        // ) : (
        //   SolidIcon && <SolidIcon />
        // );
        return getItem({
          label: (
            <Link passHref legacyBehavior href={`/${parent.key}`}>
              {SidebarName[parent.key]}
            </Link>
          ),
          key: parent.key,
          icon: Icon ? <Icon /> : null,
          path: parent.path,
          type: parent.type,
          children,
        });
      }).filter(Boolean),

    []
  );
  return {
    items,
    selectedKeys,
    defaultSelectedKeys,
  };
};
