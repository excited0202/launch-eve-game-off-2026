"use strict";
const assert=require("node:assert/strict");
const {outcome,spending,locales}=require("../game/shift.js");
const games=[
  ["full",[-14000,-14000,-5000],[-14000,-14000,-5000]],
  ["demo",[-8000,-8000,1000],[-8500,-8500,500]],
  ["delay",[-6000,-6000,3000],[-6000,-6000,3000]]
];
let cases=0;
for(const [plan,without,withNote] of games){
 for(const [i,deal] of [null,"pay","extend"].entries()){
  for(const [note,balance] of [[false,without[i]],[true,withNote[i]]]){
   const result=outcome(deal,plan,note);
   assert.equal(result.net,balance);assert.equal(result.feature,plan!=="delay");
   assert.equal(result.owed,deal==="extend"?10000:0);
   assert.equal(result.used,plan==="demo"&&note);
   for(const l of Object.values(locales))assert.equal(l.results[result.key].length,2);
   cases++;
  }
 }
}
assert.equal(spending("demo",true),2500);assert.equal(spending("full",true),8000);
for(const l of Object.values(locales)){
 assert.deepEqual(Object.keys(l).sort(),Object.keys(locales.en).sort());
 assert.deepEqual(Object.keys(l.choices).sort(),Object.keys(locales.en.choices).sort());
 assert.deepEqual(Object.keys(l.logs).sort(),Object.keys(locales.en.logs).sort());
}
console.log(`${cases} cash/feature/ticket routes and 3 locale key sets passed`);

// The final cut must ship without a network, a build step, or an absent locale entry.
const fs=require("node:fs"), path=require("node:path");
const game=path.join(__dirname,"../game"), html=fs.readFileSync(path.join(game,"index.html"),"utf8");
const linked=[...html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"/g)].map(m=>m[1]);
assert.equal(linked.length,3);
for (const name of linked){
 assert.match(name,/^[a-z]+\.(?:js|css)$/);assert.ok(fs.existsSync(path.join(game,name)),name);
}
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,"element IDs must be unique, including IDs in the illustration");
assert.deepEqual(Object.keys(locales).sort(),["en","ja","zh"]);
for(const [language,l] of Object.entries(locales)){
 for(const role of ["release","finance","studio"]){
  assert.equal(l[role+"Friday"].length,3);
  assert.notEqual(l[role+"Friday"][1],l[role+"Headline"]);
  for(const v of l[role+"Friday"])assert.ok(typeof v==="string"&&v.trim().length);
 }
 for(const key of ["releaseAfterFull","releaseAfterDemo","releaseAfterDelay","financeAfterGood","financeAfterGap","fullVoice","demoVoice","delayVoice","noteVoice"]){
  assert.equal(l[key].length,2);
 }
 for(const group of ["keepsakes","exhibit"]){
  assert.deepEqual(Object.keys(l[group]).sort(),["delay","demo","full","used"]);
  assert.equal(new Set(Object.values(l[group])).size,4,language+" distinct artifacts");
 }
 assert.deepEqual(Object.keys(l.results).sort(),["delay","demo","full","missDelay","missDemo"]);
 for(const key of ["switchPhone","switchContracts","switchNote","switchReview","switchChoose","switchResults","compareMore","compareLess","compareSame"]){
  assert.ok(typeof l[key]==="string"&&l[key].length,language+"/"+key);
 }
}
console.log("Offline entry point, unique IDs, three localized Friday scenes, four artifacts, handoffs and replay copy passed");
