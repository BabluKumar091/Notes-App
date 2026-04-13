export default function NoteCard({ note, onEdit, onDelete }) {
  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-md transition">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 text-base mb-1 line-clamp-1">{note.title}</h3>
        <p className="text-gray-500 text-sm line-clamp-4 leading-relaxed">{note.body}</p>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <span className="text-xs text-gray-400">{formatDate(note.createdAt)}</span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(note)}
            className="text-xs text-blue-600 hover:text-blue-700 font-medium px-2 py-1 rounded hover:bg-blue-50 transition cursor-pointer"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(note._id)}
            className="text-xs text-red-500 hover:text-red-600 font-medium px-2 py-1 rounded hover:bg-red-50 transition cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
