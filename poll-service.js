/**
 * Example Polling Service Worker
 */

var lab_host = 'lab.openthc.dev';

// Service Definition Attempt
var service_list = [];
service_list.push({
	name: "Local Path",
	path: "C:\\Users\\Lab_Results\\*.csv"
});
service_list.push({
	name: "Instrument 1",
	path: "\\\\host_a\\path_a\\*.csv"
});
service_file.push({
	name: "Instrument 2",
	path: "\\\\host_b\\path\\*.csv"
});
service_file.push({
	name: "Instrument 3"
	path: "ftp://user:pass@host_c/path_c"
});


// Spin Them
for (service_list as s) {

	// Connect and Get List
	var file_list = glob('*.csv');

	for (file_list as f) {

		// Map Results or Filename or Something?

		// Upload
		api_post(`https://{lab_host}/api/result/{ID}`, {
			type: 'instrument-type', // eg: Aglient, Sciex, Shimazdu
			name: 'Something Fancy',
			foo: "bar",
			file: file.name,
		});
	}
}
}
