"use strict";
const locales = {
  zh: {
    brand:"上线前夜",edition:"第一幕 · 试玩",langLabel:"语言",roles:"切换角色",shortcut:"SHIFT 切换",
    releaseLabel:"发行",releaseRoom:"上线控制室",financeLabel:"财务",financeRoom:"结算室",footer:"第一幕 · 不限时 · CNY",soundOn:"声音：开",soundOff:"声音：关",
    releaseEyebrow:"周四 23:41  /  平台后台",releaseHeadline:"一万单。\n今晚庆功？",releaseBrief:"预购破万。平台今晚给我们首页推荐，完整版来不及收尾，免费试玩倒是已经打包。上线，还是再等一晚？",
    releaseTicker:"已付款预购",releaseCaption:"平台报表 · 订单已确认",financeEyebrow:"周四 23:41  /  银行回单",financeHeadline:"钱在路上。\n工资在周五。",financeBrief:"那一万单两周后才结算。账上有 ¥34,000，周五工资 ¥30,000，供应商尾款 ¥10,000 也明天到期。",
    financeTicker:"当前银行余额",financeCaption:"银行回单 · 预购款未到账",
    rTask:"签发上线指令",rCopy:"签发后不能撤回。免费试玩可以保住推荐位，但今晚不开正式销售。",fTask:"处理供应商尾款",fCopy:"供应商接受付 ¥1,000 手续费延期一个月。尾款不会消失，只是不用在发薪日付。",commit:"只能确认一次",closed:"今晚已结案。切换角色仍可复盘。",signed:"已锁定付款条款。切回发行可看各方案的发薪测算。",forecast:"已收到财务签字：以下是各方案的周五发薪测算。",
    feed:"交接记录",feedCopy:"只记录已发生的事。切换角色不走时间。",init:"23:41 · 平台确认首页推荐，等待发行决定。",
    choices:{full:["上线完整版","保住推荐位；临时发布支持费用。"],demo:["只发免费试玩","保住推荐位；正式销售留待后续。"],delay:["延期上线","今晚不花发布费，也放弃推荐位。"],extend:["签供应商展期","现在付手续费；下月仍欠 ¥10,000。"],pay:["按原合同付款","明天付清尾款，不再欠供应商。"]},
    logs:{extend:"财务签了展期：¥1,000 今晚付，¥10,000 下月到期。",pay:"财务确认按原合同支付 ¥10,000。",full:"发行签发完整版。全员群里开始发香槟表情。",demo:"发行签发免费试玩。推荐位保留，庆功酒换成了咖啡。",delay:"发行撤掉了今晚的发布申请，平台收回首页推荐。",defaultPay:"财务未改付款条款，尾款按原合同到期。"},
    results:{full:["庆功消息已撤回","一万单是真的。银行说：下下周见。"],demo:["试玩上了，工资也发了","你用 ¥1,000 买来一个月，保住了今晚的推荐位。下个月，供应商还会敲门。"],delay:["工资发了，首页没了","你留了更多现金，但平台没给第二个首页位。"],missDemo:["首页上了，工资没发齐","免费不等于零成本。你保住了推荐位，却没有移动尾款的到期日。"],missDelay:["没上线，也没备齐工资","你省下了发布费，但供应商照常到期。没按上线按钮，不代表账单也会停。"]},
    resultKicker:"周五  /  结算单",gap:"工资缺口",left:"发薪后余额",owed:"下月供应商尾款",feature:"首页推荐",yes:"保留",no:"错过",reset:"重开此幕"
  },
  en: {
    brand:"Launch Eve",edition:"Act I · Playtest",langLabel:"Language",roles:"Switch roles",shortcut:"SHIFT to switch",
    releaseLabel:"Release",releaseRoom:"Launch control",financeLabel:"Finance",financeRoom:"Accounts office",footer:"Act I · No timer · CNY",soundOn:"Sound: on",soundOff:"Sound: off",
    releaseEyebrow:"THU 23:41  /  STORE DASHBOARD",releaseHeadline:"10,000 preorders.\nDrinks on us?",releaseBrief:"Paid preorders hit five digits. The store offered a front-page slot tonight. The full build needs rush support; the free demo is already packed. Do we ship?",
    releaseTicker:"Paid preorders",releaseCaption:"Store dashboard · orders confirmed",financeEyebrow:"THU 23:41  /  BANK STATEMENT",financeHeadline:"Money in transit.\nPayroll on Friday.",financeBrief:"Those preorders settle in two weeks. You have ¥34,000 in the bank. Payroll is ¥30,000 and the vendor wants ¥10,000 tomorrow, too.",
    financeTicker:"Bank balance now",financeCaption:"Bank statement · preorders not settled",
    rTask:"Sign the release order",rCopy:"Signing closes the night. The free demo keeps the slot, but there are no new full-game sales tonight.",fTask:"Handle the vendor invoice",fCopy:"The vendor will move the due date by one month for a ¥1,000 fee. The bill isn't gone; it just isn't due on payday.",commit:"ONE FINAL COMMITMENT",closed:"The night is closed. Switch desks to review what happened.",signed:"Payment terms locked. Back at Release, you can now see the payroll forecast.",forecast:"Finance signed off on payment terms. Here’s what each option means for Friday’s payroll.",
    feed:"Handoff log",feedCopy:"Only completed actions appear here. Switching roles does not advance time.",init:"23:41 · Store confirms the front page and waits for Release.",
    choices:{full:["Ship the full game","Keep the feature; pay for emergency launch support."],demo:["Ship the free demo","Keep the feature; full-game sales can wait."],delay:["Delay the launch","No launch bill tonight; give up the feature."],extend:["Sign the extension","Pay the fee now; ¥10,000 remains due next month."],pay:["Pay on the original terms","The invoice lands tomorrow. No carryover."]},
    logs:{extend:"Finance signs: ¥1,000 tonight, ¥10,000 next month.",pay:"Finance confirms the ¥10,000 original payment.",full:"Release ships the full game. The group chat is all champagne emojis.",demo:"Release ships the demo. Keep the slot; swap champagne for coffee.",delay:"Release pulls the launch. The store takes back the front page.",defaultPay:"No new vendor terms were signed; the bill still falls due on Friday."},
    results:{full:["Celebration message deleted","Ten thousand sales, all real. The bank says: see you in two weeks."],demo:["The demo shipped. So did payroll.","You paid ¥1,000 to buy a month and kept the spotlight. The vendor will be back."],delay:["Payroll made it. The front page didn’t.","You kept more cash. The store didn't offer another slot."],missDemo:["Featured. Still short on payroll.","Free to play isn't free to ship. The demo kept the slot, but the bill still came due."],missDelay:["No launch. Still short on payroll.","You saved the launch fee. The vendor's clock kept ticking anyway."]},
    resultKicker:"FRIDAY  /  SETTLEMENT",gap:"Payroll shortfall",left:"Cash after payroll",owed:"Vendor due next month",feature:"Front-page feature",yes:"Kept",no:"Lost",reset:"Replay this act"
  }
};
const narrative = typeof module !== "undefined" ? require("./story.js") : story;
for(const key of Object.keys(narrative))locales[key]={...locales[key],...narrative[key]};
const costs={full:8000,demo:2000,delay:0,extend:1000,pay:10000,note:500};
const spending=(plan,note)=>costs[plan]+(plan==="demo"&&note?costs.note:0);
const outcome=(deal,plan,note=false)=>{
  const ext=deal==="extend", used=note&&plan==="demo", net=34000-30000-costs[ext?"extend":"pay"]-spending(plan,note);
  return {net,owed:ext?10000:0,feature:plan!=="delay",used,key:plan==="full"?"full":net<0?(plan==="demo"?"missDemo":"missDelay"):plan};
};
if(typeof module!=="undefined")module.exports={outcome,spending,locales};
if(typeof document!=="undefined"){
  const $=id=>document.getElementById(id), say=(id,value)=>{$(id).textContent=value;};
  const cash=n=>"¥"+n.toLocaleString("en-US");
  const make=(tag,value,cls)=>{const el=document.createElement(tag);if(value!==undefined)el.textContent=value;if(cls)el.className=cls;return el;};
  let lang="en";
  try {
    const preferred=localStorage.getItem("launch-eve-gameoff-language"), system=navigator.language?.split("-")[0];
    if(Object.hasOwn(locales,preferred))lang=preferred;else if(Object.hasOwn(locales,system))lang=system;
  }catch{const system=navigator.language?.split("-")[0];if(Object.hasOwn(locales,system))lang=system;}
  let role="release", lastDesk="release", deal=null, plan=null, armed=null, ticket=false, notes=["init"], sound=false, audio=null, shiftDown=false, previous=null, handoffTarget="finance", visited=new Set(["release"]);
  const artKey=(p,n)=>p==="demo"&&n?"used":p;
  function chord(kind){
    if(!sound)return;
    try {
      audio ||= new (window.AudioContext || window.webkitAudioContext)(); if(audio.state==="suspended")audio.resume().catch(()=>{});
      const now=audio.currentTime;
      const tone=(f,dt,len,vol,type="sine",tail=f)=>{
        const osc=audio.createOscillator(), g=audio.createGain(), t=now+dt;
        osc.type=type;osc.frequency.setValueAtTime(f,t);osc.frequency.exponentialRampToValueAtTime(tail,t+len);
        g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+len);
        osc.connect(g);g.connect(audio.destination);osc.start(t);osc.stop(t+len+.01);osc.onended=()=>{osc.disconnect();g.disconnect();};
      };
      // An intercom, a receipt printer, and a three-note station bell. No samples or autoplay.
      if(kind==="settle"){const good=outcome(deal,plan,ticket).net>=0;
        [392,493.88,good?587.33:369.99].forEach((n,i)=>tone(n,i*.17,i===2?.65:.34,.044));return;}
      if(role==="finance"){[0,.043,.09,.136].forEach((d,i)=>tone(1000+i*120,d,.025,.017,"triangle",140));tone(246.94,.22,.24,.025,"triangle");}
      else if(role==="studio"){if(kind==="act")tone(870,0,.06,.026,"triangle",160);[392,493.88,587.33].forEach((n,i)=>tone(n,.035+i*.095,.39,.026));}
      else {tone(440,0,.12,.03,"triangle");tone(554.37,.105,.23,.032);}
    } catch {}
  }
  function control(label,fn,id){
    const b=make("button",label,"action");b.type="button";if(id)b.id=id;b.addEventListener("click",fn);return b;
  }
  function render(){
    const t=locales[lang], release=role==="release", studio=role==="studio";
    document.documentElement.lang=lang==="zh"?"zh-CN":lang;
    document.title=t.brand+" · "+t.edition;
    document.body.dataset.role=role;
    for(const id of ["brand","edition","langLabel","shortcut","releaseLabel","releaseRoom","financeLabel","financeRoom","studioLabel","studioRoom"])say(id,t[id]);
    say("map-heading",t.map);$("language").value=lang;$("rooms").setAttribute("aria-label",t.roles);
    for(const r of ["release","finance","studio"])$(r).setAttribute("aria-pressed",r===role);
    $("sound").setAttribute("aria-pressed",sound);say("sound",sound?t.soundOn:t.soundOff);
    const ending=plan?outcome(deal,plan,ticket):null;
    document.body.dataset.closed=plan?"true":"false";document.body.dataset.artifact=plan?artKey(plan,ticket):"";
    const initialEndings=[t[role+"Eyebrow"],t[role+"Headline"],t[role+"Brief"]];
    const [when,heading,brief]=ending?t[role+"Friday"]:initialEndings;
    say("eyebrow",when);say("headline",heading);say("brief",brief);
    say("ticker",ending&&role==="finance"?(ending.net<0?t.gap:t.left):t[role+"Ticker"]);
    say("caption",t[role+"Caption"]);
    say("number",release?"10,000":studio?t.studioNumber:cash(ending?Math.abs(ending.net):34000-(deal==="extend"?1000:0)));
    const voice=!ending?role+"Voice":studio?(ending.used?"noteVoice":plan+"Voice"):release?("releaseAfter"+plan[0].toUpperCase()+plan.slice(1)):(ending.net<0?"financeAfterGap":"financeAfterGood");
    say("voice",t[voice][0]);say("speaker",t[voice][1]);
    let handoffLabel;
    if(ending){handoffTarget="result";handoffLabel=t.switchResults;}
    else if(!release){handoffTarget="release";handoffLabel=t.switchReview;}
    else if(!visited.has("finance")){handoffTarget="finance";handoffLabel=t.switchPhone;}
    else if(!visited.has("studio")){handoffTarget="studio";handoffLabel=t.switchNote;}
    else if(!deal){handoffTarget="finance";handoffLabel=t.switchContracts;}
    else{handoffTarget="task-title";handoffLabel=t.switchChoose;}
    say("handoff-text",handoffLabel);$("handoff").dataset.target=handoffTarget;
    if(!ending&&role==="finance"&&!deal){handoffTarget="task-title";say("handoff-text",t.fTask);$("handoff").dataset.target=handoffTarget;}
    if(!ending&&studio&&!ticket){handoffTarget="task-title";say("handoff-text",t.note[0]);$("handoff").dataset.target=handoffTarget;}
    say("task-kicker",t.commit);say("task-title",release?t.rTask:studio?t.sTask:t.fTask);
    say("task-copy",plan?t.stayed:release?(armed?t.warn:deal?t.forecast:t.rCopy):studio?(ticket?t.sReady:t.sCopy):(deal?t.signed:t.fCopy));
    const actionIds=release?["full","demo","delay"]:studio?["note"]:["extend","pay"];
    const buttons=actionIds.map(key=>{
      const btn=make("button",undefined,"action");btn.type="button";btn.dataset.action=key;
      btn.disabled=!!plan||(!release&&!studio&&!!deal)||(studio&&ticket);
      const [title,desc]=key==="note"?t.note:t.choices[key];
      btn.append(make("b",title),make("small",desc),make("span",cash(release?spending(key,ticket):costs[key]),"cost"));
      if(release&&deal&&!plan){const v=outcome(deal,key,ticket).net;btn.append(make("small",(v<0?t.gap:t.left)+" · "+cash(Math.abs(v)),"forecast"));}
      btn.addEventListener("click",()=>choose(key));return btn;
    });
    if(release&&armed&&!plan){
      $("actions").replaceChildren(control(t.arm+" · "+t.choices[armed][0],commit,"confirm-plan"),control(t.back,()=>{const k=armed;armed=null;render();document.querySelector('[data-action="'+k+'"]').focus();},"cancel-plan"));
    } else $("actions").replaceChildren(...buttons);
    say("ledger-kicker",t.ledgerTag);say("feed-title",t.feed);say("feed-copy",t.feedCopy);
    $("feed").replaceChildren(...notes.map(key=>make("li",{init:t.init,note:t.noteLog,noteUsed:t.noteUsed}[key]??t.logs[key])));
    $("result").hidden=!plan;
    if(ending){
      const [title,copy]=t.results[ending.key];
      say("result-kicker",t.resultKicker);say("result-title",title);say("result-copy",copy);
      $("receipt").replaceChildren(...[[ending.net<0?t.gap:t.left,cash(Math.abs(ending.net))],[t.owed,cash(ending.owed)],[t.feature,ending.feature?t.yes:t.no]].map(([label,value])=>{const box=make("div");box.append(make("dt",label),make("dd",value));return box;}));
      say("artifact-label",t.artifactLabel+" · "+t.exhibit[artKey(plan,ticket)]);say("artifact-copy",t.keepsakes[artKey(plan,ticket)]);
      $("compare").hidden=!previous;
      if(previous){const prev=outcome(previous.deal,previous.plan,previous.ticket),diff=ending.net-prev.net;
        const prevArtifact=t.exhibit[artKey(previous.plan,previous.ticket)], currentArtifact=t.exhibit[artKey(plan,ticket)];
        say("compare",t.prevPrefix+": "+prevArtifact+" → "+t.nowPrefix+": "+currentArtifact+" · "+(diff===0?t.compareSame:(diff>0?t.compareMore:t.compareLess)+" "+cash(Math.abs(diff))));}
      say("reset",t.reset);say("review",t.review);$("review").hidden=studio;
    }
    say("footer-copy",t.footer);
  }
  function choose(k){
    if(plan)return;
    if(role==="finance" && !deal && ["extend","pay"].includes(k)){deal=k;notes.push(k);chord("act");render();say("live",locales[lang].logs[k]);$("release").focus();}
    if(role==="studio" && !ticket && k==="note"){ticket=true;notes.push(k);chord("act");render();say("live",locales[lang].noteLog);$("release").focus();}
    if(role==="release" && ["full","demo","delay"].includes(k)){armed=k;render();$("confirm-plan").focus();}
  }
  function commit(){
    if(!armed||plan||role!=="release")return;
    if(!deal)notes.push("defaultPay");plan=armed;armed=null;notes.push(plan);
    if(outcome(deal,plan,ticket).used)notes.push("noteUsed");
    chord("settle");render();$("result").focus();
  }
  function switchTo(next){
    if(role===next)return false;
    role=next;visited.add(next);if(next!=="studio")lastDesk=next;
    armed=null;chord("switch");render();say("live",locales[lang][role+"Room"]);return true;
  }
  for(const r of ["release","finance","studio"])$(r).addEventListener("click",()=>{switchTo(r);});
  $("handoff").addEventListener("click",()=>{if(handoffTarget==="result"||handoffTarget==="task-title"){
    $(handoffTarget).focus();$(handoffTarget).scrollIntoView({block:"start"});
  }else if(switchTo(handoffTarget)){$("headline").focus();}});
  $("review").addEventListener("click",()=>{if(switchTo("studio"))$("headline").focus();});
  $("sound").addEventListener("click",()=>{sound=!sound;if(sound)chord("switch");render();});
  $("language").addEventListener("change",e=>{if(!Object.hasOwn(locales,e.target.value))return;lang=e.target.value;try{localStorage.setItem("launch-eve-gameoff-language",lang);}catch{}render();});
  $("reset").addEventListener("click",()=>{previous={deal,plan,ticket};visited=new Set(["release"]);role="release";lastDesk="release";deal=null;plan=null;armed=null;ticket=false;notes=["init"];say("live","");render();$("release").focus();window.scrollTo(0,0);});
  window.addEventListener("keydown",e=>{if(e.key==="Shift"){if(!e.repeat&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.target?.tagName!=="SELECT")shiftDown=true;}else shiftDown=false;});
  window.addEventListener("keyup",e=>{if(e.key==="Shift"&&shiftDown){shiftDown=false;switchTo(lastDesk==="release"?"finance":"release");$(role).focus();}});
  window.addEventListener("blur",()=>shiftDown=false);
  render();
}
