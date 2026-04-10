function RatingBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 w-28 text-right">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 w-8">{value}/5</span>
    </div>
  );
}

export default RatingBar;
