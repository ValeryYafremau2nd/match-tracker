"use strict";(self.webpackChunkfootball_reminder=self.webpackChunkfootball_reminder||[]).push([[571],{7571:($,h,s)=>{s.r(h),s.d(h,{LeaguesModule:()=>N});var c=s(1553),u=s(2282),t=s(5e3),l=s(9351),d=s(5695),f=s(6643),r=s(9808),v=s(3372);function O(n,o){1&n&&t._UZ(0,"app-loading-spinner")}function T(n,o){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4),t._UZ(2,"div",5)(3,"img",6),t.qZA()()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("routerLink","/leagues/"+e.id+"/standings"),t.xp6(2),t.Q6J("src",e.emblemUrl,t.LSH)}}let b=(()=>{class n{constructor(e,a){this.store=e,this.navStateService=a,this.leagues=[],this.isLoading=!0}ngOnInit(){this.isLoading=!0,this.storeSub="leagues"===this.navStateService.getCurrentState().mode?this.store.subscribe(a=>{this.isLoading=!1;const i=a.favourite.leagues.map(g=>g.id);this.leagues=a.leagues.leagues.map(g=>Object.assign(Object.assign({},g),{tracked:i.includes(g.id)}))}):this.store.select("favourite").subscribe(a=>{this.leagues=a.leagues.map(i=>Object.assign(Object.assign({},i),{tracked:!0}))})}track(e,a){this.store.dispatch(new u.FG({id:a.id,logo:a.logo,title:a.title}))}untrack(e,a){}ngOnDestroy(){this.storeSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.yh),t.Y36(d.b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-leagues"]],decls:4,vars:2,consts:[[4,"ngIf"],[1,"leagues-box"],["class","league-container",4,"ngFor","ngForOf"],[1,"league-container"],[1,"league-logo",3,"routerLink"],[1,"helper"],[3,"src"]],template:function(e,a){1&e&&(t.TgZ(0,"scroll-view"),t.YNc(1,O,1,0,"app-loading-spinner",0),t.TgZ(2,"div",1),t.YNc(3,T,4,2,"div",2),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",a.isLoading),t.xp6(2),t.Q6J("ngForOf",a.leagues))},directives:[f.W,r.O5,v.g,r.sg,c.rH],styles:[".league-container[_ngcontent-%COMP%]{width:200px;height:200px;margin:20px}.league-selector[_ngcontent-%COMP%]{text-align:center}.leagues-box[_ngcontent-%COMP%]{width:auto;display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;height:80%;align-items:center}.league-logo[_ngcontent-%COMP%]{width:200px;height:200px;cursor:pointer;text-align:center;background-color:#f8f8ff;padding:25px;border:5px solid gainsboro;border-radius:10px}.league-logo[_ngcontent-%COMP%]:hover{border-color:gray}img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.helper[_ngcontent-%COMP%]{display:inline-block;height:100%;vertical-align:middle}button[_ngcontent-%COMP%]{margin-top:10px}.league-name[_ngcontent-%COMP%]{text-align:center;font-weight:600}@media (max-width: 640px){.league-container[_ngcontent-%COMP%]{width:auto;height:auto}.league-logo[_ngcontent-%COMP%]{width:150px;height:150px;padding:15px;border:3px solid gainsboro;border-radius:8px}}"]}),n})();var S=s(9569),p=s(6100),C=s(2379);function A(n,o){1&n&&t._UZ(0,"app-loading-spinner")}function q(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td",4),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e._id.replace("_"," "))}}function _(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"th",5),t._uU(2),t.qZA(),t.TgZ(3,"td",6),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td",7),t._UZ(16,"app-track",8),t.qZA()()),2&n){const e=o.$implicit,a=o.index,i=t.oxw(2);t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.team.name),t.xp6(2),t.Oqu(e.playedGames),t.xp6(2),t.Oqu(e.won),t.xp6(2),t.Oqu(e.draw),t.xp6(2),t.Oqu(e.lost),t.xp6(2),t.Oqu(e.points),t.xp6(2),t.Q6J("itemId",e.team.id)("tracker",i.trackTeam.bind(i))("untracker",i.untrackTeam.bind(i))("tracked",e.trackedTeam)}}function y(n,o){if(1&n&&(t.TgZ(0,"table",2)(1,"thead"),t.YNc(2,q,3,1,"tr",0),t.TgZ(3,"tr")(4,"th"),t._uU(5,"#"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Team"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Matches"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Wins"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Draws"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Loses"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Points"),t.qZA(),t.TgZ(18,"th"),t._uU(19,"Track"),t.qZA()()(),t.TgZ(20,"tbody"),t.YNc(21,_,17,11,"tr",3),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.Q6J("ngIf",e._id),t.xp6(19),t.Q6J("ngForOf",e.table)}}let U=(()=>{class n{constructor(e,a){this.store=e,this.navStateService=a,this.standings=[],this.isLoading=!0;const i=this.navStateService.getCurrentState();e.dispatch(new p.vZ(i.league))}ngOnInit(){this.isLoading=!0,this.storeSub=this.store.select("leagues").subscribe(e=>{const i=this.navStateService.getCurrentState().league,g=e.leagues.find(R=>R.id===+i);this.standings=g?g.standings:[],void 0!==this.standings&&(this.isLoading=!1)})}trackTeam(e){this.store.dispatch(new u.FU(e))}untrackTeam(e){this.store.dispatch(new u.iR(e))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.yh),t.Y36(d.b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-standing"]],decls:3,vars:2,consts:[[4,"ngIf"],["class","table",4,"ngFor","ngForOf"],[1,"table"],[4,"ngFor","ngForOf"],["colspan","8","align","center",1,"standing-header"],["scope","row"],[1,"team-link"],[1,"col-track"],[3,"itemId","tracker","untracker","tracked"]],template:function(e,a){1&e&&(t.TgZ(0,"scroll-view"),t.YNc(1,A,1,0,"app-loading-spinner",0),t.YNc(2,y,22,2,"table",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",a.isLoading),t.xp6(1),t.Q6J("ngForOf",a.standings))},directives:[f.W,r.O5,v.g,r.sg,C.W],styles:[".team-link[_ngcontent-%COMP%]:hover{cursor:pointer}.team-link[_ngcontent-%COMP%]{font-weight:500;text-align:left}table[_ngcontent-%COMP%]{background-color:#f7f7f7;margin:0 3%;width:94%}th[_ngcontent-%COMP%]{border-top:none}tr[_ngcontent-%COMP%]{text-align:center}thead[_ngcontent-%COMP%]{background-color:#008b8b;color:#fff}.standing-header[_ngcontent-%COMP%]{background-color:#fff;font-weight:bolder;color:green;padding:30px 0 10px;border:none}.col-track[_ngcontent-%COMP%]{text-align:center}@media (max-width: 640px){.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:1.5vh;font-weight:500;padding:1px}}"]}),n})();function M(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"th",2),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&n){const e=o.$implicit,a=o.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.team),t.xp6(2),t.Oqu(e.goals)}}let k=(()=>{class n{constructor(e,a){this.store=e,this.navStateService=a,this.strikers=[]}ngOnInit(){this.store.select("leagues").subscribe(e=>{const i=this.navStateService.getCurrentState().league;this.strikers=e.leagues[i]?e.leagues[i].strikers:[]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.yh),t.Y36(d.b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-strikers"]],decls:13,vars:1,consts:[[1,"table","table-hover"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(e,a){1&e&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Striker"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Team"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Goals"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,M,9,4,"tr",1),t.qZA()()),2&e&&(t.xp6(12),t.Q6J("ngForOf",a.strikers))},directives:[r.sg],styles:[""]}),n})();function L(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"th",2),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const e=o.$implicit,a=o.index;t.xp6(2),t.Oqu(a+1),t.xp6(2),t.Oqu(e.name)}}let P=(()=>{class n{constructor(){this.players=[{name:"Antonio Zabuli",age:26,number:12},{name:"Antonio Zabuli",age:26,number:12},{name:"Antonio Zabuli",age:26,number:12}]}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-squad"]],decls:9,vars:1,consts:[[1,"table","table-hover"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(e,a){1&e&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Name"),t.qZA()()(),t.TgZ(7,"tbody"),t.YNc(8,L,5,2,"tr",1),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("ngForOf",a.players))},directives:[r.sg],styles:[""]}),n})();var F=s(2375),Z=s(1847),w=s(2986);let m=(()=>{class n{constructor(e,a){this.store=e,this.actions=a}resolve(e,a){return this.store.dispatch(new p.Bu),this.actions.pipe((0,Z.l4)(p.Q),(0,w.q)(1))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(l.yh),t.LFG(Z.eX))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const Y=[{path:"",component:b,pathMatch:"full",canActivate:[F.a],resolve:[m],runGuardsAndResolvers:"always"},{path:":league/matches",component:S.G,data:{animation:"MatchesPage"},resolve:[m]},{path:":league/standings",component:U,data:{animation:"StandingsPage"},resolve:[m]},{path:":league/strikers",component:k},{path:":league/teams/:team",component:P}];let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(Y)],c.Bz]}),n})();var x=s(3075),J=s(4466),Q=s(2368);let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.ez,x.u5,x.UX,I,c.Bz,J.m,Q.rP]]}),n})()}}]);