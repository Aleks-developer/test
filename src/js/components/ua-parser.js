import UAParser from "ua-parser-js";

const uaParser = () => {
  const html = document.documentElement;
  let parser = new UAParser();
  let parserResults = parser.getResult();

  html.setAttribute("ua-os", parserResults.os.name);
};

export default uaParser;
