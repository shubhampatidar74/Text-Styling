import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    content: "",
    color: "",
    fontSize: "",
    fontStyle: "",
    fontFamily: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <form className="flex flex-col justify-center items-center min-h-screen bg-cyan-500" onSubmit={handleSubmit}>
        <div className="w-11/12 lg:w-3/4 h-full rounded-md shadow-lg overflow-hidden bg-white">
          <h1 className="w-full text-center text-4xl font-bold bg-slate-900 text-white py-4">Text-Styling</h1>

          <div className="w-full flex flex-col items-center gap-4 py-3">
            <input
              className="px-2 text-lg border-2 border-blue-900 outline-none rounded-xl h-14 w-full max-w-md"
              type="text"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter text here"
            />
            <input
              type="submit"
              className="bg-blue-500 text-white text-xl shadow-md cursor-pointer outline-none rounded-xl px-3 lg:px-8 py-3 w-full max-w-md"
              value="Submit"
            />
          </div>

          <div className="flex flex-wrap justify-around items-center py-3">
            <div className="flex flex-col items-center gap-3">
              <label htmlFor="" className="text-lg">Color</label>
              <input
                className="w-16 h-12"
                type="color"
                name="color"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <label htmlFor="" className="text-lg">Font Size</label>
              <input
                className="text-lg border-2 border-blue-900 outline-none rounded-xl px-3 py-3 h-11 w-24"
                type="number"
                name="fontSize"
                onChange={handleChange}
                placeholder="Font size"
              />
            </div>
            <div className="flex flex-col items-center gap-3">
              <label htmlFor="" className="text-lg">Font Style</label>
              <select
                value={formData.fontStyle}
                name="fontStyle"
                className="w-36 px-3 h-11 rounded-md border-2 border-zinc-800 outline-none"
                onChange={handleChange}
              >
                <option value="" disabled>Select font style</option>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
              </select>
            </div>
            <div className="flex flex-col items-center gap-3">
              <label htmlFor="" className="text-lg">Font Family</label>
              <select
                value={formData.fontFamily}
                name="fontFamily"
                className="w-36 px-3 h-11 rounded-md border-2 border-zinc-800 outline-none"
                onChange={handleChange}
              >
                <option value="" disabled>Select font family</option>
                <option value="Arial, sans-serif">Arial</option>
                <option value="Helvetica, sans-serif">Helvetica</option>
                <option value="Times New Roman, serif">Times New Roman</option>
                <option value="Georgia, serif">Georgia</option>
                <option value="Verdana, sans-serif">Verdana</option>
                <option value="Courier New, monospace">Courier New</option>
              </select>
            </div>
          </div>

          <div className="w-full h-full text-center font-bold mt-7 border-t-2 border-zinc-500">
            <p className="overflow-x-auto" style={{
              color: formData.color,
              fontSize: formData.fontSize + "px",
              fontStyle: formData.fontStyle,
              fontFamily: formData.fontFamily,
            }}>
              {formData.content}
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;