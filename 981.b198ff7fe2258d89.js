"use strict";(self.webpackChunkfootball_reminder=self.webpackChunkfootball_reminder||[]).push([[981],{1981:(L,c,n)=>{n.r(c),n.d(c,{FavouriteModule:()=>y});var i=n(1553),s=n(2282),d=n(1307),t=n(5e3),l=n(9351),p=n(6643),m=n(9808),h=n(3372),g=n(2379);function v(e,a){1&e&&t._UZ(0,"app-loading-spinner")}function f(e,a){if(1&e&&(t.TgZ(0,"tr")(1,"td",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"th",3),t._uU(4),t.qZA(),t.TgZ(5,"td",5),t._uU(6),t.qZA(),t.TgZ(7,"td",5),t._uU(8),t.qZA(),t.TgZ(9,"td",6),t._UZ(10,"app-track",7),t.qZA()()),2&e){const o=a.$implicit,r=t.oxw();t.xp6(2),t.Q6J("src",o.crestUrl,t.LSH),t.xp6(2),t.Oqu(o.tla),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.Oqu(o.area.name),t.xp6(2),t.Q6J("itemId",o.id)("tracker",r.trackTeam.bind(r))("untracker",r.untrackTeam.bind(r))("tracked",!0)}}let T=(()=>{class e{constructor(o){this.store=o,this.isLoading=!0}ngOnInit(){this.isLoading=!0,this.teams=void 0,this.store.select("favourite").pipe((0,d.T)(1)).subscribe(o=>{this.teams=o.teams,void 0!==this.teams&&(this.isLoading=!1)}),this.store.dispatch(new s.n_)}trackTeam(o){this.store.dispatch(new s.FU(o))}untrackTeam(o){this.store.dispatch(new s.iR(o))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(l.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-teams"]],decls:4,vars:2,consts:[[4,"ngIf"],[1,"table"],[4,"ngFor","ngForOf"],[1,"team-col"],[1,"team-logo",3,"src"],[1,"team-col","col-center"],[1,"team-col","col-track"],[2,"float","right","width","100%",3,"itemId","tracker","untracker","tracked"]],template:function(o,r){1&o&&(t.TgZ(0,"scroll-view"),t.YNc(1,v,1,0,"app-loading-spinner",0),t.TgZ(2,"table",1),t.YNc(3,f,11,8,"tr",2),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("ngIf",r.isLoading),t.xp6(2),t.Q6J("ngForOf",r.teams))},directives:[p.W,m.O5,h.g,m.sg,g.W],styles:["table[_ngcontent-%COMP%]{width:auto;max-width:94%;margin:auto}.team-col[_ngcontent-%COMP%]{width:20%}.col-center[_ngcontent-%COMP%]{text-align:center}.team-logo[_ngcontent-%COMP%]{height:30px;width:30px}.col-track[_ngcontent-%COMP%]{width:15%}@media (max-width: 640px){.table[_ngcontent-%COMP%]{font-size:1.5vh;font-weight:500}}"]}),e})();var F=n(9569),u=n(1847),x=n(2986);const C=[{path:"",redirectTo:"/favourite/matches",pathMatch:"full"},{path:"teams",component:T,data:{animation:"FavouriteTeamsPage"}},{path:"matches",component:F.G,data:{animation:"FavouriteMatchesPage"}},{path:"leagues",resolve:[(()=>{class e{constructor(o,r){this.store=o,this.actions$=r}resolve(o,r){return this.store.dispatch(new s.pK),this.actions$.pipe((0,u.l4)(s.ET),(0,x.q)(1))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(l.yh),t.LFG(u.eX))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()]}];let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.Bz.forChild(C)],i.Bz]}),e})();var O=n(4466);let y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.Bz,M,O.m]]}),e})()}}]);