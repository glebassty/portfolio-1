// page.tsx

import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <div>
      <div className="bg-primary p-4 text-green-500">Привет!</div>
      <div className="text-primary">Привет!</div>
      <Button>Нажми меня</Button>
    </div>
  );
}
