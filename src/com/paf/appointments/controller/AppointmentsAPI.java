package com.paf.appointments.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.paf.appointment.bean.Appointments_b;
import com.paf.appointment.model.Appointments;

/**
 * Servlet implementation class AppointmentsAPI
 */
@WebServlet("/AppointmentsAPI")
public class AppointmentsAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AppointmentsAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request);
		
		String app_no = paras.get("app_no").toString();
		String nic = paras.get("nic").toString();
		String firstName = paras.get("firstName").toString();
		String lastName = paras.get("lastName").toString();
		String age = paras.get("age").toString();
		String gender = paras.get("gender").toString();
		String app_date = paras.get("app_date").toString();
		String app_time = paras.get("app_time").toString();
		String reason = paras.get("reason").toString();
		String ref_doc = paras.get("ref_doc").toString();
		
		Appointments_b app = new Appointments_b(app_no, nic, firstName, lastName, age, gender, app_date, app_time, reason, ref_doc);
		
		String output = Appointments.updateAppoinments(app);
		
		response.getWriter().write(output);
		
		
		
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		Map paras = getParasMap(request);
		
		String app_no = paras.get("app_no").toString();
		
		Appointments_b app = new Appointments_b(app_no);
		
		String output = Appointments.deleteAppoinment(app);
		
		response.getWriter().write(output);
	}

}
