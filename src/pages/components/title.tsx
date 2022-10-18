import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TTitleProps } from "../../interface/interface";
import { setColumns } from "../../redux/reducer/todoSlice";
import TitleMenu from "./titleMenu";

const Title: React.FC<TTitleProps> = ({ title, id }) => {
  const dispatch = useAppDispatch();

  const columns = useAppSelector(({todos}) => todos.columns);
  const [isEdit, setIsEdit] = useState(false);
  const [titleText, setTitleText] = useState(title);

  const onDoubleClick = () => setIsEdit(true);
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitleText(value);
  }
  const onTitleChange = (e: React.FormEvent) => {
    e.preventDefault();
    const column = columns[id];
    dispatch(setColumns({
      ...columns,
      [id]: {
        ...column,
        title: titleText
      }
    }));
    setIsEdit(false);
  }

  useEffect(() => {
    const nextSibling = document.querySelector(
      `section#${id} input`
    ) as HTMLElement;
    if (nextSibling !== null) {
      nextSibling.focus();
    }
  }, [isEdit]);

  return (
    <>
      {isEdit ? (
        <form onSubmit={onTitleChange}>
          <input type="text" value={titleText} onChange={onTextChange} />
        </form>
      ) : (
        <h3 onDoubleClick={onDoubleClick}>{title}</h3>
      )}
      <TitleMenu id={id} />
    </>
  );
};

export default Title;