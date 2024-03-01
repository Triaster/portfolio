import React, { createContext, useContext, useState } from 'react';

export const enum IContextContentStateEnum {
  HOME = "home",
  ABOUT = "about",
  CV = "cv",
  BLOG = "blog"
}

export interface IContextContentState {
  title: IContextContentStateEnum;
  id: number;
  active: boolean;
}

export interface IContextContent {
  state: IContextContentState[];
  updateState: (title: IContextContentStateEnum) => void;
}

const MyContext = createContext<IContextContent | null>(null);

export const ContextContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<IContextContentState[]>([
    { title: IContextContentStateEnum.HOME, id: 0, active: true },
    { title: IContextContentStateEnum.ABOUT, id: 1, active: false },
    { title: IContextContentStateEnum.BLOG, id: 2, active: false },
    { title: IContextContentStateEnum.CV, id: 3, active: false }
  ]);

  const updateState = (title: IContextContentStateEnum) => {
    const newElements = state.map((itm: IContextContentState) => ({
      ...itm,
      active: itm.title === title,
    }));

    setState(newElements);
  }

  const myContextValue: IContextContent = {
    state,
    updateState,
  };

  return (
    <MyContext.Provider value={myContextValue}>
      {children}
    </MyContext.Provider>
  );
};

export const useContextContent = () => {
  return useContext(MyContext);
};