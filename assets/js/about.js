import dataBuilderEn from "./data/components/en/dataBuilder.js";
import dataBuilderJa from "./data/components/ja/dataBuilder.js";
import dataBuilderZh from "./data/components/zh/dataBuilder.js";
import { root } from "./data/components/en/dataBuilder.js";

if (root.lang === "en") {
  dataBuilderEn();
} else if (root.lang === "ja") {
  dataBuilderJa();
} else if (root.lang === "zh") {
  dataBuilderZh();
}

//by Robert Michalski
