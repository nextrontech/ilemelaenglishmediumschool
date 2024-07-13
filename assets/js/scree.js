document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const kusoma = formData.get('kusoma');
    const namepp = formData.get('namepp');
    const gender = formData.get('gender');
    const dof = formData.get('dof');
    const tatizo = formData.get('tatizo');
    const message = formData.get('message');
    const classto = formData.get('class');
    const shulekutoka = formData.get('shulekutoka');
    const namepr = formData.get('namepr');
    const phoneno = formData.get('phoneno');
    const email = formData.get('email');
    const agree = formData.get('agree');

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('REGISTRATION FORM SUBMITTION | 2024', 50, 10);
    doc.text('- ILEMELA ENGLISH MEDIUM PRIMARY SCHOOL -', 40, 20);
    doc.text(`Have you read & Understood our terms and conditions? : ${kusoma}`, 10, 35);
    doc.text(`Name of Pupil : ${namepp}`, 10, 45);
    doc.text(`Gender : ${gender}`, 10, 55);
    doc.text(`Date of Birth : ${dof}`, 10, 65);
    doc.text(`Health Problem : ${tatizo}`, 10, 75);
    doc.text(`Problem Description : ${message}`, 10, 85);
    doc.text(`School From: ${shulekutoka}`, 10, 95);
    doc.text(`Class Entering : Standard ${classto}`, 10, 105);
    doc.text(`Parent/Guardian's Name : ${namepr}`, 10, 115);
    doc.text(`Phone Number : ${phoneno}`, 10, 125);
    doc.text(`Email : ${email}`, 10, 135);
    doc.text(`Do you agree to our terms and conditions of our school? : ${agree}`, 10, 150);

    doc.save('form.pdf');

    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Use a WhatsApp web URL to open the chat
    const phoneNumber = '255626037661'; // Replace with the recipient's phone number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=Tafadhali Mzazi au Mlezi, ambatanisha fomu iliyopakia kwenye kifaa chako(simu) kisha tuma hiyo form kwenye hii namba ya mtaaluma wetu (utapokea maelezo zaidi hivi punde).`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
        window.location.href = pdfUrl;
    }, 0); // Adjust the timeout as needed
});