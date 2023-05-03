import { JSDOM } from "jsdom";

export default async function getStatus(req, res) {
  const body = await JSON.parse(req.body);
  const response = await fetch(body.ip);

  const htmlContent = await response.text();
  const dom = await new JSDOM(htmlContent);
  const document = await dom.window.document;
  const course = await document.querySelector(body.css)?.value;

  await res.status(200).json({ course });
}
