package com.paf.appointments.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

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
    
    private static Map getParasMap(HttpServletRequest request) {
 		Map<String, String> map = new HashMap<String, String>();
     	
 		try {
 			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
 			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
 			scanner.close();
 			
 			String[] params = queryString.split("&");
 			for(String param : params) {
 				String[] p = param.split("=");
 				map.put(p[0], p[1]);
 			}
 		} catch (Exception e) {
 			e.printStackTrace();
 		}
 		
     	return map;
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
		
		
		
		
		String app_no = request.getParameter("app_no");
		String nic = request.getParameter("nic");
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		String age = request.getParameter("age");
		String gender = request.getParameter("gender");
		String app_date = request.getParameter("app_date");
		String app_time = request.getParameter("app_time");
		String reason = request.getParameter("reason");
		String ref_doc = request.getParameter("ref_doc");
		
		
		System.out.println(app_no);
		
		Appointments_b app = new Appointments_b(app_no, nic, firstName, lastName, age, gender, app_date, app_time, reason, ref_doc);
		
		String output = Appointments.addAppoinment(app);
		
		response.getWriter().write(output);
		
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
