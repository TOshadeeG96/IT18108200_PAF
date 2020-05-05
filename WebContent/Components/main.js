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



	// variables for validations
	let valAppNo = true;
	let valNic = true;
	let valDate = true;
	let valAge = true;
	
	//check number of characters for app_no
	$("#appno").focusout(function(){
		valAppNo = checkAppNo();
		
	});
	
	
	// check number of characters for nic
	$("#nic").focusout(function() {
		vNic = checkNic();
	});
	
//	//check number of characters for app_no
//	$("#app_date").focusout(function(){
//		valDate = checkDate();
///		
//	});
	
	//check number of characters for app_no
	$("#age").focusout(function(){
		valAge = checkAge();
		
	});
	
	
	
	
	
	
	// check empty text fields
	$(document).on("click", "#add-button", function(event) {

		let appnoStatus = appnoRequired();
		let nicStatus = nicRequired();
		let fNameStatus = fNameRequired();
		let lNameStatus = lNameRequired();
		let ageStatus = ageRequired();
		let genderStatus = genderRequired();
		let app_dateStatus = app_dateRequired();
		let app_timeStatus = app_timeRequired();
		let reasonStatus = reasonRequired();
		let ref_docStatus = ref_docRequired();

		$("#appointments-form").submit(function() {
			if (appnoStatus == false || nicStatus == false || fNameStatus == false || lNameStatus == false || ageStatus == false
					|| genderStatus == false || app_dateStatus == false || app_timeStatus == false || reasonStatus == false || ref_docStatus == false) {
				return false;
			} else if(valAppNo == false || valNic == false) {
				return false;
			} else {
				return true;
			}
		});

	});
	
});

//NIC validation
function checkNic() {
	let nicLength = $("#nic").val().length;

	if (nicLength == 10 || nicLength == 12) {
		$("#nic_error").hide();
		return true;
	} else {
		$("#nic_error").html("NIC should be 10 or 12 characters");
		$("#nic_error").show();
		return false;
	}
}

//=======Age validation=========

$(function() {
    $('#add-button').bind('click', function(){
	//let ageLength = $("#age").val().length;
        var age =  $('#age').val(); //var age = parseInt($(this).val(), 10);
    if(age < 18 || age > 65) {
    	$("#age_error").hide();
    	return true;
    }
    	else {
    		$("#age_error").html("Invalid Age!");
    		$("#age_error").show();
    		return false;
    }
        //alert("Wrong age!");
    
   //   else 
});  //   	alert("valid age!");

//==========Date validation============    

$(function() {
    $('#add-button').bind('click', function(){
        var app_date =  $('#app_date').val();
        if(isDate(app_date))
            alert('Valid Date');
        else
            alert('Invalid Date');
    });

function isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;

    var rxDatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{1,2})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); 

    if (dtArray == null) 
        return false;

    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[3];
    dtDay= dtArray[5];
    dtYear = dtArray[1];        

    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}

});


	
//=============app_no is required field==============
	function appnoRequired() {
		if ($("#appno").val().trim() == "") {
			$("#app_no_error").html("This field is required");
			$("#app_no_error").show();
			return false;
		}
	}
	
// ==============nic is required field=================
	function nicRequired() {
		if ($("#nic").val().trim() == "") {
			$("#nic_error").html("This field is required");
			$("#nic_error").show();
			return false;
		}
	}

//========= first name is required field================
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
	
	// app_date is required field
	function app_dateRequired() {
		if ($("#app_date").val().trim() == "") {
			$("#app_date_error").html("This field is required");
			$("#app_date_error").show();
			return false;
		}
	}
	
	// app_time is required field
	function app_timeRequired() {
		if ($("#app_time").val().trim() == "") {
			$("#app_time_error").html("This field is required");
			$("#app_time_error").show();
			return false;
		}
	}
	
	// reason is required field
	function reasonRequired() {
		if ($("#reason").val().trim() == "") {
			$("#reason_error").html("This field is required");
			$("#reason_error").show();
			return false;
		}
	}
	
	// ref_doc is required field
	function ref_docRequired() {
		if ($("#ref_doc").val().trim() == "") {
			$("#ref_doc_error").html("This field is required");
			$("#ref_doc_error").show();
			return false;
		}
	}
	
});

