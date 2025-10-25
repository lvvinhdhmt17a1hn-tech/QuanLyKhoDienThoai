// 1. CÁC IMPORT Ở ĐẦU FILE
'use client'; // Phải ở dòng đầu tiên
import { useState } from 'react';
import Link from 'next/link';
import BookingModal from '../components/BooKingModal';
// (Bỏ qua các import icon nếu bạn chưa dùng)

export default function Home() {
  
  // 2. PHẢI CÓ DÒNG NÀY (BẠN BỊ THIẾU)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3. PHẢI CÓ 'return' Ở ĐÂY (BẠN BỊ THIẾU)
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 1. Header chính */}
      <header className="flex items-center justify-between px-8 py-4 bg-grey-500 shadow-md">
        {/* Logo */}
        <Link href="/">
          <img src="/logo-an-nhien.png" alt="An Nhiên Logo" className="h-16" />
        </Link>

        {/* Navigation chính */}
        <nav className="flex items-center space-x-6">
          <Link href="/gioi-thieu" className="text-gray-700 hover:text-green-700 font-medium">
            GIỚI THIỆU
          </Link>
          <Link href="/dich-vu" className="text-gray-700 hover:text-green-700 font-medium">
            DỊCH VỤ
          </Link>
          <Link href="/san-pham" className="text-gray-700 hover:text-green-700 font-medium">
            SẢN PHẨM
          </Link>
          <Link href="/bi-quyet" className="text-gray-700 hover:text-green-700 font-medium">
            BÍ QUYẾT
          </Link>
          <Link href="/dao-tao" className="text-gray-700 hover:text-green-700 font-medium">
            ĐÀO TẠO
          </Link>
          <Link href="/feedback" className="text-gray-700 hover:text-green-700 font-medium">
            FEEDBACK
          </Link>
          <Link href="/lien-he" className="text-gray-700 hover:text-green-700 font-medium">
            LIÊN HỆ
          </Link>
          
          {/* 4. SỬA LẠI NÚT (Chỉ 1 nút, không lồng nhau) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full hover:bg-orange-600 transition"
          >
            ĐẶT LỊCH
          </button>
          
          {/* Nút tìm kiếm (nằm riêng) */}
          <button className="text-gray-600 hover:text-green-700">
            🔍
          </button>
        </nav>
      </header>

      {/* 2. Sub-Header (Chạy chữ) */}
      <div className="bg-orange-400 py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee-ltr">
          {/* BỘ 1: Văn bản gốc */}
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          
          {/* BỘ 2: Văn bản lặp lại */}
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
          <span className="text-sm text-white mx-4">Sức Khỏe Tạo Nên Vẻ Đẹp</span>
        </div>
      </div>

      {/* 3. Hero Section (Phần chính có ảnh) */}
      <main className="relative flex-1">
        <div className="flex h-[500px]"> 
          {/* Panel bên trái (Text + Ảnh mờ) */}
          <div 
            className="w-1/3 relative text-white flex flex-col justify-center p-12"
            // Sửa lại đường dẫn ảnh cho đúng
            style={{ backgroundImage: "url('/left-banner-background.avif')" }} 
          >
            <div className="z-10">
              <img src="/logo-an-nhien.png" alt="An Nhiên" className="h-12 mb-2" />
              <p className="text-lg">Gội đầu thảo dược dưỡng sinh</p>
              <h1 className="text-6xl font-bold my-4">MASSAGE</h1>
              <div className="w-24 h-1 bg-white mb-4"></div>
              <h2 className="text-3xl font-light">TRỊ LIỆU & THƯ GIÃN</h2>
            </div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </div>

          {/* Ảnh chính bên phải */}
          <div 
            className="w-2/3 bg-cover bg-center"
            // Sửa lại đường dẫn ảnh cho đúng
            style={{ backgroundImage: "url('/hero-image.jpg')" }} 
          >
          </div>
        </div>

        {/* Nút Slider */}
        <button className="absolute left-4 top-1/5 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white transition">
          {'<'}
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-3 rounded-full hover:bg-white transition">
          {'>'}
        </button>
      </main>
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-50">
        <button className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative">
          🛒
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            0
          </span>
        </button>
        <button className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          Z
        </button>
        <button className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          📞
        </button>
        <button className="bg-gray-300 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          {'>'}
        </button>
      </div>
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        
      />
    </div>
  );
}