import { createServer } from "./server";
import { log } from "@repo/logger";

const port = process.env.PORT || 3001;

const startup = async () => {
  const server = await createServer();

  server.listen(port, () => {
    log(`api running on ${port}`);
  });
}

startup()
