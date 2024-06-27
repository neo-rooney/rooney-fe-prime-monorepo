import run from "@rooney/esbuild";
import pkg from "./package.json" assert { type: "json" };

run({ pkg });
