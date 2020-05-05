$(document).ready(function() { 
	// hide area of error messages
	$("#app_no_error").hide();
	$("#nic_error").hide();
	$("#fName_error").hide();
	$("#lName_error").hide();
	$("#age_error").hide();
	$("#gender_error").hide();
	$("#app_date_error").hide();
	$("#app_time_error").hide();
	$("#reason_error").hide();
	$("#refd_error").hide();
});





	// variables for validations
	let valAppNo = true;
	let valNic = true;
	
	//check number of characters for app_no
	$("#appno").focusout(function(){
		valAppNo = checkAppNo();
		
	});
	
	
	// check number of characters for nic
	$("#nic").focusout(function() {
		vNic = checkNic();
	});
	
	
	// check empty text fields
//	$(document).on("click", "#add-button", function(event) {

//		let nicStatus = nicRequired();
//		let fNameStatus = fNameRequired();
//		let sNameStatus = sNameRequired();
//		let dobStatus = dobRequired();
//		let genderStatus = genderRequied();
//		let emailStatus = emailRequied();
//		let passwordStatus = passwordRequied();
//		let retypePasswordStatus = retypePasswordRequied();
//
//		$("#registration-form").submit(function() {
//			if (nicStatus == false || fNameStatus == false || sNameStatus == false || dobStatus == false
//					|| genderStatus == false || emailStatus == false || passwordStatus == false || retypePasswordStatus == false) {
//				return false;
//			} else if(vNic == false || vEmail == false || vPassword == false || vRetypePassword == false) {
//				return false;
//			} else {
//				return true;
//			}
///		});
//
///	});

//});
	
	// app_no is required field
	function appnoRequired() {
		if ($("#appno").val().trim() == "") {
			$("#app_no_error").html("This field is required");
			$("#app_no_error").show();
			return false;
		}
	}
	
	// nic is required field
	function nicRequired() {
		if ($("#nic").val().trim() == "") {
			$("#nic_error").html("This field is required");
			$("#nic_error").show();
			return false;
		}
	}

	// first name is required field
	function fNameRequired() {
		if ($("#first-Name").val().trim() == "") {
			$("#fName_error").html("This field is required");
			$("#fName_error").show();
			return false;
		}
	}

	// last name is required field
	function sNameRequired() {
		if ($("#last-name").val().trim() == "") {
			$("#lName_error").html("This field is required");
			$("#lName_error").show();
			return false;
		}
	}

	// age is required field
	function dobRequired() {
		if ($("#age").val().trim() == "") {
			$("#age_error").html("This field is required");
			$("#age_error").show();
			return false;
		}
	}

	// gender is required field
	function genderRequied() {
		if ($('input[name="gender"]:checked').length === 0) {
			$("#gender_error").html("This field is required");
			$("#gender_error").show();
			return false;
		}
	}

	
	
	
	
	//Client===================================================================================
	
	
	
 