
type Props = {
  onClick: () => void;
};

export default function EditVariablesButton({ onClick }: Props) {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={onClick}
    >
      Edit Variables
    </button>
  );
} 