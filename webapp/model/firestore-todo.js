sap.ui.define([
	"./firestore",
	"sap/ui/model/json/JSONModel"
], function (firestore, JSONModel) {

	var oTodoModel = new JSONModel();


	var fnReload = function() {
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
	};
	fnReload();

	return {
		getModel: function () {
			return oTodoModel;
		},
		
		setSelected: function(sId, bSelected) {
		    firestore.collection("todo").doc(sId).set({done: bSelected}, {merge:true});
		},
		
		addTodo: function(sTitle, sDescription, mParams) {
			var mData = {
			    title: sTitle,
			    description: sDescription,
			    done: false
			};
			firestore.collection("todo").add(mData).then(function(docRef) {
				fnReload();
				mParams.success();
			}).catch(function(error) {
			    console.error("Error adding document: ", error);
			});

		}
	}
});