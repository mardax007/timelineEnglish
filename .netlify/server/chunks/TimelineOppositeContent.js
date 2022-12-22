import { c as create_ssr_component, s as setContext, f as add_attribute, g as getContext, e as escape, h as null_to_empty, i as compute_slots } from "./index.js";
const styling = "";
const Timeline_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".timeline.svelte-1qx6lg0{display:flex;flex-direction:column;padding:6px 16px;flex-grow:1}",
  map: null
};
const Timeline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { position = "right" } = $$props;
  let { style = null } = $$props;
  setContext("TimelineConfig", { rootPosition: position });
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$6);
  return `<ul class="${"timeline svelte-1qx6lg0"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}
</ul>`;
});
const TimelineItem_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".alternate:nth-of-type(even) > .timeline-content{text-align:right}.alternate:nth-of-type(odd) > .timeline-opposite-content{text-align:right}.opposite-block.svelte-77d8h8{flex:1;margin:6px 16px}.timeline-item.svelte-77d8h8{list-style:none;display:flex;position:relative;min-height:70px}.left.svelte-77d8h8{flex-direction:row-reverse}.right.svelte-77d8h8{flex-direction:row}.alternate.svelte-77d8h8:nth-of-type(even){flex-direction:row-reverse}.alternate.svelte-77d8h8:nth-of-type(odd){flex-direction:row}",
  map: null
};
const TimelineItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { position = null } = $$props;
  let { style = null } = $$props;
  const config = getContext("TimelineConfig");
  const itemPosition = position ? position : config.rootPosition;
  setContext("ParentPosition", itemPosition);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$5);
  return `<li class="${escape(null_to_empty(`timeline-item ${itemPosition}`), true) + " svelte-77d8h8"}"${add_attribute("style", style, 0)}>${!$$slots["opposite-content"] ? `<div class="${"opposite-block svelte-77d8h8"}"></div>` : `${slots["opposite-content"] ? slots["opposite-content"]({}) : ``}`}
	${slots.default ? slots.default({}) : ``}
</li>`;
});
const TimelineSeparator_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".timeline-separator.svelte-6e6s8c{display:flex;flex-direction:column;flex:0;align-items:center}",
  map: null
};
const TimelineSeparator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$4);
  return `<div class="${"timeline-separator svelte-6e6s8c"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const TimelineDot_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".timeline-dot.svelte-1ggf9p1{background-color:#121212;border:solid 2px #121212;display:flex;align-self:baseline;padding:4px;border-radius:50%;margin:11.5px 0}",
  map: null
};
const TimelineDot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$3);
  return `<span class="${"timeline-dot svelte-1ggf9p1"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}
</span>`;
});
const TimelineConnector_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".timeline-connector.svelte-1usms3k{width:2px;background-color:#bdbdbd;flex-grow:1}",
  map: null
};
const TimelineConnector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$2);
  return `<span class="${"timeline-connector svelte-1usms3k"}"${add_attribute("style", style, 0)}></span>`;
});
const TimelineContent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".timeline-content.svelte-ov1kt8{margin:0;flex:1;margin:6px 16px}.left.svelte-ov1kt8{text-align:right}.right.svelte-ov1kt8{text-align:left}",
  map: null
};
const TimelineContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  const config = getContext("TimelineConfig");
  const parentPosition = getContext("ParentPosition");
  const itemPosition = parentPosition ? parentPosition : config.rootPosition;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty(`timeline-content ${itemPosition}`), true) + " svelte-ov1kt8"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const TimelineOppositeContent_svelte_svelte_type_style_lang = "";
const css = {
  code: ".timeline-opposite-content.svelte-r6jwvl{margin:0;flex:1;margin-right:auto;margin:6px 16px}.left.svelte-r6jwvl{text-align:left}.right.svelte-r6jwvl{text-align:right}",
  map: null
};
const TimelineOppositeContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = null } = $$props;
  const config = getContext("TimelineConfig");
  const parentPosition = getContext("ParentPosition");
  const itemPosition = parentPosition ? parentPosition : config.rootPosition;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`timeline-opposite-content ${itemPosition}`), true) + " svelte-r6jwvl"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Timeline as T,
  TimelineItem as a,
  TimelineOppositeContent as b,
  TimelineSeparator as c,
  TimelineDot as d,
  TimelineConnector as e,
  TimelineContent as f
};
