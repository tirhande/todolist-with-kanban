import React from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ContentPasteGoRoundedIcon from '@mui/icons-material/ContentPasteGoRounded';
import { ISection } from "../../interface/interface";
import { AddItemDiv } from "../../styles/styles";

interface IAddItem extends ISection {
  onClose: () => void;
  setIsAdding: (arg: boolean) => void;
  onAddItem: () => void;
}

const AddItem: React.FC<IAddItem> = ({isAdding, onClose, setIsAdding, onAddItem}) => {
  return (
    <AddItemDiv>
      {isAdding ? (
        <>
          <button onMouseDown={(e) => e.preventDefault()} onClick={onAddItem}>Add card</button>
          <span>
            <CloseRoundedIcon onClick={onClose} />
          </span>
        </>
        ) : (
        <>
          <div onClick={() => setIsAdding(true)}>
            <AddRoundedIcon />
            Add a card
          </div>
          <span onClick={() => alert("준비중입니다.")}>
            <ContentPasteGoRoundedIcon />
          </span>
        </>
      )}
    </AddItemDiv>
  )
};

export default AddItem;