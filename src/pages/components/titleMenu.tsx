import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TMenuProps } from "../../interface/interface";
import { setColumnOrder, setColumns, setItems } from "../../redux/reducer/todoSlice";

const useStyles = makeStyles(() => ({
  root: {
    padding: "0 !important"
  },
  list: {
    padding: "5px 8px !important"
  },
  icon: {
    minWidth: "20px !important"
  },
}));

const TitleMenu: React.FC<TMenuProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
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
    const tmpItems = { ...items };
    tmp.itemIds.map((id) => delete tmpItems[id]);
    dispatch(setItems(tmpItems));

  };
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
        classes={{list: classes.root}}
      >
        <MenuItem
          onClick={delColumn}
          classes={{root: classes.list}}
        >
          <ListItemIcon classes={{root: classes.icon}}>
            <DeleteForeverRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>삭제</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default TitleMenu;