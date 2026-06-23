type LabelProps = {
  name: string;
};

export default function Label({ name }: LabelProps) {
  return (
    <div className="mr-2">
      <h1 className="bg-slate-300 p-2 rounded-md font-bold">{name}</h1>
    </div>
  );
}
