import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "../../../chunks/index.js";
import { T as Timeline, a as TimelineItem, b as TimelineOppositeContent, c as TimelineSeparator, d as TimelineDot, e as TimelineConnector, f as TimelineContent } from "../../../chunks/TimelineOppositeContent.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-jptu5q{letter-spacing:1.5px;margin:0;padding:0}p.svelte-jptu5q{letter-spacing:1.5px;margin:0;color:grey}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const options = [
    {
      "title": "Chaucer is born in London, England",
      "time": "1343"
    },
    {
      "title": "Chaucer serves as a page to Elizabeth, Countess of Ulster",
      "time": "1357"
    },
    {
      "title": "Chaucer joins the English army and fights in the Hundred Years' War",
      "time": "1359"
    },
    {
      "title": "Chaucer marries Philippa de Roet, a lady-in-waiting to Queen Philippa",
      "time": "1366"
    },
    {
      "title": "Chaucer becomes a member of Parliament",
      "time": "1374"
    },
    {
      "title": "Chaucer becomes a clerk of the king's works",
      "time": "1378"
    },
    {
      "title": "Chaucer becomes a justice of the peace",
      "time": "1380"
    },
    {
      "title": "Chaucer becomes a comptroller of the customs in the port of London",
      "time": "1386"
    },
    {
      "title": "Chaucer becomes deputy forester of North Petherton Park in Somerset",
      "time": "1389"
    },
    {
      "title": "Chaucer becomes a member of the royal household",
      "time": "1391"
    },
    {
      "title": "Chaucer begins writing The Canterbury Tales",
      "time": "1400"
    },
    {
      "title": "Chaucer dies in London, England",
      "time": "1400"
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Timeline, "Timeline").$$render(
    $$result,
    {
      position: "alternate",
      style: "border: solid 1px #dbdbdb; padding: 50px 0; border-radius: 2%;"
    },
    {},
    {
      default: () => {
        return `${each(options, (option) => {
          return `${validate_component(TimelineItem, "TimelineItem").$$render($$result, {}, {}, {
            "opposite-content": () => {
              return `${validate_component(TimelineOppositeContent, "TimelineOppositeContent").$$render($$result, { slot: "opposite-content" }, {}, {
                default: () => {
                  return `<p class="${"svelte-jptu5q"}">${escape(option.time)}</p>
			`;
                }
              })}`;
            },
            default: () => {
              return `${validate_component(TimelineSeparator, "TimelineSeparator").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TimelineDot, "TimelineDot").$$render($$result, { style: "background-color: #7CD5E2;" }, {}, {})}
				${validate_component(TimelineConnector, "TimelineConnector").$$render($$result, {}, {}, {})}
			`;
                }
              })}
			${validate_component(TimelineContent, "TimelineContent").$$render($$result, {}, {}, {
                default: () => {
                  return `<h3 class="${"svelte-jptu5q"}">${escape(option.title)}</h3>
			`;
                }
              })}
		`;
            }
          })}`;
        })}`;
      }
    }
  )}`;
});
export {
  Page as default
};
