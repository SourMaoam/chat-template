import React, { useState } from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles } from '@fluentui/react';
import './App.css';
import {
  provideFluentDesignSystem,
  fluentTextField,
  fluentButton
} from "@fluentui/web-components";
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Icon } from '@fluentui/react/lib/Icon';
import { SideBar } from './components/sidebar'
import { Chat } from './components/chat'

initializeIcons(); 



provideFluentDesignSystem()
  .register(
      fluentTextField(),
      fluentButton()
  );
  

const stackTokens: IStackTokens = { childrenGap: 15 };
const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
};

export const SendButton = () => <Icon iconName="ChevronRightSmall" />;
export const FluentButton = wrap(fluentButton());
export const FluentTextField = wrap(fluentTextField());
export const App: React.FunctionComponent = () => {
    const [test, setTest] = useState("second")
  return (
    <Stack className="container">
      <SideBar></SideBar>
      <Chat></Chat>
    </Stack>
  );
};
