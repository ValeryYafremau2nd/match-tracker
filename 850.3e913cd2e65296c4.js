"use strict";(self.webpackChunkfootball_reminder=self.webpackChunkfootball_reminder||[]).push([[850],{9569:(T,g,i)=>{i.d(g,{G:()=>O});var o=i(6100),h=i(2282),t=i(5e3),l=i(9351),p=i(5695),a=i(591);let f=(()=>{class n{constructor(){this.showFinishedSubject=new a.X("true"===localStorage.getItem("showFinished")),this.showPostponedSubject=new a.X("true"===localStorage.getItem("showPostponed")),this.showTrackedTeamsSubject=new a.X("true"===localStorage.getItem("showTrackedTeams"))}applyShowFinishedFilter(e){localStorage.setItem("showFinished",e),this.showFinishedSubject.next(e)}applyShowPostponedFilter(e){localStorage.setItem("showPostponed",e),this.showPostponedSubject.next(e)}applyShowTrackedTeamsFilter(e){localStorage.setItem("showTrackedTeams",e),this.showTrackedTeamsSubject.next(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var r=i(3075),w=i(2368),_=i(9808);function v(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"mat-slide-toggle",8),t.NdJ("change",function(){return t.CHM(e),t.oxw().showTrackedTeamsFilter()}),t._uU(2," Show tracked teams "),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.showCheckedTeamsCheckboxValue)}}let S=(()=>{class n{constructor(e,s,d){this.filterService=e,this.navState=s,this.isFavourite=!1,localStorage.getItem("showTrackedTeams")||this.filterService.applyShowTrackedTeamsFilter(!0),localStorage.getItem("showFinished")||this.filterService.applyShowFinishedFilter(!0),localStorage.getItem("showPostponed")||this.filterService.applyShowPostponedFilter(!0),this.showCheckedTeamsCheckboxValue="true"===localStorage.getItem("showTrackedTeams"),this.showFinishedCheckboxValue="true"===localStorage.getItem("showFinished"),this.showPostponedCheckboxValue="true"===localStorage.getItem("showPostponed"),this.filterGroup=d.group({showFinished:this.showFinishedCheckboxValue,showPostponed:this.showPostponedCheckboxValue,showTrackedTeams:this.showCheckedTeamsCheckboxValue})}ngOnInit(){this.isFavourite="favourite"===this.navState.getCurrentState().mode}showFinishedFilter(){this.filterService.applyShowFinishedFilter(this.filterGroup.value.showFinished)}showPostponedFilter(){this.filterService.applyShowPostponedFilter(this.filterGroup.value.showPostponed)}showTrackedTeamsFilter(){this.filterService.applyShowTrackedTeamsFilter(this.filterGroup.value.showTrackedTeams)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f),t.Y36(p.b),t.Y36(r.qu))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-filter"]],decls:11,vars:4,consts:[[1,"match-filter"],[1,"form-inline",3,"formGroup"],[1,"form-group","mb-3"],["formControlName","showFinished",3,"checked","change"],[2,"color","burlywood"],["formControlName","showPostponed",3,"checked","change"],[2,"color","cornsilk"],["class","form-group mb-3",4,"ngIf"],["formControlName","showTrackedTeams",3,"checked","change"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"mat-slide-toggle",3),t.NdJ("change",function(){return s.showFinishedFilter()}),t.TgZ(4,"span",4),t._uU(5,"Show finished"),t.qZA()()(),t.TgZ(6,"div",2)(7,"mat-slide-toggle",5),t.NdJ("change",function(){return s.showPostponedFilter()}),t.TgZ(8,"span",6),t._uU(9,"Show postponed"),t.qZA()()(),t.YNc(10,v,3,1,"div",7),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("formGroup",s.filterGroup),t.xp6(2),t.Q6J("checked",s.showFinishedCheckboxValue),t.xp6(4),t.Q6J("checked",s.showPostponedCheckboxValue),t.xp6(3),t.Q6J("ngIf",s.isFavourite))},directives:[r._Y,r.JL,r.sg,w.Rr,r.JJ,r.u,_.O5],styles:[".match-filter[_ngcontent-%COMP%]{position:fixed;top:100px;width:100%;height:30px;background-color:#008b8b;padding-left:30px;color:#fff;font-weight:400}form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{margin-right:30px}@media (max-width: 640px){.match-filter[_ngcontent-%COMP%]{font-size:1.5vh;margin:0 5px}}"]}),n})();var C=i(3372),F=i(2379);function y(n,c){1&n&&t._UZ(0,"app-loading-spinner")}const x=function(n,c){return{finished:n,postponed:c}},b=function(n){return{"tracked-team":n}};function P(n,c){if(1&n&&(t.TgZ(0,"tr",6)(1,"th",7),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td",8),t._uU(5),t.qZA(),t.TgZ(6,"td",9),t._uU(7),t.qZA(),t.TgZ(8,"td",10),t._uU(9,":"),t.qZA(),t.TgZ(10,"td",11),t._uU(11),t.qZA(),t.TgZ(12,"td",12),t._uU(13),t.qZA(),t.TgZ(14,"td",7),t._UZ(15,"app-track",13),t.qZA()()),2&n){const e=c.$implicit,s=t.oxw(2);t.Q6J("ngClass",t.WLB(15,x,"FINISHED"===e.status,"POSTPONED"===e.status)),t.xp6(2),t.Oqu(t.xi3(3,12,e.utcDate,"shortTime")),t.xp6(2),t.Q6J("ngClass",t.VKq(18,b,e.homeTeam.tracked)),t.xp6(1),t.Oqu(e.homeTeam.name),t.xp6(2),t.Oqu(e.score.fullTime.homeTeam),t.xp6(4),t.Oqu(e.score.fullTime.awayTeam),t.xp6(1),t.Q6J("ngClass",t.VKq(20,b,e.awayTeam.tracked)),t.xp6(1),t.Oqu(e.awayTeam.name),t.xp6(2),t.Q6J("itemId",e.id)("tracker",s.trackMatch.bind(s))("untracker",s.untrackMatch.bind(s))("tracked",e.tracked)}}function M(n,c){if(1&n&&(t.TgZ(0,"div")(1,"div",3),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"table",4)(5,"tbody"),t.YNc(6,P,16,22,"tr",5),t.qZA()()()),2&n){const e=c.$implicit;t.xp6(2),t.Oqu(t.lcZ(3,2,e._id)),t.xp6(4),t.Q6J("ngForOf",e.matches)}}let O=(()=>{class n{constructor(e,s,d){this.store=e,this.navStateService=s,this.filterService=d,this.matchDays=[],this.isLoading=!0;const u=this.navStateService.getCurrentState();e.dispatch("leagues"!==u.mode?new h.Xq:new o.nQ(u.league))}trackMatch(e){this.store.dispatch(new h.kC(e))}untrackMatch(e){this.store.dispatch(new h.ot(e))}ngOnInit(){this.filterService.showFinishedSubject.subscribe(s=>{this.showFinishedSubject=s,this.matchDays=this.applyFilters()}),this.filterService.showPostponedSubject.subscribe(s=>{this.showPostponedSubject=s,this.matchDays=this.applyFilters()}),this.filterService.showTrackedTeamsSubject.subscribe(s=>{this.showTrackedTeamsSubject=s,this.matchDays=this.applyFilters()});const e=this.navStateService.getCurrentState();this.isLoading=!0,this.storeSub="leagues"===e.mode?this.store.select("leagues").subscribe(s=>{const u=this.navStateService.getCurrentState().league,m=s.leagues.find(k=>k.id===+u);this.notFilteredMatches=m?m.matches:[],this.matchDays=this.applyFilters(),void 0!==this.matchDays&&(this.isLoading=!1)}):this.store.select("favourite").subscribe(s=>{this.notFilteredMatches=s.matches,this.matchDays=this.applyFilters(),void 0!==this.matchDays&&(this.isLoading=!1)})}ngOnDestroy(){this.storeSub.unsubscribe()}applyFilters(){return this.notFilteredMatches?this.notFilteredMatches.map(d=>{const u=Object.assign({},d);return u.matches=u.matches.filter(m=>(!!this.showTrackedTeamsSubject||m.tracked||!(m.homeTeam.tracked||m.awayTeam.tracked))&&(!!this.showFinishedSubject||!("FINISHED"===m.status))&&(!!this.showPostponedSubject||!("POSTPONED"===m.status))),u}).filter(d=>d.matches.length):void 0}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.yh),t.Y36(p.b),t.Y36(f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-matches"]],decls:4,vars:2,consts:[[1,"scroll-view",2,"text-align","center"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"match-day"],[1,"table"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[2,"width","10%"],[2,"width","28%","text-align","right",3,"ngClass"],[2,"width","5%","text-align","right"],[2,"width","4%"],[2,"width","5%","text-align","left"],[2,"width","28%","text-align","left",3,"ngClass"],[2,"float","right",3,"itemId","tracker","untracker","tracked"]],template:function(e,s){1&e&&(t._UZ(0,"app-filter"),t.TgZ(1,"div",0),t.YNc(2,y,1,0,"app-loading-spinner",1),t.YNc(3,M,7,4,"div",2),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",s.isLoading),t.xp6(1),t.Q6J("ngForOf",s.matchDays))},directives:[S,_.O5,C.g,_.sg,_.mk,F.W],pipes:[_.uU],styles:["table[_ngcontent-%COMP%]{margin:0 3%;width:94%;background-color:#f7f7f7}.match-day[_ngcontent-%COMP%]{text-align:center;font-size:large;margin:20px 0 10px}.finished[_ngcontent-%COMP%]{background-color:#deb887}.postponed[_ngcontent-%COMP%]{background-color:#fff8dc}.tracked-team[_ngcontent-%COMP%]{color:#fff;background-color:#008b8b}.scroll-view[_ngcontent-%COMP%]{position:fixed;top:130px;width:100%;overflow-y:scroll;bottom:0}@media (max-width: 640px){table[_ngcontent-%COMP%]{font-size:1vh}.match-day[_ngcontent-%COMP%]{font-size:3vw}}"]}),n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},3372:(T,g,i)=>{i.d(g,{g:()=>h});var o=i(5e3);let h=(()=>{class t{}return t.\u0275fac=function(p){return new(p||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring",2,"position","fixed","top","45%"]],template:function(p,a){1&p&&(o.TgZ(0,"div",0),o._UZ(1,"div")(2,"div")(3,"div")(4,"div"),o.qZA())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #15a807;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#15a807 transparent transparent transparent}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),t})()},2379:(T,g,i)=>{i.d(g,{W:()=>p});var o=i(5e3),h=i(9808);function t(a,f){if(1&a){const r=o.EpF();o.TgZ(0,"button",3),o.NdJ("click",function(){return o.CHM(r),o.oxw().untrack()}),o._uU(1,"Untrack"),o.qZA()}}function l(a,f){if(1&a){const r=o.EpF();o.TgZ(0,"button",4),o.NdJ("click",function(){return o.CHM(r),o.oxw().track()}),o._uU(1,"Track"),o.qZA()}}let p=(()=>{class a{constructor(){this.tracked=!1}track(){this.tracked=!this.tracked,this.tracker(this.itemId)}untrack(){this.tracked=!this.tracked,this.untracker(this.itemId)}}return a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-track"]],inputs:{tracked:"tracked",itemId:"itemId",tracker:"tracker",untracker:"untracker"},decls:3,vars:3,consts:[[3,"ngSwitch"],["type","button","class","btn btn-success",3,"click",4,"ngSwitchCase"],["type","button","class","btn btn-secondary",3,"click",4,"ngSwitchCase"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(r,w){1&r&&(o.TgZ(0,"div",0),o.YNc(1,t,2,0,"button",1),o.YNc(2,l,2,0,"button",2),o.qZA()),2&r&&(o.Q6J("ngSwitch",w.tracked),o.xp6(1),o.Q6J("ngSwitchCase",!0),o.xp6(1),o.Q6J("ngSwitchCase",!1))},directives:[h.RF,h.n9],styles:["button[_ngcontent-%COMP%]{font-size:1vw}@media (max-width: 1024px){button[_ngcontent-%COMP%]{font-size:2vw}}"]}),a})()},4466:(T,g,i)=>{i.d(g,{m:()=>t});var o=i(9808),h=i(5e3);let t=(()=>{class l{}return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[[o.ez]]}),l})()}}]);