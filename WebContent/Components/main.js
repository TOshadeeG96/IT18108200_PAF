$(document).ready(function() 
		
{ 
	
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	
	$("#alertError").hide();
	
	
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
	
	//check number of characters for app_no
//	$("#app_date").focusout(function(){
//		valDate = checkDate();
		
	});
	
	//check number of characters for app_no
	$("#age").focusout(function(){
		valAge = checkAge();
		
	});
//});	

$(document).on("click", "#add-button", function(event) {

	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();


	var status = validateItemForm();

	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}

	// If valid------------------------
	var method = ($("#hidField").val() == "save") ? "POST" : "PUT";

	$.ajax({
		url : "AppointmentsAPI",
		type : method,
		data : $("#appointments-form").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onItemSaveComplete(response.responseText, status);
		}
	});
});
	

$(document).on(
		"click",
		".btnUpdate",
		function(event) {
			$("#hidField").val(
					$(this).closest("tr").find('#hidFieldUpdate').val());
			$("#appno").val($(this).closest("tr").find('td:eq(0)').text());
			$("#nic").val($(this).closest("tr").find('td:eq(1)').text());
			$("#first-Name").val($(this).closest("tr").find('td:eq(2)').text());
			$("#last-Name").val($(this).closest("tr").find('td:eq(3)').text());
			$("#age").val($(this).closest("tr").find('td:eq(4)').text());
		//	$("#genderMale").val($(this).closest("tr").find('td:eq(3)').text());
			$("#app_date").val($(this).closest("tr").find('td:eq(6)').text());
			$("#app_time").val($(this).closest("tr").find('td:eq(7)').text());
			$("#reason").val($(this).closest("tr").find('td:eq(8)').text());
			$("#ref_doc").val($(this).closest("tr").find('td:eq(9)').text());
		});

function onItemSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#hidField").val("save");
	$("#appointments-form")[0].reset();
}

//----------------Deleting appointments--------------------------
$(document).on("click", ".btnRemove", function(event)
		{
			$.ajax(
			{
				url : "AppointmentsAPI",
				type : "DELETE",
				data : "app_no=" + $(this).data("app_no"),
				dataType : "text",
				complete : function(response, status)
				{
					onItemDeleteComplete(response.responseText, status);
				}
			});
		});

//Delete
function onItemDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}




	



//==============Validation=====================
function validateItemForm()
{
	//app_no is required
	if ($("#appno").val().trim() == "")
	{
		return "Insert App Number.";
	}
	
	
	// nic is required
	if ($("#nic").val().trim() == "")
	{
		return "Insert NIC.";
	}
	
	// first name is required
	if ($("#first-name").val().trim() == "")
	{
		return "Insert First Name.";
	}
	
	// last name is required
	if ($("#last-name").val().trim() == "")
	{
		return "Insert Last Name.";
	}
	
	// age is required
	if ($("#age").val().trim() == "")
	{
		return "Insert Age.";
	}
	
	// app_date is required
	if ($("#app_date").val().trim() == "")
	{
		return "Insert Appointment date.";
	}
	
	// app_time is required
	if ($("#app_time").val().trim() == "")
	{
		return "Insert Appointment time.";
	}
	
	// reason is required
	if ($("#reason").val().trim() == "")
	{
		return "Insert Reason.";
	}
	
	// ref_doc is required
	if ($("#ref_doc").val().trim() == "")
	{
		return "Insert Doctor.";
	}
	
	return true;
}
	
	
	

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


	

	
});

