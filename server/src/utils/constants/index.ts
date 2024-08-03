import apis from "./apis";
import htmlSelectors from "./htmlSelectors";
import resources from "./resources";
import Constants from "./types";
import validation from "./validation";

const constants: Readonly<Constants> = {
    apis,
    htmlTagMapping: htmlSelectors,
    resources,
    validation,
};

export default constants;
