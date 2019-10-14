var fn_addin=function(r,c,e){var d=d||{};return d.styles=d.styles||{},d.commands=d.commands||{},d.dependencies=e||d.dependencies||{},d.styles.style=function(){},d.views=d.views||{},d.collect=d.collect||{},d.models=d.models||{},d.templates=d.templates||{},d.info={widget:!0,placeholderType:"metric",id:"focuses",elementId:"focuses",region:"center-below",order:"append",class:"app-container focuses",addin:"2f0cff85-d25a-4326-b7cf-5239a3029956",visibleSetting:"focusVisible"},r.console.log(r.elapsed()+": "+d.info.id+" started"),d.templates=d.templates||{},d.templates["focus-prompt-template"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,o,s){return'<h3>What is your main focus for today?</h3>\n<input type="text" data-test="focus-input" autocomplete="off">\n'},useData:!0}),d.templates["focus-template"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,o,s){var i,n=t.helperMissing,c="function",a=this.escapeExpression;return'<div class="focus-container">\n\t<div class="container-height-setter">\n\t\t\x3c!-- Should match the height of the focus prompt to maintain consistent container height --\x3e\n\t\t<h3>What is your main forcus for today?</h3>\n\t\t\x3c!-- This is not the real focus prompt --\x3e\n\t\t<input>\n\t</div>\n\t<div class="focus-content">\n\t\t<h3 class="focus-title">'+a(typeof(i=null!=(i=t.day||(null!=e?e.day:e))?i:n)==c?i.call(e,{name:"day",hash:{},data:s}):i)+'</h3>\n\t\t<div class="focus-row has-centered-3-col">\n\t\t\t<span class="side-col col-checkbox">\n\t\t\t\t<span class="control checkbox" data-test="complete">\n\t\t\t\t\t<i class="icon icon-checkbox-empty focus-open"></i><i class="icon icon-checkbox focus-done"></i>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t\t<span class="center-col todays-focus" data-test="focus-active">'+a(typeof(i=null!=(i=t.focus||(null!=e?e.focus:e))?i:n)==c?i.call(e,{name:"focus",hash:{},data:s}):i)+'</span>\n\t\t\t<span class="side-col col-delete">\n\t\t\t\t<span class="control delete" data-test="delete">\n\t\t\t\t\t<span class="icon-wrapper dash-icon">\n\t\t\t\t\t\t<svg class="icon icon-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"/></svg>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</div>\n\t</div>\n</div>\n'},useData:!0}),d.templates["focuses-template"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,o,s){return'<div class="focus-wrapper has-dash-icon"></div>\n\n<div class="team-focus-wrapper"></div>\n\n<div class="focus-message-wrapper">\n\t<div class="message focus-message" data-test="focus-message">\n\t\t<i class="loading-icon"></i>Loading...</span>\n\t</div>\n</div>\n'},useData:!0}),d.styles=d.styles||{},d.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML='.focuses .control,.focuses .icon-wrapper{vertical-align:top}.focuses{width:100%;font-size:187.5%}.focuses::before{height:335px;width:100%;position:absolute;top:-92px;left:0;z-index:-1;opacity:0;transition:opacity .2s;background:url(../img/overlay-focus.png) 50% 0 no-repeat;background-size:contain;content:" "}.focuses .focus,.focuses .focus p{position:relative}.focuses.shadow::before{opacity:1}.focus-wrapper{display:flex;justify-content:center;min-height:93px}.focuses .focus{width:100%;display:inline-block!important;overflow:visible}.focuses .focus p,.focuses h3{padding:0;margin:0}.focuses input{font-size:120%;line-height:120%}.focuses .prompt{padding-bottom:6px}.focuses .prompt h3{font-size:2.1875rem;font-weight:300}.focuses .prompt input{width:100%;padding-top:4px;display:block;background:0;border:0;border-bottom:2px solid #fff;color:#fff;font-weight:500;outline:0;text-align:center;transition:border-color .2s ease}.focuses .delete,.focuses .icon-wrapper:after{height:30px;width:30px}.focuses .focus h3{margin:17px 0 3px;font-size:70%;line-height:120%;text-transform:uppercase}.focuses .focus-row{display:flex;align-items:baseline;justify-content:center;font-size:120%;line-height:120%}.focuses .todays-focus{max-width:87%;margin:3px 0;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.focuses .complete .todays-focus{text-decoration:line-through;opacity:.85}.focuses .control{display:inline-flex;opacity:0;border-radius:100px;cursor:pointer;transition:all .1s ease;transform-origin:50% 50%}.focus-wrapper:hover .control{opacity:.8}.focuses .checkbox:hover,.focuses .complete .control{opacity:1}.focuses .col-checkbox{justify-content:flex-end}.focuses .checkbox{margin-right:.15em;padding:10px;position:relative;border:none;font-size:80%;line-height:1;text-align:left;text-shadow:0 0 15px rgba(0,0,0,.3)}.focuses .focus-open{margin-left:-1.7px}.focuses .complete .focus-done,.focuses .focus-open{display:block}.focuses .focus-done{display:none}.focuses .complete .focus-done{opacity:.85}.focuses .checkbox .focus-done{position:absolute}.focuses .control .icon-wrapper .icon{opacity:.8}.focuses .icon-wrapper:hover .icon{opacity:1}.focuses .col-delete{padding-top:2px;align-self:center}.focuses .delete{margin-left:14px;align-self:center;font-size:70%}.focuses .delete .icon{height:10px;width:10px;transition:transform .1s ease}.focuses .complete .delete .icon{transform:rotate(45deg)}.focuses .focus-container{width:100%}.focuses .container-height-setter{padding-bottom:6px;display:flex;flex-direction:column;visibility:hidden}.focuses .container-height-setter h3{margin:0;font-weight:300;font-size:2.1875rem;line-height:inherit}.focuses .container-height-setter input{padding:4px 0 1px;border:none;border-bottom:2px solid #fff;font-size:120%}.focuses .focus-content{width:100%;position:absolute;top:0}.focus-message-wrapper{position:relative}.focus-message{display:none;position:absolute;top:10px;right:0;left:0;font-size:1.125rem;line-height:1}.focus-message .loading{margin-right:10px;vertical-align:-5%}.focuses.loading{display:block}.focus-message .retry{margin-left:-2px;padding:4px;cursor:pointer;text-decoration:underline;transition:var(--a-default)}.focus-message .retry:hover{opacity:.7}.focuses .loading input{border-color:rgba(255,255,255,.5);color:transparent}.focuses .cached .control{display:none}.focuses .cached .todays-focus{max-width:none}@media screen and (max-height:650px){.focuses .focus-row{font-size:110%}}@media screen and (max-height:600px){.focuses .prompt input{width:15em}}@media screen and (max-height:550px){.focuses .prompt input{width:17.2em}}',document.getElementsByTagName("head")[0].appendChild(e)},d.collect.FocusesBase=r.collect.SyncedCollection.extend({saveOptions:{},attributes:{},successfulLoad:!1,loadingFromServer:!0,fetchedOnce:!1,initialize:function(e,t){t=t||{},this.on("reset",this.onCollectionReset,this),this.on("change",this.onModelChanged,this),t.name="focus",t.model=this.model,t.apiUrl=this.url,r.conditionalFeatures.featureEnabled("offlineDataOnly")&&(t.offlineOnly=!0,this.saveOptions.patch=!1),this.url=null,r.collect.SyncedCollection.prototype.initialize.call(this,e,t)},fetch:function(e){this.fetchedOnce=!0,r.collect.SyncedCollection.prototype.fetch.call(this,e)},onCollectionReset:function(){this.successfulLoad=!0,this.loadingFromServer=!1,this.trigger("loadingFromServerChanged")},onModelChanged:function(e){if(e){var t=e.changedAttributes(),o=_.keys(t);_.without(o,"archived","archivedDate")}},comparator:function(e){var t=e.get("completedDate");return(t=t||e.get("createdDate"))?-Date.parse(t):0},activeFocus:function(){var o=this;return new Promise(function(e,t){e(o.activeFocusBase())})},activeFocusBase:function(){if(this.loadingFromServer)return this.fetchedOnce||this.fetch({reset:!0}),this.recentFocus();if(0===this.length)return null;var o=null,e=getActiveDateString(),t=this.where({completed:!1,archived:!1,forDate:e});if(1===t.length)o=t[0];else if(0===t.length)if(1===(t=this.where({completed:!0,archived:!1,forDate:e})).length)o=t[0];else if(0===t.length)return null;return null==o&&_.each(t,function(e){if(null==o)o=e;else{var t=e.get("completedDate");o.get("completedDate")<t&&(o=e)}}),o},recentFocus:function(){var e=this.max(function(e){return t(e)?0:new Date(e.get("completedDate")||e.get("createdDate")).getTime()});return e&&e.collection&&!t(e)?e:null;function t(e){return e.get("archived")||e.get("deleted")||e.get("forDate")!==getActiveDateString()}}}),d.collect.FocusesLegacy=Backbone.Collection.extend({localStorage:new Backbone.LocalStorage("momentum-focus"),saveOptions:{},attributes:{},successfulLoad:!1,loadingFromServer:!0,fetchedOnce:!1,initialize:function(){this.model=d.models.FocusBase,this.on("reset",this.onReset,this),this.on("add",this.onAdd,this),this.on("change",this.onModelChanged,this)},onReset:function(){this.loadingFromServer=!1,this.fixNullForDate(),this.trigger("loadingFromServerChanged")},fetch:function(e){this.fetchedOnce=!0;return e=_.extend(e||{},{}),Backbone.Collection.prototype.fetch.call(this,e)},onModelChanged:function(e){var t=e.changedAttributes(),o=_.keys(t);0<_.without(o,"archived","archivedDate").length&&this.saveCachedFocus(e)},comparator:function(e){var t=e.get("completedDate");return(t=t||e.get("createdDate"))?-Date.parse(t):0},activeFocus:function(){var o=this;return new Promise(function(e,t){e(o.activeFocusBase())})},activeFocusBase:function(){if(this.loadingFromServer)return this.fetchedOnce||this.fetch({reset:!0}),this.cachedFocus();if(0===this.length)return localStorage.removeItem("cachedFocus"),null;var o=null,e=getActiveDateString(),t=this.where({completed:!1,archived:!1,forDate:e});if(1===t.length)o=t[0];else if(0===t.length)if(1===(t=this.where({completed:!0,archived:!1,forDate:e})).length)o=t[0];else if(0===t.length)return localStorage.removeItem("cachedFocus"),null;return null==o&&_.each(t,function(e){if(null==o)o=e;else{var t=e.get("completedDate");o.get("completedDate")<t&&(o=e)}}),o?this.saveCachedFocus(o):localStorage.removeItem("cachedFocus"),o},saveCachedFocus:function(e){localStorage.cachedFocus=JSON.stringify(e)},cachedFocus:function(){if(localStorage.cachedFocus){var e=JSON.parse(localStorage.cachedFocus),t=getActiveDateString();if(e&&e.forDate===t)return e.cached=!0,new this.model(e)}return null},fixNullForDate:function(){var e=this.where({archived:!1,forDate:null});e&&0<e.length&&_.each(e,function(e){var t=e.get("createdDate");if(t){var o=Date.parse(t);activeDateStringForDate(o)!=getActiveDateString()&&e.archive()}else e.archive()},focus)}}),d.collect.Focuses=d.collect.FocusesBase.extend({url:r.globals.urlRoot+"focus",saveOptions:{patch:!1},initialize:function(){this.model=d.models.Focus,d.collect.FocusesBase.prototype.initialize.apply(this,arguments)},shouldIgnoreSync:function(e){return!e.get("focus")||0===e.get("focus").length},activeFocus:function(){var c=this;return c.fetchedOnce||c.fetch({reset:!0}),new Promise(function(n,e){if(r.conditionalFeatures.featureEnabled("pinfocus")&&r.models.customization.getComputedSetting("autoFocus")){var t=c.recentFocus();r.widgetManager.getWidgetAsync("todo").then(function(e){var t=e.getTopTodo();if(t){var o={};o.focus=t.get("title"),o.day="today",o.archived=!1,o.completed=t.get("done"),o.completedDate=t.get("completedDate"),o.todoId=t.get("id")||t.id;var s=t.collection.parentList.project;o.listId=t.get("listId"),o.projectId=t.get("projectId")||s.id,o.providerId=s.provider.id,o.forDate=getActiveDateString(),o.unsyncable=!0;var i=c.findWhere({todoId:o.todoId,archived:!1});c.archiveAll(!1,i),i?i.save(o,{ignoreRender:!0}):i=c.create(o,{ignoreRender:!0}),n(i)}else!c.fetchedOnce||c.successfulLoad&&void 0!==t?n(c.activeFocusBase()):n(c.recentFocus())}),c.fetchedOnce||setTimeout(function(){n(t)},200)}else n(c.activeFocusBase())})},archiveAll:function(t,o){d.collect.focuses.models.map(function(e){!e.get("completed")&&e.get("todoId")&&e!==o?e.destroy({silent:!0}):t&&e.save({archived:!0},{ignoreRender:!0})})}}),d.models.FocusBase=Backbone.Model.extend({defaults:{focus:"",day:"",forDate:null,archived:!1,archivedDate:null,completed:!1,completedDate:null,cached:!1},saveOptions:function(){return this.collection&&this.collection.saveOptions?this.collection.saveOptions:{}},initialize:function(e){e=e||{},this.attributes.createdDate=r.date(),Backbone.Model.prototype.initialize.call(this,e)},archive:function(){var e=r.date();this.save({archived:!0,archivedDate:e},this.saveOptions())},toggleCompleted:function(){var e=this.saveOptions(),t=!this.get("completed");return this.save({completed:t,completedDate:t?null:r.date()},e),t}}),d.models.Focus=d.models.FocusBase.extend({idAttribute:"csid",initialize:function(e){e=e||{},this.attributes.createdDate=r.date(),this.idAttribute=this.collection.idAttribute||"csid",this.serverIdAttribute=this.collection.serverIdAttribute||"id",Backbone.Model.prototype.initialize.call(this,e)},urlRoot:function(){return this.collection?null:r.globals.urlRoot+"focus"},toggleCompleted:function(){var s=this,e=this.saveOptions(),i=!this.get("completed");if(r.conditionalFeatures.featureEnabled("pinfocus")){var n=s.get("todoId");e.success=function(){r.trigger("focus:toggled",i),s.get("refreshTodo")&&n&&r.trigger("todo:refresh",n)},e.error=function(e,t,o){200==t.status&&(r.trigger("focus:toggled",i),s.get("refreshTodo")&&n&&r.trigger("todo:refresh",n))};var t={completed:i,unsyncable:!1,completedDate:i?r.date():null};n&&(t.todoId=this.get("todoId"),t.projectId=this.get("projectId"),t.providerId=this.get("providerId"),t.listId=this.get("listId"),t.focus=this.get("focus")),this.save(t,e),n&&r.trigger("todo:set:done",n,i)}else this.save({completed:i,unsyncable:!1,completedDate:i?null:r.date()},e);return i},archive:function(e){var t=r.date(),o=this.saveOptions();e&&(o.nextViewIsSet=!0),this.save({archived:!0,archivedDate:t},o),r.conditionalFeatures.featureEnabled("pinfocus")&&r.models.customization.getComputedSetting("autoFocus")&&r.models.customization.set("autoFocus",!1)},saveOptions:function(){return this.collection&&this.collection.saveOptions?this.collection.saveOptions:{patch:!1}}}),d.views.Focus=Backbone.View.extend({tagName:"div",attributes:{class:"focus"},template:d.templates["focus-template"],events:{"click .delete":"destroy","click .checkbox":"toggleCompleted"},initialize:function(e){e&&e.skipRender||this.render(),this.listen()},changeModel:function(e){this.stopListening(),this.model=e,this.listen()},listen:function(){this.listenTo(this.model,"change",this.render),r.conditionalFeatures.featureEnabled("pinfocus")&&(this.listenTo(r,"todo:changed",this.todoChanged),this.listenTo(r,"todo:changing",this.todoChanging),this.listenTo(r,"focus:toggled",this.focusToggled))},todoChanged:function(e,t){e==this.model.get("todoId")&&r.conditionalFeatures.featureEnabled("pinfocus")&&r.models.customization.getComputedSetting("autoFocus")&&d.collect.focuses&&t.hasOwnProperty("done")&&this.model.save({completed:t.done,completedDate:t.completedDate})},todoChanging:function(e,t){e==this.model.get("todoId")&&(t.hasOwnProperty("done")&&this.model.save({completed:t.done,completedDate:t.completedDate}),t.hasOwnProperty("title")&&this.model.save("focus",t.title),t.hasOwnProperty("done")&&this.displayAutoPinMessage(t.done))},render:function(){if(!this.model.get("archived")){var e={focus:r.utils.captionFormatter(this.model.get("focus")),day:"Today"};return this.$el.html(this.template(e)),this.model.changed.hasOwnProperty("completed")?this.$el.toggleClass("complete",this.model.changed.completed):this.$el.toggleClass("complete",this.model.get("completed")),this.$el.toggleClass("cached",this.model.get("cached")),this}},displayAutoPinMessage:function(e){r.conditionalFeatures.featureEnabled("pinfocus")&&r.models.customization.getComputedSetting("autoFocus")&&d.views.focuses.displayLoadingMessage(e)},focusToggled:function(e){e&&r.conditionalFeatures.featureEnabled("pinfocus")&&r.models.customization.getComputedSetting("autoFocus")&&(this.displayAutoPinMessage(e),d.collect.focuses&&d.collect.focuses.fetch())},destroy:function(){if(this.$el.hasClass("complete"))r.sendEvent("Focus","Add New"),r.trigger("renderPrompt");else{this.model.archive(!0),r.sendEvent("Focus","Delete");var e=this;this.$el.mFadeOut(500,!0,function(){e.destroyed=!0,e.remove(),r.trigger("deleteFocus")})}},removeView:function(){this.remove(),this.unbind()},toggleCompleted:function(){d.views.focuses.randomizeCongratsMessage();var e=this.model.toggleCompleted();d.views.focuses.displayLoadingMessage(e),r.conditionalFeatures.featureEnabled("serverfocus")||setTimeout(function(){d.views.focuses.dismissConnectionMessage()},3e3),this.$el.toggleClass("complete",e),r.sendEvent("Focus","Done")}}),d.views.Focuses=Backbone.View.extend({attributes:{id:"focuses",class:d.info.class},template:d.templates["focuses-template"],events:{"mouseover .todays-focus":"onMouseOver","click .todays-focus":"onClickFocus","click .prompt":"onClickFocus","click .retry":"retryConnection"},offline:!0,loading:!1,clickedOnce:!1,retrying:!0,congratsMessageActive:!1,initialize:function(){this.congratsList=["Great work!","Good job!","Nice.","Way to go!"],r.appsReady?this.showShadow():this.listenTo(r,"appsReady",this.showShadow,this),this.listenTo(r,"focus:pin",this.focusPin,this),this.listenTo(r,"newDay",this.changeDay,this),this.listenTo(r,"renderPrompt",this.renderPrompt,this),this.listenTo(r,"deleteFocus",this.setNewFocus,this),this.listenTo(r,"todo:loadingStateChange",this.todoLoadingStateChanged),this.listenTo(r,"todo:globalChange",this.todoLoadingStateChanged),this.listenTo(d.collect.focuses,"change:archived",this.todayArchived),this.listenTo(d.collect.focuses,"reset refresh",this.collectionReady),this.listenTo(d.collect.focuses,"sync",this.successfulConnection),this.listenTo(this.collection,"request",this.collectionRequest),this.listenTo(this.collection,"error",this.collectionError),this.listenTo(r.models.customization,"change:focusVisible",this.visibleChanged),this.listenTo(r.models.customization,"change:autoFocus",this.autoFocusChanged),this.listenTo(r,"todo:showAssignedTodosOnlyChanged",this.onShowAssignedTodosOnlyChanged),this.listenTo(r,"todo:sectionExpansion",this.onSectionExpansion),this.renderedOnce=!1,this.lastStateFocused=!1,this.randomizeCongratsMessage(),this.teamGoalEnabled=!1,r.conditionalFeatures.featureEnabled("offlineDataOnly")&&(this.offlineOnly=!0),r.conditionalFeatures.featureEnabled("team")&&(r.widgetManager.loadWidget("teamFocus"),this.teamGoalEnabled=!0),this.render()},showShadow:function(){var e=this;setTimeout(function(){e.$el.addClass("shadow")},50)},focusPin:function(e){r.models.customization.getComputedSetting("autoFocus")&&r.models.customization.set({autoFocus:!1},{ignoreRender:!0}),d.views.focuses.displayConnectingText('<i class="loading-icon"></i>Saving...',!0);var t=getActiveDateString(),o=e.collection.parentList.project,s={todoId:e.get("id")||e.id,focus:e.get("title"),listId:e.get("listId"),projectId:e.get("projectId")||o.id,providerId:o.provider.id,unsyncable:!0,forDate:t,day:"today",archived:!1,completed:e.get("done"),completedDate:e.get("completedDate"),createdDate:r.now()};if(this.offlineOnly){this.archiveAll();var i=d.collect.focuses.findWhere({todoId:s.todoId,archived:!1});return i?i.save(s,{ignoreRender:!0}):d.collect.focuses.create(s,{ignoreRender:!0}),void this.render()}var n=this;c.ajax({type:"POST",contentType:"application/json",data:JSON.stringify(s),beforeSend:setMomentumAuthHeader,url:r.globals.urlRootApi+"focus/pin"}).done(function(e){e.success&&!0===e.success&&(n.archiveAll(),d.views.focuses.successfulConnection(),r.models.customization.getComputedSetting("autoFocus")?r.models.customization.set("autoFocus",!1):d.collect.focuses.fetch({reset:!0}))}).fail(function(e,t){})},onMouseOver:function(){this.loading&&this.displayConnectingText(null,!0)},onClickFocus:function(){this.offline&&this.displayConnectingText(null,!0),this.clickedOnce=!0},visibleChanged:function(e){r.models.customization.getComputedSetting("focusVisible")?this.renderedOnce?this.$el.mFadeIn():this.render():this.$el.mFadeOut()},collectionRequest:function(){this.loading=!0,this.clickedOnce||this.connectingTextOverride},promptFocused:function(){this.loadedOnce||this.displayConnectingText()},displayConnectingText:function(e,t){if(e)this.connectingTextOverride=e;else if(this.offlineOnly)return;var o=this;function s(){o.$message.html(o.connectingTextOverride?o.connectingTextOverride:'<i class="loading-icon"></i>Loading...'),o.$message.addClass("loading"),o.$message.is(":visible")||o.$message.fadeIn(500)}this.teamGoalEnabled?r.trigger("focus:showMessage",function(){s()}):s()},randomizeCongratsMessage:function(){this.loadingMessage=this.congratsList[Math.floor(Math.random()*this.congratsList.length)]},displayLoadingMessage:function(e){var t=this;e?(this.displayConnectingText(this.loadingMessage,!0),this.congratsMessageActive=!0):this.displayConnectingText('<i class="loading-icon"></i> Loading...',!0),setTimeout(function(){t.congratsMessageActive=!1,t.dismissConnectionMessage(!1,null,!0)},2500)},todoLoadingStateChanged:function(e){e&&"Selected"===e||this.render()},onShowAssignedTodosOnlyChanged:function(){this.render()},onSectionExpansion:function(){this.render()},collectionError:function(e,t,o){200!==t.status?this.failedConnection():this.successfulConnection()},retryConnection:function(e){e.preventDefault(),e.stopPropagation(),this.displayConnectingText('<i class="loading-icon"></i>Loading...',!0),this.retrying=!0;var t=this;d.views.focusPrompt?r.syncCoordinator.pingApi(function(){t.successfulConnection(),d.views.focusPrompt&&d.views.focusPrompt.focusInput()},function(){t.failedConnection(!0)}):this.collection.fetch({reset:!0})},successfulConnection:function(){this.dismissConnectionMessage(!0),this.loading=!1,this.offline=!1,this.retrying=!1,this.loadedOnce=!0},failedConnection:function(e){this.loading=!1,this.offline=!0,this.render(),this.displayConnectingText('Trouble connecting… <span class="retry">Retry</span>',e||this.clickedOnce)},dismissConnectionMessage:function(e,t,o){if(o||!this.congratsMessageActive){var s=t;this.teamGoalEnabled&&(s=function(){r.trigger("focus:hideMessage"),t&&t()}),this.$message&&r.appsLoaded&&this.$message.fadeOut(e?0:300,s)}},parentReady:function(e){this.isParentReady=!0,(this.isCollectionReady||e)&&this.render()},collectionReady:function(){this.isCollectionReady=!0,this.isParentReady&&this.render(),this.successfulConnection()},renderPrompt:function(){this.setNewFocus(!0)},setNewFocus:function(e){this.archiveAll(),this.render(e),d.views.focusPrompt&&d.views.focusPrompt.focusInput(),this.dismissConnectionMessage()},archiveAll:function(e){d.collect.focuses.archiveAll&&d.collect.focuses.archiveAll(e)},autoFocusChanged:function(e,t){this.archiveAll(),t&&t.ignoreRender||this.render()},setFocusState:function(e){this.lastStateFocused==e?this.focusStateChanged=!1:this.focusStateChanged=!0,this.lastStateFocused=e},render:function(e){var c=!1,a=this;d.views.focusPrompt&&(c=d.views.focusPrompt.controlFocusedOnce),this.renderedOnce||(this.$el.attr("data-test","focus"),this.$el.mFadeIn(500).html(this.template()),this.$message=this.$(".message"),this.$focusWrapper=this.$(".focus-wrapper"));var l=this.renderedOnce&&r.readyForWidgets;return this.renderedOnce=!0,e?(this.dismissConnectionMessage(!1,null,!0),this.activateFocusPrompt(c),void this.triggerLoaded()):(this.collection.activeFocus().then(function(e){if(!e||!d.views.todayFocus||d.views.todayFocus.destroyed||d.views.todayFocus.model.id!==e.id||d.views.todayFocus.model.get("cached"))if(e){a.setFocusState(!0);var t=!1,o=null;if(!d.views.todayFocus||d.views.todayFocus.destroyed)t=!0,d.views.todayFocus&&(o=d.views.todayFocus);else if(d.views.todayFocus.model.id!==e.id){var s=d.views.todayFocus.model.get("todoId");s?s!==e.get("todoId")&&(t=!0,o=d.views.todayFocus):(t=!0,o=d.views.todayFocus)}else d.views.todayFocus.model.collection||(t=!0,o=d.views.todayFocus,l=!1);var i=!1;if(o&&(o.model.id===e.id||o.model.get("todoId")===e.get("todoId")&&e.get("todoId"))&&(i=!(o=null)),l=l&&(t&&!o||o&&!i),t){a.dismissConnectionMessage(),a.$el.find(".prompt").mFadeOut(500,!0),l&&o&&(setTimeout(function(){a.dismissConnectionMessage(!1,null,!0)},50),o.$el.mFadeOut(500,!0)),d.views.focusPrompt=null,i?d.views.todayFocus.changeModel(e):d.views.todayFocus=new d.views.Focus({model:e,skipRender:!0});var n=0<a.$el.find(".prompt").length;setTimeout(function(){if(n&&a.$el.find(".prompt").remove(),o&&o.removeView(),d.views.todayFocus){var e;e=l?d.views.todayFocus.render().$el.mFadeIn(500):d.views.todayFocus.render().$el;var t=a.$(".focus");0<t.length?t.replaceWith(e):a.$focusWrapper.append(e)}a.triggerLoaded()},500)}}else a.activateFocusPrompt(c),a.triggerLoaded()}),this)},triggerLoaded:function(){this.loadTriggered||(r.widgetManager.appReady(d.info.id),this.loadTriggered=!0)},activateFocusPrompt:function(e){this.setFocusState(!1),d.views.todayFocus&&(this.$(".focus").mHide().remove(),d.views.todayFocus=null),d.views.focusPrompt||(d.views.focusPrompt=new d.views.FocusPrompt({collection:this.collection}),this.$focusWrapper=this.$el.find(".focus-wrapper"),this.$focusWrapper.append(d.views.focusPrompt.render().$el.mFadeIn(this.focusStateChanged?500:0))),e&&d.views.focusPrompt.focusInput()},addToday:function(e){r.sendEvent("Focus","Save"),d.views.todayFocus=new d.views.Focus({model:e}),this.$focusWrapper.append(d.views.todayFocus.render().$el.mFadeIn(500)),this.$focus=this.$(".focus")},successfullyCreatedNewFocus:function(){d.views.focuses.successfulConnection(),this.render()},changeDay:function(){d.collect.focuses.fetch({reset:!0}),r.conditionalFeatures.featureEnabled("offlineDataOnly")&&this.archiveAll(!0)},todayArchived:function(e,t,o){o&&(o.nextViewIsSet||o.ignoreRender)||this.render()}}),d.views.FocusPrompt=Backbone.View.extend({tagName:"div",attributes:{class:"prompt"},template:d.templates["focus-prompt-template"],events:{click:"focusInput","focus input":"handleFocus","keypress input":"handleInput","keyup input":"handleKeyup","blur input":"handleBlur"},initialize:function(){this.focusedOnce=!1,this.listenTo(r,"globalEvent:toggleFocus",this.toggleShow),this.listenTo(r,"globalEvent:esc",this.hide),this.render()},render:function(){return this.$el.html(this.template()),this.$input=this.$el.find("input"),this.collection.loadingFromServer||this.$input.trigger("focus"),this},focusInput:function(){this.$input.trigger("focus")},handleFocus:function(e){this.focusedOnce=!0,d.views.focuses.promptFocused()},handleBlur:function(){this.focusedOnce=!1,this.$el.removeClass("loading")},handleInput:function(e){this.collection.loadingFromServer&&e.preventDefault(),this.clearHelpTimeout(),13==e.keyCode?this.save():this.startHelpTimeout()},handleKeyup:function(){0==this.getInput().length&&d.views.focuses.dismissConnectionMessage()},getInput:function(){return this.$input.val().trim()},inputTimeout:"",startHelpTimeout:function(){var e=this;this.inputTimeout=setTimeout(function(){e.displayHelpMessage()},5e3)},clearHelpTimeout:function(){0<this.inputTimeout&&clearTimeout(this.inputTimeout)},displayHelpMessage:function(){0<this.getInput().length&&d.views.focuses.displayConnectingText("Press enter to set your focus",!0)},save:function(){var e=this.getInput();if(e&&0!==e.length){var s=this;d.views.focuses.displayConnectingText('<i class="loading-icon"></i>Saving...',!0);var t=getActiveDateString();d.collect.focuses.create({focus:e,day:"today",forDate:t},{wait:!0,success:function(){d.views.focuses.successfulConnection(),d.views.focuses.successfullyCreatedNewFocus()},error:function(e,t,o){s.$input.addClass("pulse"),d.views.focuses.failedConnection(!0)}})}},toggleShow:function(){this.$input.is(":focus")?this.$input.trigger("blur"):this.$input.trigger("focus")},hide:function(){this.$input.is(":focus")&&this.$input.trigger("blur")}}),d.styles.style(),r.widgetManager.handover("focuses",null,{region:"top-left",order:"prepend",bootstrap:function(e,t){r.conditionalFeatures.checkFeatureAndMigrateData("serverfocus","focusVisible","momentum-focus",function(){d.collect.focuses=new d.collect.Focuses,d.views.focuses=new d.views.Focuses({collection:d.collect.focuses,model:r.models.date,el:e,region:"center-below",order:"append"}),r.conditionalFeatures.featureEnabled("pinfocus")&&r.models.customization.getComputedSetting("autoFocus")||d.collect.focuses.fetchedOnce||d.collect.focuses.fetch({reset:!0}),d.views.focuses.parentReady(!0),t&&t(d.views.focuses)},function(){d.collect.focuses=new d.collect.FocusesLegacy,d.views.focuses=new d.views.Focuses({collection:d.collect.focuses,model:r.models.date,el:e,region:"center-below",order:"append"}),d.collect.focuses.fetch({reset:!0}),d.views.focuses.parentReady(!0),t&&t(d.views.focuses)})}}),d};m.addinManager&&m.addinManager.registerAddinFn("2f0cff85-d25a-4326-b7cf-5239a3029956",fn_addin);