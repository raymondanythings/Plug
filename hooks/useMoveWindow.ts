import { DragEventHandler, HTMLAttributes, useState } from "react";

interface IUseMoveWindow {
  isDragging: boolean;
  options: Partial<HTMLAttributes<HTMLDivElement>>;
}

function useMoveWindow(): IUseMoveWindow {
  const [isDragging, setIsDragging] = useState(false);
  const onDrag: DragEventHandler<HTMLDivElement> = (e) => {
    setIsDragging(true);
  };

  return {
    isDragging: isDragging,
    options: {
      onDragStart: onDrag,
    },
  };
}
export default useMoveWindow;
