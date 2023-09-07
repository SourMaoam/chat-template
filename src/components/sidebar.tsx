import React, { useState } from "react";
import {
  Stack,
  Text,
  Link,
  FontWeights,
  IStackTokens,
  IStackStyles,
  ITextStyles,
} from "@fluentui/react";
import {
  provideFluentDesignSystem,
  fluentTextField,
  fluentButton,
} from "@fluentui/web-components";
import "../App.css";

import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from "@fluentui/react/lib/Icon";

initializeIcons();

provideFluentDesignSystem().register(fluentTextField(), fluentButton());

const stackTokens: IStackTokens = { childrenGap: 15 };
const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};

export const ChatIcon = () => <Icon iconName="Chat" />;
export const AddIcon = () => <Icon iconName="Add" />;
export const SidebarIcon = () => <Icon iconName="ColumnRightTwoThirds" />;
export const FluentButton = wrap(fluentButton());
export const FluentTextField = wrap(fluentTextField());
export const SideBar = () => {
  const myChats = [
    { name: "Hei", id: 1 },
    { name: "Hva er klokka?", id: 2 },
    { name: "Hvor mye benker du?", id: 3 },
    { name: "What's 9+10?", id: 4 },
  ];
  return (
    <Stack
      horizontalAlign="start"
      verticalAlign="center"
      verticalFill
      styles={stackStyles}
      tokens={stackTokens}
    >
      <div className="sidebarWrapper">
        <div className="sidebarControls">
          <div className="newChat">
            <div className="addIcon">
              <AddIcon />
            </div>
            <Text className="newChatText">New chat</Text>
          </div>
          <div className="sidebarIcon">
            <SidebarIcon />
          </div>
        </div>
        <div className="chats">
          {myChats.map((chat) => (
            <div className="chat" key={chat.id}>
              <div className="chatIcon">
                <ChatIcon />
              </div>
              {chat.name}
            </div>
          ))}
        </div>
      </div>
    </Stack>
  );
};
