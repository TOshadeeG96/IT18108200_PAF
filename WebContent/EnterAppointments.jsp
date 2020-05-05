<%@page import="com.paf.appointment.model.Appointments"%>
<%@page import="com.paf.appointment.bean.Appointments_b"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%
    	if(request.getParameter("app_no") != null ) {
        		String apno = request.getParameter("app_no");
        		String nic = request.getParameter("nic") ; 
        		String firstname = request.getParameter("firstName") ; 
        		String lastname = request.getParameter("lastName") ; 
        		String age = request.getParameter("age") ; 
        		String gender = request.getParameter("gender") ; 
        		String appDate = request.getParameter("app_date") ; 
        		String appTime = request.getParameter("app_time") ; 
        		String reason = request.getParameter("reason") ; 
        		String ref_doc = request.getParameter("ref_doc") ;
        		
        		Appointments_b ap = new Appointments_b(apno,nic,firstname,lastname,age,gender,appDate, appTime,reason,ref_doc);
        		
        		Appointments.addAppoinment(ap);
        	
        	
        	}
    %>




<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Appoinment</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="Views/style.css">
<link rel="stylesheet" href="Views/bootstrap.min.css">


<script src="Components/jquery-3.5.0.min.js"></script>
<script src="Components/main.js"></script>

</head>
<body>
<div class="container">
        <fieldset>
            <h3>
                <span>Appoinments</span>
            </h3>

            <form id="appointments-form" action="EnterAppointments.jsp">
            
            <div class="form-group row">
                    <label for="app_no" class="col-sm-2 col-form-label">App.No <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="app_no" class="form-control" id="appno">
                        <span class="error_message" id="app_no_error"></span>
                        
                    </div>
                </div>
                <div class="form-group row">
                    <label for="nic" class="col-sm-2 col-form-label">NIC <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="nic" class="form-control" id="nic">
                        <span class="error_message" id="nic_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="firstName" class="col-sm-2 col-form-label">First Name <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                       <input type="text" name="firstName" class="form-control" id="first-Name">
                         <span class="error_message" id="fName_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="lastName" class="col-sm-2 col-form-label">Last Name <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="lastName" class="form-control" id="last-Name">
                        <span class="error_message" id="lName_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="age" class="col-sm-2 col-form-label">Age <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="age" class="form-control" id="age">
                        <span class="error_message" id="age_error"></span>
                    </div>
                </div>
                <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-sm-2 pt-0">Gender <span class="required-sign">(*)</span></legend>
                      <div class="col-sm-10">
                        <div class="form-check">
                          <input class="form-check-input" id="gender" type="radio" name="gender" value="male" checked>
                          <label class="form-check-label" for="male">
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" id="gender" type="radio" name="gender" value="female">
                          <label class="form-check-label" for="female">
                            Female
                          </label>
                        </div>
                        <span class="error_message" id="gender_error"></span>
                      </div>
                    </div>
                </fieldset>
                <div class="form-group row">
                    <label for="app_date" class="col-sm-2 col-form-label">App.Date <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="app_date"  class="form-control" id="app_date">
                        <span class="error_message" id="app_date_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="app_time" class="col-sm-2 col-form-label">App.Time <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="app_time" class="form-control" id="app_time">
                        <span class="error_message" id="app_time_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="reason" class="col-sm-2 col-form-label">Reason <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="reason" class="form-control" id="reason">
                        <span class="error_message" id="reason_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="ref_doc" class="col-sm-2 col-form-label">Ref.Doctor <span class="required-sign">(*)</span></label>
                    <div class="col-sm-10">
                        <input type="text" name="ref_doc" class="form-control" id="ref_doc">
                        <span class="error_message" id="refd_error"></span>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                      
                      <button type="submit" class="btn btn-success" id="add-button">Add Appoinments</button>
                    </div>
                </div>
            </form>
            <div class="alert alert-success">
            	<%
            		if(session.getAttribute("patient_addAppoinment_status") != null) {
            			out.print(session.getAttribute("patient_addAppoinment_status"));
            		}
            	%>
            </div>  
        </fieldset>
    </div>
    

</body>
</html>

