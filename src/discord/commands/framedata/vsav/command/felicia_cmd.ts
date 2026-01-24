import command from "./Command.js";
import { ApplicationCommandOptionType } from "discord.js";
import { res } from "#functions";
import {
  brBuilder,
  createSection,
  createSeparator,
  createMediaGallery,
} from "@magicyan/discord";

// game database
import { vsav } from "../database/vsav/vsav_db.js";

const character = vsav.chars[0];
const icon = character.icon;
const moves = character.moves;

const commandIndex: Record<string, number> = {
  "5LP": 0,
  "5MP": 1,
  "5HP": 2,
  "5LK": 3,
  "5MK": 4,
  "5HK": 5,
  "cl.5LP": 6,
  "cl.5MP": 7,
  "cl.5HP": 8,
  "cl.5LK": 9,
  "cl.5MK": 10,
  "cl.5HK": 11,
  "2LP": 12,
  "2MP": 13,
  "2HP": 14,
  "2LK": 15,
  "2MK": 16,
  "2HK": 17,
};

command.subcommand({
  name: "felicia",
  description: "felicia framedata",
  options: [
    {
      name: "moves",
      description: "select a move to get framedata from",
      type: ApplicationCommandOptionType.String,
      choices: moves.map((m) => ({
        name: m.name,
        value: m.command, // ex: "5lp"
      })),
      required: true,
    },
  ],

  async run(interaction) {
    await interaction.reply(
      res.success("fetching data...").with({ flags: [] }),
    );

    const selectedCommand = interaction.options.getString("moves", true);
    const index = commandIndex[selectedCommand];

    if (index === undefined) {
      await interaction.editReply(res.danger("index indefinido, reporte o dev."));
      return;
    }

    const move = character.moves[index];

    const sections = [
      createSection(
        brBuilder(
          `## ${character.name} - ${move.name} (${move.command})`,
          `-# ${vsav.game}`,
        ),
        `${icon}`,
      ),
      createSeparator(),
      brBuilder(
        `Startup: ${move.startup}`,
        `Active: ${move.active}`,
        `Recovery: ${move.recovery}`,
        `Adv. on hit: ${move.onHit}`,
        `Adv. on block: ${move.onBlock}`,
        `cancel: ${move.cancel}`,
        `Invul: ${move.invul}`,
        `Guard: ${move.guard}`,
      ),
    ];

    if (move.image) {
      sections.push(createSeparator());
      sections.push(createMediaGallery(`${move.image}`) as any);
    } else {
      sections.push("-# no available image for this move");
    }

    if (move.description && move.description !== "** **") {
      sections.push(createSeparator());
      sections.push(brBuilder(move.description));
    }

    await interaction.editReply(res.primary(...sections));
  },
});
