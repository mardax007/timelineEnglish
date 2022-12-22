import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "../../chunks/index.js";
import { T as Timeline, a as TimelineItem, b as TimelineOppositeContent, c as TimelineSeparator, d as TimelineDot, e as TimelineConnector, f as TimelineContent } from "../../chunks/TimelineOppositeContent.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-jptu5q{letter-spacing:1.5px;margin:0;padding:0}p.svelte-jptu5q{letter-spacing:1.5px;margin:0;color:grey}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const options = [
    {
      "title": "Norman Conquest of England",
      "time": "1066"
    },
    { "title": "First Crusade", "time": "1096" },
    {
      "title": "Henry I becomes King of England",
      "time": "1100"
    },
    {
      "title": "Stephen becomes King of England",
      "time": "1135"
    },
    {
      "title": "Henry II becomes King of England",
      "time": "1154"
    },
    {
      "title": "Thomas Becket assassinated",
      "time": "1170"
    },
    {
      "title": "Richard the Lionheart becomes King of England",
      "time": "1189"
    },
    {
      "title": "Signing of the Magna Carta",
      "time": "1215"
    },
    {
      "title": "King John becomes King of England",
      "time": "1216"
    },
    {
      "title": "Battle of Lincoln",
      "time": "1217"
    },
    {
      "title": "Edward I becomes King of England",
      "time": "1272"
    },
    {
      "title": "Edward I expels Jews from England",
      "time": "1290"
    },
    {
      "title": "Beginning of the Hundred Years' War between England and France",
      "time": "1337"
    },
    {
      "title": "Outbreak of the Black Death in Europe",
      "time": "1348"
    },
    {
      "title": "Peasants' Revolt in England",
      "time": "1381"
    },
    {
      "title": "Henry IV becomes King of England",
      "time": "1399"
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
