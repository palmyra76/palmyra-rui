import { DateTimeConverter as t } from "./DateConverter.js";
import { noopConverter as r } from "./NoopConverter.js";
const a = (e) => {
  switch (e.type) {
    case "date":
      return new t(e, "YYYY-MM-DD");
    case "datetime":
      return new t(e, "YYYY-MM-DDTHH:mm:ss");
    case "dateRange":
      return new t(e, "YYYY-MM-DDTHH:mm:ss");
    default:
      return r;
  }
};
export {
  a as getFormatConverter
};
