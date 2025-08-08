import { useEffect, useRef, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function ClassModal({ title, num, description, onClose }) {
  const modalRef = useRef(null);

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-[90%] max-h-[80vh] p-6 shadow-xl overflow-y-auto
                   transform transition-transform duration-300 ease-out
                   animate-fade-slide-in"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">{title} <span className="text-gray-500">({num})</span></h3>
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        @keyframes fade-slide-in {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-in {
          animation: fade-slide-in 0.25s ease forwards;
        }
      `}</style>
    </div>
  );
}

export function EducationModal({ school, degree, description, onClose }) {
  const modalRef = useRef(null);

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-[90%] max-h-[80vh] p-6 shadow-xl overflow-y-auto
                   transform transition-transform duration-300 ease-out
                   animate-fade-slide-in"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">{school}</h3>
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">{degree}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        @keyframes fade-slide-in {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-in {
          animation: fade-slide-in 0.25s ease forwards;
        }
      `}</style>
    </div>
  );
}

export function ProjectModal({ title, role, imgs, description, onClose }) {
  const modalRef = useRef(null);
  const [showPicsModal, setShowPicsModal] = useState(false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-[90%] max-h-[80vh] p-6 shadow-xl overflow-y-auto
                   transform transition-transform duration-300 ease-out
                   animate-fade-slide-in"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FaTimes size={20} />
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-6">{role}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        {imgs?.length > 0 && (
            <div className="flex justify-end">
                <button
                onClick={() => setShowPicsModal(true)}
                className="text-[#10b981] text-sm font-medium hover:underline"
                >
                    View ↗
                </button>
            </div>
        )}
      </div>
      {showPicsModal && (
        <ProjectPicsModal imgs={imgs} onClose={() => setShowPicsModal(false)} />
      )}
      <style jsx>{`
        @keyframes fade-slide-in {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-in {
          animation: fade-slide-in 0.25s ease forwards;
        }
      `}</style>
    </div>
  );
}

function ProjectPicsModal({ imgs, onClose }) {
  const modalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const isYouTubeLink = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const extractYouTubeId = (url) => {
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % imgs.length);
  };

  const currentItem = imgs[currentIndex];
  const isVideo = isYouTubeLink(currentItem);
  const videoId = extractYouTubeId(currentItem);

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-[90%] max-h-[85vh] p-6 shadow-xl overflow-hidden relative
                   transform transition-transform duration-300 ease-out animate-fade-slide-in"
      >
        <div className="absolute top-4 right-4">
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-4">
          {imgs.length > 1 && (
            <button
              onClick={prevImage}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaChevronLeft size={28} />
            </button>
          )}

          <div className="flex-1 flex justify-center mt-4">
            {isVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube Video"
                allowFullScreen
                className="w-full h-[60vh] rounded-lg"
              />
            ) : (
              <img
                src={currentItem}
                alt={`Project media ${currentIndex + 1}`}
                className="max-h-[60vh] object-contain rounded-lg"
              />
            )}
          </div>

          {imgs.length > 1 && (
            <button
              onClick={nextImage}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaChevronRight size={28} />
            </button>
          )}
        </div>
        {imgs.length > 1 && (
            <div className="text-center text-sm text-gray-500 mt-4">
            {currentIndex + 1} / {imgs.length}
            </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-slide-in {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide-in {
          animation: fade-slide-in 0.25s ease forwards;
        }
      `}</style>
    </div>
  );
}