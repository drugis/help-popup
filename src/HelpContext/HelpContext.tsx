import React, {createContext} from 'react';
import IHelpContext from '../Interfaces/IHelpContext';
import IHelpInfo from '../Interfaces/IHelpInfo';

export const HelpContext = createContext<IHelpContext>({} as IHelpContext);

export function HelpContextProviderComponent({
  lexicon,
  children
}: {
  lexicon: Record<string, IHelpInfo>;
  children: any;
}) {
  function getHelpInfo(id: string): IHelpInfo {
    if (lexicon[id]) {
      return lexicon[id];
    } else {
      return {title: 'unknown', link: 'unknown', text: 'unknown'};
    }
  }

  return (
    <HelpContext.Provider value={{getHelpInfo}}>
      {children}
    </HelpContext.Provider>
  );
}
