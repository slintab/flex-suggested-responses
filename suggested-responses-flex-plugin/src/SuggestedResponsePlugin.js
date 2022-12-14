import React from "react";
import { FlexPlugin } from "@twilio/flex-plugin";

import Suggestion from "./components/Suggestion";
import KBMessageMetaOption from "./components/KBMessageMetaOption";

import { updateKnowledgebase } from "./utils";

const PLUGIN_NAME = "SuggestedResponsePlugin";

export default class SuggestedResponse extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    flex.MessageInputV2.Content.add(<Suggestion key="suggestion" />);

    flex.MessageListItem.Content.add(
      <KBMessageMetaOption key="kb-message-option" />
    );

    manager.events.addListener("taskWrapup", updateKnowledgebase);
  }
}
