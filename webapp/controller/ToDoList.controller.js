sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/firestore-todo"
], function (Controller, firestoreTodo) {
	"use strict";

	return Controller.extend("nl.newitera.to-do-demo-pwa.controller.ToDoList", {
		onInit: function () {

		},
		
		onPressTask: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo(
				"RouteTask",
				{id: oEvent.getSource().getBindingContext("todo").sPath.split("/").pop()}
			);
		},
		
		onCheckItem: function(oEvent) {
		    var bSelected = oEvent.getParameter("selected");
		    var oContext = oEvent.getSource().getBindingContext("todo");
		    var selectedId = oContext.getModel().getProperty(oContext.getPath() + "/id");
		    firestoreTodo.setSelected(selectedId, bSelected);
		},
		
		onTest: function() {
		    
		}
	});
});