import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { withLenses, lens } from "@dhmk/zustand-lens";
import { createToolbarSlice } from "./createToolbarSlice";

export const useEditorStore = create()(
  devtools(
    withLenses(() => ({
      editor: lens(createToolbarSlice),
    })),
    {
      name: "EditorStore",
      enabled: true,
    }
  )
);
