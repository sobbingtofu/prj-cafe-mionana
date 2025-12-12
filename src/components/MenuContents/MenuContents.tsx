function MenuContents() {
  const MENU_CATS = ["Coffee", "Non-Coffee", "Tea", "Bakery", "Morning Specials"];

  return (
    <section className="border border-red-200 w-full h-full">
      <div className="border border-cyan-600 flex flex-row items-center justify-start text-white gap-4 ">
        {MENU_CATS.map((cat) => (
          <div
            key={cat}
            className="text-md font-semibold select-none cursor-pointer 
          bg-[rgb(116,63,11)] hover:bg-[rgb(139,75,12)]
            rounded-full px-4 py-2  transition-colors"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuContents;
