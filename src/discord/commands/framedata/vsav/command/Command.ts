import { createCommand } from "#base";
import {
  ApplicationCommandType,
} from "discord.js";

export default createCommand({
  name: "vsav",
  description: "framedata test",
  type: ApplicationCommandType.ChatInput,
});