const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <div
        className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
        style={{ borderColor: "#2563EB" }}
      ></div>
    </div>
  );
};

export default Spinner;
