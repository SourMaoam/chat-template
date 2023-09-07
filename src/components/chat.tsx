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
import { Button } from "@fluentui/react-components";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Icon } from "@fluentui/react/lib/Icon";
initializeIcons();

provideFluentDesignSystem().register(fluentTextField(), fluentButton());

const stackTokens: IStackTokens = { childrenGap: 15 };
const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: "960px",
    margin: "0 auto",
    textAlign: "center",
    color: "#605e5c",
  },
};

export const SendButton = () => <Icon iconName="ChevronRightSmall" />;
export const FluentButton = wrap(fluentButton());
export const FluentTextField = wrap(fluentTextField());
export const Chat = () => {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill
      styles={stackStyles}
      tokens={stackTokens}
    >
      <Text className="text-field">MoAI</Text>
      <div className="response-box"></div>
      <div className="text-field-container">
        <FluentTextField
          className="input-field text-field"
          placeholder="Send a message"
        />
        <div className="sendButton" onClick={() => console.log(test)}>
          <SendButton />
        </div>
      </div>
    </Stack>
  );
};
