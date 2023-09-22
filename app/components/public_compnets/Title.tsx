function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-3xl py-2 font-bold  ">
      {children} <span className="text-blue-600 ">.</span>
    </div>
  );
}

export default Title;
