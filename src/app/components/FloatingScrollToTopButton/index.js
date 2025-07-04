import { ChevronUpIcon } from "@heroicons/react/20/solid"; 

function FloatingScrollToTopButton({ visible, onClick }) {
  if (!visible) return null;
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all cursor-pointer"
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
}

export default FloatingScrollToTopButton;