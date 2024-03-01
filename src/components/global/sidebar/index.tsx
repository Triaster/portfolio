import { AsideList, AsideListItem } from "./style";
import { useContextContent, IContextContentState } from "@/context/ContextContent";
import { useEffect, useRef } from "react";

export default function Sidebar() {
  const { state, updateState } = useContextContent() as {
    state: IContextContentState[];
    updateState: (title: string) => void;
  };

  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const activeIndex = state.findIndex((item) => item.active);
    if (activeIndex !== -1) {
      buttonRefs.current[activeIndex]?.focus();
    }
  }, [state]);

  const handleClick = (index: number) => {
    updateState(state[index].title);
  };

  const handleKeyPress = (
    index: number,
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const nextIndex = (index + 1) % state.length;
      const nextButton = buttonRefs.current[nextIndex];
      if (nextButton) {
        nextButton.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
        nextButton.focus();
      }
    }
  };

  return (
    <AsideList>
      {state.map((item: IContextContentState, index) => (
        <AsideListItem key={item.id} $active={item.active}>
          <button
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyPress(index, e)}
          >
            {item.title}
          </button>
        </AsideListItem>
      ))}
    </AsideList>
  );
}
