import React, { useState } from "react";
import { StyleSheet } from "react-native";
import color from "./color";

function MediaQuery() {
    
  // for small devices
  if (color.width < 600) {
    const styles = StyleSheet.create({
      // main display settings
      form: {
        alignItems: "center",
        marginVertical: 28,
        alignSelf: "center",
        height: 333,
        width: 290,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: color.blue,
      },
      form_input_cont: {
        display: "flex",
        flexDirection: "column",
      },
      //login page content
      formText: {
        fontSize: 24,
        TOP: 30,
        color: color.blue,
      },
      inputform: {
        width: 212,
      },
      input_text: {
        fontSize: 24,
        marginTop: 10,
        color: color.black,
      },
      input: {
        borderWidth: 3,
        borderRadius: 6,
        height: 39,
        marginTop: 4,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderColor: color.blue,
        backgroundColor: color.grey,
      },
      button: {
        backgroundColor: color.yellow,
        height: 43,
        marginTop: 24,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
      },
      bt_text: {
        fontSize: 24,
      },
      error: {
        color: color.red,
        fontSize: 17,
        marginTop: 3,
      },
      //Nav bar display settings
      nav_cont: {
        height: 118,
        width: color.width,
        backgroundColor: color.yellow,
        justifyContent: "space-between",
        padding: 7,
        flexDirection: "row",
        alignItems: "center",
      },
      nav_text: {
        display: "none",
      },
      nav_flex: {
        flexDirection: "row",
        alignItems: "center",
      },
      //Main_Page_Containers
      vi_cont: {
        flex: 1,
        flexDirection: "column",
        width: 292,
        height: 200,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: color.blue,
        marginVertical: 10,
        overflow: "hidden",
        paddingHorizontal: 7,
        paddingTop: 3,
        paddingBottom: 5,
      },
      vi_text: {
        fontSize: 16,
        marginBottom: 17,
        marginTop: 12,
      },
      vi_image: {
       display:'none',
      },
      vi_body: {
        display:'none',
      }
    });
    return styles;
  }

  // width for big devices
  if (color.width > 700) {
    const styles = StyleSheet.create({
      // login display settings
      form: {
        alignItems: "center",
        marginVertical: 284,
        alignSelf: "center",
        height: 330,
        width: 480,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: color.blue,
      },
      formText: {
        fontSize: 24,
        TOP: 30,
        color: color.blue,
      },
      form_input_cont: {
        flexDirection: "row",
        marginVertical: 15,
        justifyContent: "space-between",
      },
      inputform: {
        width: 440,
        paddingTop: 20,
      },
      //login page conponents
      input_text: {
        fontSize: 24,
        color: color.black,
      },
      input: {
        width: 295,
        borderWidth: 3,
        borderRadius: 6,
        height: 39,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderColor: color.blue,
        backgroundColor: color.grey,
      },
      button: {
        backgroundColor: color.yellow,
        height: 43,
        marginTop: 24,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
      },
      bt_text: {
        fontSize: 24,
      },
      error: {
        color: color.red,
        fontSize: 19,
      },
      //Nav bar display settings
      nav_cont: {
        height: 118,
        width: color.width,
        backgroundColor: color.yellow,
        justifyContent: "space-between",
        padding: 7,
        flexDirection: "row",
        alignItems: "center",
      },
      nav_text: {
        fontSize: 24,
        fontWeight: "800",
      },
      nav_flex: {
        flexDirection: "row",
        alignItems: "center",
      },
      //Main_Page_Containers
      vi_cont: {
        width: 325,
        height: 470,
        borderWidth: 3,
        borderRadius: 6,
        borderColor: color.blue,
        marginVertical: 10,
        overflow: "hidden",
        paddingHorizontal:22,
        paddingTop: 25,
        paddingBottom:24, 
        marginHorizontal:15,
      },
      vi_text: {
        fontSize: 16,
        marginBottom: 17,
        marginTop: 8,
      },
      vi_image: {
        width: 150,
        height:150,
        marginBottom:22,
      },
      flexer:{
        flex:2,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
      
      },
    });
    return styles;
  }
}

export default MediaQuery();


/*

  display:"flex",
        flexDirection:"row",
        flex:0.5,
        flexShrink:0.5,
        justifyContent:"space-between",      
        flexWrap:"wrap",
        flexDirection: "column",
*/