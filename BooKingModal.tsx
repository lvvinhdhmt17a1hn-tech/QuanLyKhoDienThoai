'use client';
import { useState } from 'react';
// Định nghĩa props cho component
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  
  // 1. STATE LƯU THÔNG TIN FORM 
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [serviceGroup, setServiceGroup] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // STATE CHO THÔNG BÁO
  const [message, setMessage] = useState('');

  // 2. HÀM XỬ LÝ SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Đang xử lý, vui lòng chờ...');

    const bookingData = {
      customerName: fullName,
      customerPhone: phone,
      customerEmail: email,
      branchId: branch,
      guestCount: parseInt(guestCount),
      serviceId: service,
      bookingDate: date,
      bookingTime: time,
    };
/*
    try {
      // GỌI API JAVA CỦA BẠN TẠI ĐÂY
      const response = await fetch('/api/dat-lich', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
  

      if (response.ok) {
        setMessage('Đặt lịch thành công! Chúng tôi sẽ liên hệ với bạn sớm.');
        setTimeout(() => {
          onClose(); 
          setMessage(''); 
        }, 2000);
      } else {
        setMessage('Đặt lịch thất bại. Vui lòng thử lại.');
      }
    } catch (error) {
      setMessage('Lỗi kết nối. Vui lòng kiểm tra lại đường truyền.');
    }
  };
*/
setTimeout(() => {
      // Luôn luôn báo thành công
      setMessage('Đặt lịch thành công! (Đây là test giao diện)');
      
      // Tự động đóng form sau 2 giây
      setTimeout(() => {
        onClose(); 
        setMessage(''); 
      }, 2000);
    }, 1000); // 1000ms = 1 giây

  };
  // 3. HÀM XỬ LÝ CLICK RA NGOÀI
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 4. NẾU MODAL ĐÓNG, KHÔNG HIỆN GÌ CẢ
  if (!isOpen) {
    return null;
  }

  // 5. NẾU MODAL MỞ, HIỆN LÊN FORM
  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-amber-50 rounded-lg p-8 shadow-2xl max-w-4xl w-full relative transform transition-all">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-800 text-3xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-amber-800 text-center mb-6">
          ĐẶT LỊCH
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {message && (
            <div className={`p-3 rounded ${message.includes('thất bại') || message.includes('Lỗi') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}

          {/* Hàng 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">Họ & tên *</label>
              <input type="text" placeholder="Nhập họ tên" value={fullName} onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 bg-white border border-amber-400 rounded-md placeholder-gray-400" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">Số điện thoại *</label>
              <input type="tel" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 bg-white border border-amber-400 rounded-md placeholder-gray-400" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">Email *</label>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-white border border-amber-400 rounded-md placeholder-gray-400" required />
            </div>
          </div>

          {/* Hàng 2 */}
          <div>
            <label className="block text-sm font-medium text-amber-800 mb-1">Chọn chi nhánh *</label>
            <select value={branch} onChange={(e) => setBranch(e.target.value)}
              className="w-full p-3 bg-white border border-amber-400 rounded-md" required>
              <option value="">Chọn chi nhánh</option>
              <option value="1">Chi nhánh 1 (Quận 1, TPHCM)</option>
              <option value="2">Chi nhánh 2 (Cầu Giấy, Hà Nội)</option>
            </select>
          </div>

          {/* Hàng 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">Tổng số khách *</label>
              <input type="number" placeholder="Nhập số khách" value={guestCount} onChange={(e) => setGuestCount(e.target.value)}
                className="w-full p-3 bg-white border border-amber-400 rounded-md placeholder-gray-400" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">Chọn nhóm dịch vụ</label>
              <select value={serviceGroup} onChange={(e) => setServiceGroup(e.target.value)}
                className="w-full p-3 bg-white border border-amber-400 rounded-md">
                <option value="">Chọn nhóm dịch vụ</option>
                <option value="massage">Massage trị liệu</option>
                <option value="skin">Chăm sóc da</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">Chọn dịch vụ</label>
              <select value={service} onChange={(e) => setService(e.target.value)}
                className="w-full p-3 bg-white border border-amber-400 rounded-md" required>
                <option value="">Chọn dịch vụ</option>
                <option value="101">Massage đá nóng (60 phút)</option>
                <option value="102">Chăm sóc da chuyên sâu (90 phút)</option>
              </select>
            </div>
          </div>
          
          {/* Hàng 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">Ngày đặt lịch *</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 bg-white border border-amber-400 rounded-md" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-800 mb-1">Chọn khung giờ *</label>
              <select value={time} onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 bg-white border border-amber-400 rounded-md" required>
                <option value="">Chọn khung giờ</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
              </select>
            </div>
          </div>

          {/* Nút Submit */}
          <div className="text-center pt-4">
            <button type="submit" 
              className="bg-amber-700 text-white font-bold py-3 px-12 rounded-full hover:bg-amber-800 transition text-lg">
              ĐẶT LỊCH NGAY
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}