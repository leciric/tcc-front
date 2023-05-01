import { NextRequest } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import url from 'url';


export async function POST(request: NextRequest) {
  const { query } = url.parse(request.url, true);
  const existingPdfBytes = await request.arrayBuffer();

  const hash = query.hash;

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Embed a standard font
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Load the existing PDF document
  const existingPdfDoc = await PDFDocument.load(existingPdfBytes);

  // Add the pages of the existing PDF document to the new PDF document
  const existingPages = await pdfDoc.copyPages(existingPdfDoc, existingPdfDoc.getPageIndices());
  for (const existingPage of existingPages) {
    pdfDoc.addPage(existingPage);
  }

  // Add a new page to the PDF document
  const page = pdfDoc.addPage();

  // Get the width and height of the new page
  const { width, height } = page.getSize();

  // Draw a string of text on the new page
  // const text = `Esse documento foi autenticado pelo Cartório XPTO e tem o seguinte Hash para validação: `;
  const text = `Esse documento foi autenticado pelo Cartório XPTO e tem o seguinte Hash para validação: ${hash?.toString()}`;
  const textSize = font.widthOfTextAtSize(text, 12);
  page.drawText(text, {
    x: (width - textSize) / 2,
    y: height / 2,
    size: 12,
    font,
    color: rgb(0, 0, 0),
  });


  // Combine the original PDF document with the new page and watermark
  const pdfBytes = await pdfDoc.save();

  return new Response(pdfBytes, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=combined.pdf'
    }
  })
}