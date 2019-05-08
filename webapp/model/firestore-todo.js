sap.ui.define([
	"./firestore",
	"sap/ui/model/json/JSONModel"
], function (firestore, JSONModel) {

	var oTodoModel = new JSONModel();

	firestore.collection("todo").get().then(
		(snapshot) => {
			var aModelData = [];
			snapshot.forEach((doc) => {
				var data = doc.data();
				data.id = doc.id;
				aModelData.push(data);
			});
			oTodoModel.setData(aModelData);
		}
	);

	return {
		getModel: function () {
			return oTodoModel;
		},
		
		setSelected: function(sId, bSelected) {
		    firestore.collection("todo").doc(sId).set({done: bSelected}, {merge:true});
		}
	}
});