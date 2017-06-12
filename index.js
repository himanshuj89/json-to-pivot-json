var crossfilter = require("crossfilter"); 

var jsonToPivotjson = function (data, options) {
			
	var ndx = crossfilter(data); 

	var pivotCol = options.column
	var pivotVal = options.value;
	var pivotRow = options.row; 

	var out = []; 

	var pivotRowDimension = ndx.dimension(function(d){
		return d[pivotRow];
	});

	var pivotColDimension = ndx.dimension(function(d){
		return d[pivotCol];
	});

	var totalByPivotRow = pivotRowDimension.group().reduceSum(function(d){ 		
		return d[pivotVal]
	});

	var allRecs = totalByPivotRow.all();

	allRecs.forEach(function(rec){
		
		pivotRowDimension.filter();
		pivotRowDimension.filter(rec.key);
		
		var totalByPivotCol = pivotColDimension.group().reduceSum(function(d){ 		
			return d[pivotVal]
		});

		var data = totalByPivotCol.all(); 
		
		var doc = {}; 
		
		doc[pivotRow] = rec.key; 
		
		data.forEach(function(d){
			doc[d.key] = d.value; 
		});
		
		out.push(doc);
	});

	return out;
}


module.exports = jsonToPivotjson;