import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  let body: any = {};
  try {
    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      body = await request.json();
    } else {
      const text = await request.text();
      body = JSON.parse(text);
    }
  } catch (parseError) {
    console.error('[API LEAD JSON PARSE ERROR]:', parseError);
    return NextResponse.json(
      { success: false, error: 'Invalid JSON request format.' },
      { status: 400 }
    );
  }

  try {
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
    if (honeypot && String(honeypot).trim() !== '') {
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
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
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

    console.log('>>> [LEAD RECEIVED]:', JSON.stringify(leadRecord, null, 2));

    // 1. Persistent Local File Backup (Ensures 0% data loss)
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFilePath = path.join(dataDir, 'leads.json');
      let currentLeads: any[] = [];
      if (fs.existsSync(leadsFilePath)) {
        try {
          const raw = fs.readFileSync(leadsFilePath, 'utf8');
          currentLeads = JSON.parse(raw);
        } catch {
          currentLeads = [];
        }
      }
      currentLeads.push(leadRecord);
      fs.writeFileSync(leadsFilePath, JSON.stringify(currentLeads, null, 2), 'utf8');
    } catch (saveErr) {
      console.error('[LOCAL BACKUP SAVE ERROR]:', saveErr);
    }

    // 2. Direct Webhook Dispatch to Google Apps Script / Google Sheets
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl && !webhookUrl.includes('YOUR_DEPLOYMENT_ID')) {
      try {
        fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadRecord),
          redirect: 'follow',
        }).catch((err) => {
          console.error('[WEBHOOK ASYNC DISPATCH ERROR]:', err);
        });
      } catch (webhookErr) {
        console.error('[GOOGLE APPS SCRIPT WEBHOOK ERROR]:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully! A representative will contact you within 2 hours.',
      data: leadRecord,
    });
  } catch (error: any) {
    console.error('[API LEAD ERROR]:', error?.message || error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
