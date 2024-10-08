import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { sidebarListItemBtn } from "../styles/sidebar";
import { sidebarListProps } from "../types/types";

const SidebarList: React.FC<sidebarListProps> = ({
  index,
  handleDrawerClose,
  isSelected,
  item,
}) => {
  const router = useRouter();
  return (
    <ListItem key={index} disablePadding>
      <ListItemButton
        onClick={() => {
          router.push(item.path);
          handleDrawerClose();
        }}
        sx={sidebarListItemBtn(isSelected)}
      >
        <ListItemIcon sx={sidebarListItemBtn(isSelected).btnIcon}>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarList;
