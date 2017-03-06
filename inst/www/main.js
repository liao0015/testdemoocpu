

$(document).ready(function(){
	$("#norm-btn").click(function(){
		ocpu.seturl("http://192.168.88.128/ocpu/library/stats/R")
		var req = ocpu.call(
			"rnorm", 
			{n: 100},
			function(session){
				$("#key").text(session.getKey());
				$("#location").text(session.getLoc());

				session.getConsole(function(output){
					$("#output").text(output);
				});

				session.getObject(function(data){
					console.log('Array of length' + data.length + ".\nFirst few values: " + data.slice(0, 10));
				});

			});
	});

	$("#file-btn").click(function(){
		ocpu.seturl("http://192.168.88.128/ocpu/library/utils/R")
		var myfile = $("#input-file")[0].files[0];
		var filename = myfile.name;
		//var myheader = true;
		var req = ocpu.call(
			"read_file",
			{
				"filename": filename,
			},
			function(session){
				//console.log(session);
				// session.getConsole(function(file){
				// 	console.log(file);
				// });
				session.getObject(function(path){
					console.log(path);
				});
				//console.log(session.getFile());
			});
	});
	
});
