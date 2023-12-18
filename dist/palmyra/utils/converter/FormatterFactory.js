import { DateTimeConverter as r } from "./DateConverter.js";
import { DateRangeConverter as n } from "./DateRangeConverter.js";
import { noopConverter as o } from "./NoopConverter.js";
import { ServerlookupTransformer as a } from "./ServerlookupTransformer.js";
const i = (e, t) => {
  switch (e.type) {
    case "date":
      return new r(e, "YYYY-MM-DD");
    case "datetime":
      return new r(e, "YYYY-MM-DDTHH:mm:ss");
    case "dateRange":
      return new n(e, "YYYY-MM-DD");
    case "serverlookup":
      return new a(e, t);
    default:
      return o;
  }
};
export {
  i as getFormatConverter
};
