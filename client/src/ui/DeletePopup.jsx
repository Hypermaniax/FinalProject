export default function DeletePopup({handleClose}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>Are you sure you want to delete this listing?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={handleClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button
         
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
