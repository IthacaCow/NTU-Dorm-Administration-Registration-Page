


var fields = {
    identity:'身份',
    name:'姓名',
    account:'帳號',
    email:'E-mail',
    dorm:'宿舍',
    room:'房號',
    MAC:'MAC 卡號',
    phone:'電話',
    IP:'IP' 
};
var display_fields = [ 'name','account','dorm','room','IP' ];

app.controller( 'UserListController',['$scope', '$http', function($scope,$http){
	$scope.gridOptions = {
		enableGridMenu: true
	};
	$http.get('/data/userData.json')
			.success(function(data) {
				$scope.gridOptions.data = data;
	});
}]);

/*
app.controller( 'UserListController', function(DTOptionsBuilder, DTColumnBuilder){
    this.dtOptions = DTOptionsBuilder.fromSource('userData.json')
    	.withPaginationType('full_numbers');

    this.dtColumns = [];
	for (var field in display_fields) {
		this.dtColumns.push( 
			DTColumnBuilder.newColumn(field).withTitle(fields[field])
		);
	};
	
});
*/


