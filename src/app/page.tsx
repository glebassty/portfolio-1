// page.tsx

import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <div>
      <div className="bg-primary p-4 text-green-500">Привет!</div>
      <div className="text-primary">Привет!</div>
      <Button
        icon={<PlusIcon className="h-5 w-5 text-white" />}
        iconPosition="right"
      >
        Hire me
      </Button>
    </div>
  );
}
