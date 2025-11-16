type AddModalProps = {
  onSelect: () => void;
};

export default function AddModal({ onSelect }: AddModalProps) {
  const values = [100, 200, 300, 400, 500, 1000, 2000, 3000, 4000, 5000];

  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="p-6">
          <h4 className="text-xl font-semibold mb-4">Add Balance</h4>

          <div className="flex flex-wrap gap-2">
            {values.map((v) => (
              <button key={v} onClick={onSelect} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
                {v}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
