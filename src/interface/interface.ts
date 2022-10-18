export interface ISection {
  isAdding?: boolean;
}

export interface IItems {
	[key: string] : {
    id: string;
    content: string;
  }
}

export interface IColumns {
  [key: string] : {
    id: string;
    title: string;
    itemIds: string[];
  }
}

export type SliceState = {
  items: IItems;
  columns: IColumns;
  columnOrder: string[];
};

export type TColumnProps = {
  key: string;
  colId: string;
  index: number;
};

export type TItemProps = {
  key: string;
  index: number;
  item: {
    id: string;
    content: string;
  }
};