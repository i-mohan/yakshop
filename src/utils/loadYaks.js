import fs from "fs";
import { Yak } from "../models/Yak.js";

const yaksFile = "./src/data/yaks.json";

export function loadYaks(filePath = yaksFile) {
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return data.herd.map((yak) => new Yak(yak.name, yak.age, yak.sex));
}
