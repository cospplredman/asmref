let None = (...x) => None;

let nil = impl => impl("nil")();
let nd = type => (a = nil, b = nil) => impl => impl(type)(a, b);

let li = type => impl => (s, ...x) => x.length == 0 ? impl(type)(s) : impl(type)(s, li(type)(impl)(...x));
let ri = type => impl => (s, ...x) => x.length == 0 ? impl(type)(s) : impl(type)(ri(type)(impl)(...x), s);

let Nodes = type => (a, b) => [a, b];
let Type = type => (a, b) => type;
let Json = type => 
  type == "nil" 
    ? (l, r) => null 
    : (l, r) => ({type, l:l(Json), r:r(Json)});

let eq = T => 
  T == "nil"
    ? () => type => (a, b) => T == type ? nil : None
    : (l = eq("nil")(), r = eq("nil")()) => type => (a, b) => {
      if(T == type){
        let na = a(l), nb = b(r);
        if(na != None && nb != None)
          return nd(type)(na, nb);
      }
      return None;
    }

let some = (s, ...c) => (l, r) => type => (a, b) => {
  let k = s(l, r)(type)(a, b);
  
  return k != None || c.length == 0
      ? k
      : some(...c)(l, r)(type)(a, b);
}

let all = (s, ...x) => nxt => x.length == 0 ? s(nxt) : (rst => s(rst)) (all(...x)(nxt));
let id = R => R;
let Cimpl = i2 => i1 => type => (l, r) => i1(type)(l, r)(i2);
let seq = (s, ...x) => x.length == 0 ? nd(s)() : nd(s)(impl => seq(...x)(impl))
let Unseq = type => 
  type == "nil" 
    ? (l, r) => []
    : (l, r) => [type, ...l(Unseq)];

let Set = (n=nil) => type => (...x) => n; 
let SetType = T => type => (...x) => nd(T)(...x)

let Nd = type => fn => {
  let nds = [];
  let le = i => Cimpl(type => (l, r) => {
     nds[i] = nd(type)(l, r);
     return nil;
  });

  let cle = i => fn => nxt => le(i)(fn(Cimpl(Set())(nxt)));
  return Cimpl(t=>(l, r)=>li(type)(nd)(...[...nds].map(v=>v??nil)))(fn(le, cle));
}

let many = v => {
  let k = nxt => some(v, all(v, k))(nxt);
  return k;};

let List = (t, c, sep) => nxt =>
  Nd(t)(
    le => all(
      nxt => le(0)(c(nxt)),
      opt(all(
        nxt=>le(-1)(sep(nxt)),
        nxt=>le(1)(List(t, c, sep)(nxt))
      ))
    )(nxt)
  );


//------------------
let opt = n => some(id, n);
let one_of = (...x) => some(...x.map(v=>eq(v)));
let all_of = (...x) => all(...x.map(v=>eq(v)));
