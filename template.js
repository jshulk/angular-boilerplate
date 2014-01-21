exports.description = "A boilerplate template for angular with requirejs";
exports.notes = "For more information about this template contact"+
				"vjunloc@github or email at vijaytyagi.vt@gmail.com";

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';


exports.template = function(grunt, init, done){

	init.process({}, [

		init.prompt("name"),
		init.prompt("description"),
		init.prompt("version"),
		init.prompt("licenses", "MIT"),
		init.prompt("author_name"),
		init.prompt("author_url")

	], function(error, props){

		var files = init.filesToCopy(props);

		init.addLicenseFiles(files, props.licenses);

		init.copyAndProcess(files, props);

		init.writePackageJSON("package.json", {
			name : props.name,
			version : props.version,
			description : props.description,
			author:{
				name : props.author_name,
				url : props.author_url
			},
			devDependencies:{
				'grunt' : 'latest'
			}
		});

		done();
	});

};
