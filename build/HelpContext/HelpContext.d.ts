import React from 'react';
import IHelpContext from '../Interfaces/IHelpContext';
import IHelpInfo from '../Interfaces/IHelpInfo';
export declare const HelpContext: React.Context<IHelpContext>;
export declare function HelpContextProviderComponent({ lexicon, children }: {
    lexicon: Record<string, IHelpInfo>;
    children: any;
}): JSX.Element;
