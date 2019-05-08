sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"../model/firestore-todo"
], function (Controller, History, firestoreTodo) {
	"use strict";

	return Controller.extend("nl.newitera.to-do-demo-pwa.controller.ToDoTask", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("RouteTask").attachMatched(this.onRouteMatched, this);
		},
		
		onRouteMatched: function(oEvent) {
			this.getView().bindElement({
				path: "todo>/" + oEvent.getParameter("arguments").id
			});
		},
		
		onCheckItem: function(oEvent) {
		    var bSelected = oEvent.getParameter("selected");
		    var oContext = oEvent.getSource().getBindingContext("todo");
		    var selectedId = oContext.getModel().getProperty(oContext.getPath() + "/id");
		    firestoreTodo.setSelected(selectedId, bSelected);
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