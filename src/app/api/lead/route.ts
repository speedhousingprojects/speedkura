import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      configInterest,
      sourceSection,
      pageUrl,
      utmSource,
      utmMedium,
      utmCampaign,
      fbclid,
      message,
      honeypot,
    } = body;

    // Honeypot check for bot submissions
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Lead captured successfully' });
    }

    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Name, Phone, and Email are mandatory fields.' },
        { status: 400 }
      );
    }

    // Format IST timestamp
    const now = new Date();
    const timestampIST = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'medium',
    });

    const leadRecord = {
      timestamp: timestampIST,
      isoDate: now.toISOString(),
      name,
      phone,
      email,
      requirement: configInterest || '2 BHK / Duplex',
      source: sourceSection || 'Website CTA',
      pageUrl: pageUrl || 'https://hi-five.kurahomes.in',
      utmSource: utmSource || 'Direct',
      utmMedium: utmMedium || 'Web',
      utmCampaign: utmCampaign || 'HiFive_2026',
      fbclid: fbclid || 'N/A',
      message: message || '',
      googleSheetId: '1T_b10NTvlKffdyV14Fw5nq_U_R_Yvpf-PNdDZfBAQ-M',
    };

    console.log('>>> [LEAD RECEIVED FOR GOOGLE SHEET]:', JSON.stringify(leadRecord, null, 2));

    // 1. Persistent Local File Backup (Ensures 0% data loss)
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFilePath = path.join(dataDir, 'leads.json');
      let currentLeads = [];
      if (fs.existsSync(leadsFilePath)) {
        try {
          currentLeads = JSON.parse(fs.readFileSync(leadsFilePath, 'utf8'));
        } catch {
          currentLeads = [];
        }
      }
      currentLeads.push(leadRecord);
      fs.writeFileSync(leadsFilePath, JSON.stringify(currentLeads, null, 2), 'utf8');
    } catch (saveErr) {
      console.error('[LOCAL BACKUP SAVE ERROR]', saveErr);
    }

    // 2. Direct Webhook Dispatch to Google Apps Script / Google Sheets
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadRecord),
        });
      } catch (webhookErr) {
        console.error('[GOOGLE APPS SCRIPT WEBHOOK ERROR]', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully! A representative will contact you within 2 hours.',
      data: leadRecord,
    });
  } catch (error) {
    console.error('[API LEAD ERROR]', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
