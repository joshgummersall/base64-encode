import * as core from "@actions/core";
import { Toolkit } from "actions-toolkit";

type Inputs = {
  value: string;
};

Toolkit.run<Inputs>(async (tools) => {
  core.setOutput(
    "value",
    Buffer.from(tools.inputs.value, "utf8").toString("base64")
  );
});
