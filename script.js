document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีโหลด

    // ดึงค่าจากฟอร์ม
    const fullname = document.getElementById('fullname').value;
    const faculty = document.getElementById('faculty').value;

    // แสดงข้อความแจ้งเตือนเมื่อสมัครสำเร็จ
    alert(`ขอบคุณครับ/ค่ะ คุณ${fullname}\nระบบได้บันทึกการสมัครเรียนใน "${faculty}" เรียบร้อยแล้ว!`);

    // ล้างข้อมูลในฟอร์ม
    this.reset();
});