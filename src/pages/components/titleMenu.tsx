import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon, ListItemText } from "@mui/material";
import { TMenuProps } from "../../interface/interface";
import { setColumnOrder, setColumns, setItems } from "../../redux/reducer/todoSlice";

const TitleMenu: React.FC<TMenuProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const columns = useAppSelector(({todos}) => todos.columns);
  const columnOrder = useAppSelector(({todos}) => todos.columnOrder);
  const items = useAppSelector(({todos}) => todos.items);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  
  const delColumn = () => {
    setAnchorEl(null);
    
    if(!confirm("해당 컬럼을 삭제하시겠습니까?")) return;
    if(Object.keys(columns).length <= 2) {
      alert("컬럼이 두개 이하인경우 삭제할수 없습니다.");
      return;
    }
    const { [id]: tmp, ...remains } = columns;
    dispatch(setColumns(remains));
    dispatch(setColumnOrder(columnOrder.filter((v) => v !== id)));
    dispatch(setItems(items.filter(item => !tmp.itemIds.includes(item.id))));
  }

  return (
    <>
      <span onClick={handleClick}>
        <MoreHorizRoundedIcon />
      </span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={delColumn}>
          <ListItemIcon>
            <DeleteForeverRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>삭제</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TitleMenu;