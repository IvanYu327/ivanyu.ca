import { Cat } from "../assets";

export default function NotFound() {
  return (
    <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <img src={Cat} alt="Cat" class="w-[200px] h-[200px] mb-4" />
      <h1 class="text-2xl font-bold">404</h1>
      <p class="text-lg">What are you doing here?</p>
    </div>
  );
}
