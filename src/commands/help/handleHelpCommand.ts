import { Message, User } from "discord.js";
import config from "../../config";
import { Log } from "../../logging";

const handleHelpCommand = async (
  getUser: (id: string) => Promise<User>,
  sendDm: (user: User, message: string) => void,
  deleteMessage: (message: Message) => void,
  message: Message
) => {
  const user = await getUser(message.author.id);

  if (!user) {
    Log.warn(
      `Help command failed: could not find user with id ${message.author.id}`
    );
  }

  sendDm(message.author, config.commands.helpMessage);

  deleteMessage(message);
};

export default handleHelpCommand;
