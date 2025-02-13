interface LineProps {
  class?: string;
}

export default function Line({ class: customClass }: LineProps) {
  return <div class={`h-px bg-black my-2 ${customClass}`}></div>;
}
