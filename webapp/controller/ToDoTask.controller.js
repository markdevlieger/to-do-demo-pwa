sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("nl.newitera.to-do-demo-pwa.controller.ToDoTask", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("RouteTask").attachMatched(this.onRouteMatched, this);
		},
		
		onRouteMatched: function(oEvent) {
			this.getView().bindElement({
				path: "/ToDoThings/" + oEvent.getParameter("arguments").id
			});
		},
		
		onBack: function(){
			var sPreviousHash = History.getInstance().getPreviousHash();
			
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getOwnerComponent().getRouter().navTo("RouteList", {}, true);
			}
		}
	});
});