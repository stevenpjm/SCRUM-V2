/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import dao.DataAccess;
import db.DBUtils;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author steven.masters
 */
@WebServlet(name = "updateStoryCardV2", urlPatterns = {"/updateStoryCardV2"})
public class updateStoryCardV2 extends HttpServlet {
    String updatedStatus="";

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */

        }
    }

// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
       
        Map<String, Object> map = new HashMap<String, Object>();
        boolean isValid = false;

        String storyName_input = request.getParameter("storyName");
        String storyID_input = request.getParameter("storyID");
        String sprintID_input = request.getParameter("sprintID");
        int storyID_converted = Integer.parseInt(storyID_input);
        int sprintID_converted = Integer.parseInt(sprintID_input);
        
        
        
//         String storyid = request.getParameter("storyid");
//        String storyname = request.getParameter("storyname");
//        
//        String lastupdate = request.getParameter("lastupdate");
//        
//        String storynoteid = request.getParameter("storynoteid");
//        String storynote = request.getParameter("torynote");
//        
//        String user1Task = request.getParameter("user1Task");
//        String user1 = request.getParameter("user1");
//        String user2Task = request.getParameter("user2Task");
//        String user2 = request.getParameter("user2");
//        String user3Task = request.getParameter("user3Task");
//        String user3 = request.getParameter("user3");
//        String storybug = request.getParameter("storybug");
//        String swarm = request.getParameter("swarm");
//        String columstatus = request.getParameter("columstatus");
        
               
        PreparedStatement ts;

        try{   
            ts = DBUtils.getPreparedStatment("UPDATE `scrumboards`.`storycards` SET `storyname`= ? WHERE `storyid`= ?;");
            ts.setString(1, storyName_input);
            ts.setInt(2, storyID_converted);
            //ts.setInt(3, sprintID_converted);
            ts.executeUpdate();
            
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(DataAccess.class.getName()).log(Level.SEVERE, null, ex);
        }
        updatedStatus = "updated";
        map.put("isValid", isValid);
        write(response, updatedStatus);

        }

// returns the value back to the orginating
    private void write(HttpServletResponse response, String updatedStatus) throws IOException {
        response.setContentType("text/plain");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write("Updated");
    }
}
