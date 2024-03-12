let gen_sheet = document.createElement("style");
document.head.appendChild(gen_sheet);
let gen_styles = gen_sheet.sheet;

let gen_rule = (sel, style) => {
  gen_styles.insertRule(`${sel} { ${Object.entries(style)
    .map(v=>v[0].replace(/([A-Z])/g,"-$1") + ":" + v[1])
    .join(";")}; } \n`);
}

let class_gid = 0;
let class_prefix = "s_";
let gen_class = (style) => {
	let name = class_prefix + (class_gid++);
	gen_rule("." + name, style);
	return name;
}


let to_el = nd => nd(id)();

let el = type => nxt => _ => nxt(document.createElement(type));

let Children = (...x) => nxt => el => {
	el.replaceChildren(...x.filter(v=>v!=null).map(to_el));
	return nxt(el);
}

let Style = style => nxt => el => {
	Object.entries(style).forEach(v=>el.style[v[0]] = v[1]);
	return nxt(el);
}

let Class = cl => nxt => el => {
	el.classList.add(cl);
	return nxt(el);
}

let Text = text => nxt => el => {
	el.innerText = text;
	return nxt(el);
}

let Attr = (name, value) => nxt => el => {
	el[name] = value;
	return nxt(el);
}

let Event = (name, cb) => nxt => el => {
	el.addEventListener(name, cb);
	return el;
}








let col = (...nd) => all(
	Block(el("div")),
	Children(...nd)
)

let row = (...nd) => all(
  Block(el("div")),
  Style({ whiteSpace: "nowrap" }),
  Children(...nd.map(v=>
    all(
      v,
      Style({
	      display: "inline-block",
	      whiteSpace: "wrap"
      })
    )
  ))
);

let Overlap = (...nd) => all(
  Block(el("div")),
  Style({position: "relative"}),
  Children(...nd.map(v=>
    all(
      v,
      Style({position: "absolute"}))
    )
  )
);

let Button = (nd, cb) => all(
  nd,
  Style({userSelect: "none", cursor: "pointer"}),
  Event("click", cb)
);


let vpart = (...w) => (...nd) => all(
  Block(el("div")),
  Class("vpart"),
  Children(...nd.map((v,i)=>
    w[i] != null
      ? Rect(null, w[i])(v)
      : all(Block(el("div")), Class("partBlock"), Children(v))
  ))
);

let hpart = (...w) => (...nd) => all(
  Block(el("div")),
  Class("hpart"),

  Children(...nd.map((v,i)=>
    w[i] != null
      ? Rect(w[i], null)(v)
      : all(Block(el("div")), Class("partBlock"), Children(v))
  )));

let Center = (w, h) => nd =>
vpart(null, h, null)(
  null,
  hpart(null, w, null)(
    null,
    nd,
    null
  ),
  null
);

let Body = nd => all(
  el("body"),
  Children(nd)
);

let Block = nd => all(
  nd,
  Class("Block"),
);

let Rect = (w, h) => nd => all(
  Block(el("div")),
  Style({
    width: `calc(${w})`,
    height: `calc(${h})`
  }),
  Children(nd)
);

let Scroll = nd => all(
    Rect("100%", "100%")(el("div")),
    Style({overflow: "auto"}),
    Children(nd)
);

let ScrollX = nd => all(
    Rect("100%", "100%")(el("div")),
    Style({overflow: "visible", overflowX: "auto"}),
    Children(nd)
);

let ScrollY = nd => all(
    Rect("100%", "100%")(el("div")),
    Style({overflow: "visible", overflowY: "auto"}),
    Children(nd)
);

let Border = (m, w, p, cl="border") => nd => all(
  el("div"),
  Class(cl),
  Children(nd)
);













let vresize = nd => all(
  Block(el("div")),
  Style({
    resize: "vertical",
    maxHeight: "100%"
  }),
  Children(nd)
);

let hresize = nd => all(
  Block(el("div")),
  Style({
    resize: "horizontal",
    maxWidth: "100%"
  }),
  Children(nd)
);

