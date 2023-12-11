window.jsPDF = window.jspdf.jsPDF;
const res=document.getElementById('main5-button');
res.addEventListener('click', function() {

    const g = 'https://docs.google.com/document/d/1FU7Z8DpOgJuXo50ruRQmp-sLjnDSfsUR/edit?usp=drive_link&ouid=105915554622532372872&rtpof=true&sd=true';
    window.open(g, '_blank');

});
