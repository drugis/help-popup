import React, { createContext } from 'react';
import IHelpContext from '../Interfaces/IHelpContext';
import IHelpInfo from '../Interfaces/IHelpInfo';

export const HelpContext = createContext<IHelpContext>({} as IHelpContext);

export function HelpContextProviderComponent({
  host,
  path,
  lexicon,
  children
}: {
  host?: string;
  path: string;
  lexicon: Record<string, IHelpInfo>;
  children: any;
}) {
  function getHelpInfo(id: string): IHelpInfo {
    if (lexicon[id]) {
      return lexicon[id];
    } else {
      return {
        title: 'Missing help',
        link: 'unknown',
        text: `no help in lexicon for id ${id}`
      };
    }
  }

  return (
    <HelpContext.Provider value={{getHelpInfo, baseUrl: host? host + path: path}}>
      {children}
    </HelpContext.Provider>
  );
}
