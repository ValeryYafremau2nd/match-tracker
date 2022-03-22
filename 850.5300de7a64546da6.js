"use strict";(self.webpackChunkfootball_reminder=self.webpackChunkfootball_reminder||[]).push([[850],{9569:(C,u,s)=>{s.d(u,{G:()=>I});var n=s(6100),r=s(2282),l=s(1307),t=s(5e3),h=s(9351),a=s(5695),g=s(591);let d=(()=>{class o{constructor(){this.showFinishedSubject=new g.X("true"===localStorage.getItem("showFinished")),this.showPostponedSubject=new g.X(!1),this.showTrackedTeamsSubject=new g.X("true"===localStorage.getItem("showTrackedTeams"))}applyShowFinishedFilter(e){localStorage.setItem("showFinished",e),this.showFinishedSubject.next(e)}applyShowPostponedFilter(e){localStorage.setItem("showPostponed",e),this.showPostponedSubject.next(e)}applyShowTrackedTeamsFilter(e){localStorage.setItem("showTrackedTeams",e),this.showTrackedTeamsSubject.next(e)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=s(3075),k=s(2368),w=s(9808);function b(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"mat-slide-toggle",5),t.NdJ("change",function(){return t.CHM(e),t.oxw().showTrackedTeamsFilter()}),t._uU(2," Show tracked teams "),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.showCheckedTeamsCheckboxValue)}}let S=(()=>{class o{constructor(e,i,p){this.filterService=e,this.navState=i,this.isFavourite=!1,localStorage.getItem("showTrackedTeams")||this.filterService.applyShowTrackedTeamsFilter(!0),localStorage.getItem("showFinished")||this.filterService.applyShowFinishedFilter(!0),localStorage.getItem("showPostponed")||this.filterService.applyShowPostponedFilter(!0),this.showCheckedTeamsCheckboxValue="true"===localStorage.getItem("showTrackedTeams"),this.showFinishedCheckboxValue="true"===localStorage.getItem("showFinished"),this.showPostponedCheckboxValue="true"===localStorage.getItem("showPostponed"),this.filterGroup=p.group({showFinished:this.showFinishedCheckboxValue,showPostponed:this.showPostponedCheckboxValue,showTrackedTeams:this.showCheckedTeamsCheckboxValue})}ngOnInit(){this.isFavourite="favourite"===this.navState.getCurrentState().mode}showFinishedFilter(){this.filterService.applyShowFinishedFilter(this.filterGroup.value.showFinished)}showPostponedFilter(){this.filterService.applyShowPostponedFilter(this.filterGroup.value.showPostponed)}showTrackedTeamsFilter(){this.filterService.applyShowTrackedTeamsFilter(this.filterGroup.value.showTrackedTeams)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d),t.Y36(a.b),t.Y36(m.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-filter"]],decls:7,vars:3,consts:[[1,"match-filter"],[1,"form-inline",3,"formGroup"],[1,"form-group","mb-3"],["formControlName","showFinished",3,"checked","change"],["class","form-group mb-3",4,"ngIf"],["formControlName","showTrackedTeams",3,"checked","change"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"mat-slide-toggle",3),t.NdJ("change",function(){return i.showFinishedFilter()}),t.TgZ(4,"span"),t._uU(5,"Show finished"),t.qZA()()(),t.YNc(6,b,3,1,"div",4),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("formGroup",i.filterGroup),t.xp6(2),t.Q6J("checked",i.showFinishedCheckboxValue),t.xp6(3),t.Q6J("ngIf",i.isFavourite))},directives:[m._Y,m.JL,m.sg,k.Rr,m.JJ,m.u,w.O5],styles:[".match-filter[_ngcontent-%COMP%]{position:fixed;top:100px;width:100%;height:30px;background-color:#008b8b;padding-left:30px;color:#fff;font-weight:400}form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-right:30px}@media (max-width: 640px){.match-filter[_ngcontent-%COMP%]{font-size:1.5vh;margin:0 5px}}"]}),o})();var y=s(6643),x=s(3372),F=s(2379);function P(o,c){1&o&&t._UZ(0,"app-loading-spinner")}const M=function(o,c){return{finished:o,postponed:c}},T=function(o){return{"tracked-team":o}};function O(o,c){if(1&o&&(t.TgZ(0,"tr",5)(1,"td",6),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"th",8),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td",9),t._uU(7),t.qZA(),t.TgZ(8,"td",10),t._uU(9),t.qZA(),t.TgZ(10,"td",11),t._uU(11,":"),t.qZA(),t.TgZ(12,"td",10),t._uU(13),t.qZA(),t.TgZ(14,"td",12),t._uU(15),t.qZA(),t.TgZ(16,"td",13),t._UZ(17,"app-track",14),t.qZA()()),2&o){const e=c.$implicit,i=t.oxw(2);t.Q6J("ngClass",t.WLB(16,M,"FINISHED"===e.status,"POSTPONED"===e.status)),t.xp6(2),t.Q6J("src",e.emblemUrl,t.LSH),t.xp6(2),t.Oqu(t.xi3(5,13,e.utcDate,"HH:mm")),t.xp6(2),t.Q6J("ngClass",t.VKq(19,T,e.homeTeam.tracked)),t.xp6(1),t.Oqu(e.homeTeam.name),t.xp6(2),t.Oqu(e.score.fullTime.homeTeam),t.xp6(4),t.Oqu(e.score.fullTime.awayTeam),t.xp6(1),t.Q6J("ngClass",t.VKq(21,T,e.awayTeam.tracked)),t.xp6(1),t.Oqu(e.awayTeam.name),t.xp6(2),t.Q6J("itemId",e.id)("tracker",i.trackMatch.bind(i))("untracker",i.untrackMatch.bind(i))("tracked",e.tracked)}}function Z(o,c){if(1&o&&(t.TgZ(0,"div")(1,"div",2),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"table",3)(5,"tbody"),t.YNc(6,O,18,23,"tr",4),t.qZA()()()),2&o){const e=c.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,2,e._id)),t.xp6(4),t.Q6J("ngForOf",e.matches)}}let I=(()=>{class o{constructor(e,i,p){this.store=e,this.navStateService=i,this.filterService=p,this.matchDays=[],this.isLoading=!0;const f=this.navStateService.getCurrentState();e.dispatch("leagues"!==f.mode?new r.Xq:new n.nQ(f.league))}trackMatch(e){this.store.dispatch(new r.kC(e))}untrackMatch(e){this.store.dispatch(new r.ot(e))}ngOnInit(){this.filterService.showFinishedSubject.subscribe(i=>{this.showFinishedSubject=i,this.matchDays=this.applyFilters()}),this.filterService.showPostponedSubject.subscribe(i=>{this.showPostponedSubject=i,this.matchDays=this.applyFilters()}),this.filterService.showTrackedTeamsSubject.subscribe(i=>{this.showTrackedTeamsSubject=i,this.matchDays=this.applyFilters()});const e=this.navStateService.getCurrentState();this.isLoading=!0,this.matchDays=void 0,this.storeSub="leagues"===e.mode?this.store.select("leagues").subscribe(i=>{const f=this.navStateService.getCurrentState().league,_=i.leagues.find(v=>v.id===+f);this.notFilteredMatches=_?_.matches:[],this.matchDays=this.applyFilters(),void 0!==this.matchDays&&(this.isLoading=!1)}):this.store.select("favourite").pipe((0,l.T)(1)).subscribe(i=>{this.notFilteredMatches=i.matches,this.matchDays=this.applyFilters(),void 0!==this.matchDays&&(this.isLoading=!1)})}ngOnDestroy(){this.storeSub.unsubscribe()}applyFilters(){return this.notFilteredMatches?this.notFilteredMatches.map(p=>{const f=Object.assign({},p);return f.matches=f.matches.filter(_=>(!!this.showTrackedTeamsSubject||_.tracked||!(_.homeTeam.tracked||_.awayTeam.tracked))&&(!!this.showFinishedSubject||!("FINISHED"===_.status))&&(!!this.showPostponedSubject||!("POSTPONED"===_.status))),f}).filter(p=>p.matches.length):void 0}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h.yh),t.Y36(a.b),t.Y36(d))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-matches"]],decls:4,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"match-day"],[1,"table"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"col-competition"],[3,"src"],[1,"col-date"],[1,"col-home-team",3,"ngClass"],[1,"col-home-team-score"],[1,"col-separator"],[1,"col-away-team",3,"ngClass"],[1,"col-track"],[2,"float","right","width","100%",3,"itemId","tracker","untracker","tracked"]],template:function(e,i){1&e&&(t._UZ(0,"app-filter"),t.TgZ(1,"scroll-view"),t.YNc(2,P,1,0,"app-loading-spinner",0),t.YNc(3,Z,7,4,"div",1),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",i.isLoading),t.xp6(1),t.Q6J("ngForOf",i.matchDays))},directives:[S,y.W,w.O5,x.g,w.sg,w.mk,F.W],pipes:[w.uU],styles:["table[_ngcontent-%COMP%]{margin:0 3%;width:94%;background-color:#f7f7f7}tr[_ngcontent-%COMP%]{background-color:#fffaf0}.match-day[_ngcontent-%COMP%]{text-align:center;font-size:large;margin:20px 0 10px}.finished[_ngcontent-%COMP%], .postponed[_ngcontent-%COMP%]{background-color:#f7f7f7}.tracked-team[_ngcontent-%COMP%]{font-weight:500;color:#b8860b}.col-competition[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:4vw;height:4vw;float:left}.col-home-team[_ngcontent-%COMP%]{width:30%;text-align:right}.col-home-team-score[_ngcontent-%COMP%]{width:5%;text-align:right}.col-separator[_ngcontent-%COMP%]{width:3%}.col-away-teamscore[_ngcontent-%COMP%]{width:5%;text-align:left}.col-away-team[_ngcontent-%COMP%]{width:30%;text-align:left}.col-track[_ngcontent-%COMP%]{width:10%}@media (max-width: 640px){.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:1.5vh;font-weight:500;padding:1px}.match-day[_ngcontent-%COMP%]{font-size:3vw}}"]}),o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},3372:(C,u,s)=>{s.d(u,{g:()=>r});var n=s(5e3);let r=(()=>{class l{}return l.\u0275fac=function(h){return new(h||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring"]],template:function(h,a){1&h&&(n.TgZ(0,"div",0),n._UZ(1,"div")(2,"div")(3,"div")(4,"div"),n.qZA())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:fixed;width:64px;height:64px;margin-left:-32px;top:45%}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #008b8b;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#008b8b transparent transparent transparent}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),l})()},6643:(C,u,s)=>{s.d(u,{W:()=>l});var n=s(5e3);const r=["*"];let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["scroll-view"]],ngContentSelectors:r,decls:2,vars:0,consts:[[1,"scroll-view"]],template:function(a,g){1&a&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},styles:[".scroll-view[_ngcontent-%COMP%]{position:fixed;top:130px;width:100%;overflow-y:scroll;bottom:0;text-align:center}"]}),t})()},2379:(C,u,s)=>{s.d(u,{W:()=>h});var n=s(5e3),r=s(9808);function l(a,g){if(1&a){const d=n.EpF();n.TgZ(0,"button",3),n.NdJ("click",function(){return n.CHM(d),n.oxw().untrack()}),n._uU(1,"Untrack"),n.qZA()}}function t(a,g){if(1&a){const d=n.EpF();n.TgZ(0,"button",4),n.NdJ("click",function(){return n.CHM(d),n.oxw().track()}),n._uU(1,"Track"),n.qZA()}}let h=(()=>{class a{constructor(){this.tracked=!1}track(){this.tracked=!this.tracked,this.tracker(this.itemId)}untrack(){this.tracked=!this.tracked,this.untracker(this.itemId)}}return a.\u0275fac=function(d){return new(d||a)},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-track"]],inputs:{tracked:"tracked",itemId:"itemId",tracker:"tracker",untracker:"untracker"},decls:3,vars:3,consts:[[3,"ngSwitch"],["type","button","class","btn btn-success",3,"click",4,"ngSwitchCase"],["type","button","class","btn btn-secondary",3,"click",4,"ngSwitchCase"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(d,m){1&d&&(n.TgZ(0,"div",0),n.YNc(1,l,2,0,"button",1),n.YNc(2,t,2,0,"button",2),n.qZA()),2&d&&(n.Q6J("ngSwitch",m.tracked),n.xp6(1),n.Q6J("ngSwitchCase",!0),n.xp6(1),n.Q6J("ngSwitchCase",!1))},directives:[r.RF,r.n9],styles:["button[_ngcontent-%COMP%]{font-size:1vw;width:100%}@media (max-width: 1024px){button[_ngcontent-%COMP%]{font-size:2vw}}"]}),a})()},4466:(C,u,s)=>{s.d(u,{m:()=>l});var n=s(9808),r=s(5e3);let l=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez]]}),t})()}}]);