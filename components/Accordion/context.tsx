import { createContext } from 'react';

export interface AccordionContextProps {
  multiple?: boolean;
  isActive: boolean;
  onPanelChange: () => void;
}

export const AccordionContext = createContext<AccordionContextProps>({} as AccordionContextProps);
