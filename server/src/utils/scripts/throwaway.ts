import axios, { AxiosResponse } from "axios";
import { JSDOM } from "jsdom";
import constants from "../constants";

/** Throw away script to demonstrate parse of bmonster page */
const demo = async (): Promise<void> => {
    const htmlpage: AxiosResponse<string> = await axios.get<string>(
        constants.apis.bmonster.lessons.get("3"),
        { headers: { "Content-Type": "text/html" } }
    );

    const virtualDom: JSDOM = new JSDOM(htmlpage.data);

    // Array of rows
    const lessons: NodeList =
        virtualDom.window.document.querySelectorAll(".lessons");

        

    // First row (Earlier programs) sorted by day 0 being today 6 being a week from now
    lessons[0].childNodes.forEach((lesson: ChildNode, index: number) =>
        console.log(`${lesson.textContent} Day index ${index}` || "No content")
    );
};

demo();
