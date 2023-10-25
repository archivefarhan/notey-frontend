export function EditNote() {
  return (
    <>
      <form className="mx-auto text-center m-2">
        <input
          placeholder="Title"
          className="w-full rounded-lg border border-orange-600 text-sm p-3 mb-2"
          name="name"
        />
        <textarea
          className="w-full rounded-lg border-orange-600 p-3 text-sm"
          placeholder="Note"
          rows="8"
          name="body"
        ></textarea>
        <button className="rounded-lg w-16 p-1 bg-orange-600 text-white mb-2 mr-1">Submit</button>

        <button className="rounded-lg w-16 p-1 ml-1 bg-orange-600 text-white mb-2" onClick={() => setEditNote(false)}>
          Cancel
        </button>
      </form>
    </>
  );
}
