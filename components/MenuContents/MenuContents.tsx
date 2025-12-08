function MenuContents() {
  const MENU_CATS = ["Coffee", "Non-Coffee", "Tea", "Bakery", "Morning Specials"];

  return (
    <section className="border border-red-200 w-full h-full">
      <div className="border border-cyan-600 flex flex-row items-center justify-start text-white gap-4 ">
        {MENU_CATS.map((cat) => (
          <div key={cat} className="text-lg lg:text-xl font-semibold">
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuContents;
