import dataBuilderEn from "./data/components/en/dataBuilder.js";
import dataBuilderJa from "./data/components/ja/dataBuilder.js";
import dataBuilderZh from "./data/components/zh/dataBuilder.js";
import dataBuilderVi from "./data/components/vi/dataBuilder.js";
import { root } from "./data/components/en/dataBuilder.js";

switch (root.lang) {
  case "ja":
    dataBuilderJa();
    break;
  case "zh":
    dataBuilderZh();
    break;
  case "vi":
    dataBuilderVi();
    break;
  default:
    dataBuilderEn();
    break;
}

//by Robert Michalski
