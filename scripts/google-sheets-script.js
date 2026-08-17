/**
 * GOOGLE APPS SCRIPT FOR CODENAME HI-FIVE LEADS
 * 
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1T_b10NTvlKffdyV14Fw5nq_U_R_Yvpf-PNdDZfBAQ-M/edit
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any existing code and paste this entire code.
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type: "Web app".
 * 6. Set Description: "Hi-Five Lead Webhook".
 * 7. Set "Execute as": "Me".
 * 8. Set "Who has access": "Anyone" (IMPORTANT).
 * 9. Click "Deploy" and copy the Web App URL.
 * 10. Paste that URL in your `.env.local` file as:
 *     GOOGLE_SHEETS_WEBHOOK_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp (IST)",
        "Name",
        "Phone Number",
        "Email Address",
        "Requirement",
        "Source Section",
        "Page URL"
      ]);
      
      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setBackground("#3A1C11");
      headerRange.setFontColor("#F5F3E6");
      headerRange.setFontWeight("bold");
    }

    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.name || "N/A",
      data.phone || "N/A",
      data.email || "N/A",
      data.requirement || data.configInterest || "N/A",
      data.source || data.sourceSection || "Website CTA",
      data.pageUrl || "N/A"
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
