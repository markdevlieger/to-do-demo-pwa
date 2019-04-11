sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("nl.newitera.to-do-demo-pwa.controller.ToDoList", {
		onInit: function () {

		},
		
		onPressTask: function(oEvent) {
			this.getOwnerComponent().getRouter().navTo(
				"RouteTask",
				{id: oEvent.getSource().getBindingContext().sPath.split("/").pop()}
			);
		}
	});
});